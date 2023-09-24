import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {
  BookingCommentDto,
  BookingCommentInputDto,
  BookingDto,
  BookingsFilterDto,
  BookingInputDto,
  BookingPatchDto,
  BookingsDto,
  BookingFilterDto,
} from './dto/booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { PaginationInputDto } from 'src/utils/dto/pagination.dto';
import { pageInfo } from '../utils/helpers/pagination.helper';
import { BookingCommentEntity } from './entities/booking-comment.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingEntity) private bookingEntity: Repository<BookingEntity>,
    @InjectRepository(BookingCommentEntity)
    private bookingCommentEntity: Repository<BookingCommentEntity>,
  ) {}

  // TODO: can move out to user service mapping
  private mapUser(user?: UserEntity): UserDto {
    if (!user) {
      return null;
    }

    return {
      id: user.id.toString(),
      email: user.email,
      username: user.username,
    };
  }

  private mapBookingComment(bookingComment: BookingCommentEntity): BookingCommentDto {
    return {
      id: bookingComment.id.toString(),
      comment: bookingComment.comment,
      user: this.mapUser(bookingComment.user),
      createdAt: bookingComment.created_at,
      updatedAt: bookingComment.updated_at,
    };
  }

  private mapBooking(booking: BookingEntity): BookingDto {
    return {
      id: booking.id.toString(),
      title: booking.title,
      description: booking.description,
      bookingStatus: booking.booking_status,
      isArchived: booking.is_archived,
      bookingComments:
        booking.booking_comments?.map((bookingComment) => this.mapBookingComment(bookingComment)) ||
        [],
      createdAt: booking.created_at,
      updatedAt: booking.updated_at,
      user: this.mapUser(booking.user),
    };
  }

  private mapBookings(
    bookings: [BookingEntity[], number],
    limit: number,
    offset: number,
  ): BookingsDto {
    const [foundBookings, total] = bookings;

    const edges = foundBookings.map((booking) => ({
      node: this.mapBooking(booking),
    }));

    return {
      edges,
      pageInfo: pageInfo(offset, limit, total),
    };
  }

  async bookings(filter: BookingsFilterDto & PaginationInputDto): Promise<BookingsDto> {
    const {
      bookingStatus,
      isArchived,
      sortBy = 'created_at',
      sortOrder = 'DESC',
      limit = 10,
      offset = 0,
    } = filter;

    const findBookings = this.bookingEntity.createQueryBuilder('booking');

    if (bookingStatus) {
      findBookings.andWhere('booking.booking_status = :bookingStatus', { bookingStatus });
    }

    if (isArchived !== undefined) {
      findBookings.andWhere('booking.is_archived = :isArchived', { isArchived });
    }

    findBookings
      .leftJoinAndSelect('booking.user', 'user')
      .orderBy(`booking.${sortBy}`, sortOrder)
      .limit(limit)
      .skip(offset);

    const foundBooking = await findBookings.getManyAndCount().catch((error) => {
      throw new InternalServerErrorException(error);
    });

    return this.mapBookings(foundBooking, limit, offset);
  }

  async booking(id: string, filter: BookingFilterDto): Promise<BookingDto> {
    const { isShowComments = false } = filter;

    const findBooking = this.bookingEntity
      .createQueryBuilder('booking')
      .where('booking.id = :id', { id });

    findBooking.leftJoinAndSelect('booking.user', 'user');

    if (isShowComments) {
      findBooking
        .leftJoinAndSelect('booking.booking_comments', 'booking_comments')
        .leftJoinAndSelect('booking_comments.user', 'booking_comments_user');
    }

    const foundBooking = await findBooking.getOne().catch((error) => {
      throw new InternalServerErrorException(error);
    });

    if (!foundBooking) {
      throw new NotFoundException('Booking not found');
    }

    return this.mapBooking(foundBooking);
  }

  async bookingCreate(user: UserDto, bookingInputDto: BookingInputDto): Promise<BookingDto> {
    const { title, description } = bookingInputDto;

    const createdBooking = await this.bookingEntity
      .save(
        this.bookingEntity.create({
          title,
          description,
          user_id: user.id,
        }),
      )
      .catch((error) => {
        throw new InternalServerErrorException(error);
      });

    return this.mapBooking(createdBooking);
  }

  async bookingUpdate(id: string, bookingPatchDto: BookingPatchDto): Promise<BookingDto> {
    const { bookingStatus, isArchived } = bookingPatchDto;

    const foundBooking = await this.bookingEntity.findOne(id).catch((error) => {
      throw new InternalServerErrorException(error);
    });

    if (!foundBooking) {
      throw new NotFoundException('Booking not found');
    }

    const updatedBooking = await this.bookingEntity
      .save({
        ...foundBooking,
        booking_status: bookingStatus,
        is_archived: isArchived,
      })
      .catch((error) => {
        throw new InternalServerErrorException(error);
      });

    return this.mapBooking(updatedBooking);
  }

  async bookingCommentCreate(
    id: string,
    user: UserDto,
    bookingCommentInputDto: BookingCommentInputDto,
  ): Promise<BookingCommentDto> {
    const { comment } = bookingCommentInputDto;

    const foundBooking = await this.bookingEntity.findOne(id).catch((error) => {
      throw new InternalServerErrorException(error);
    });

    if (!foundBooking) {
      throw new NotFoundException('Booking not found');
    }

    const addedBookingComment = await this.bookingCommentEntity
      .save(
        this.bookingCommentEntity.create({
          comment,
          booking_id: foundBooking.id,
          user_id: user.id,
        }),
      )
      .catch((error) => {
        throw new InternalServerErrorException(error);
      });

    return this.mapBookingComment(addedBookingComment);
  }
}
