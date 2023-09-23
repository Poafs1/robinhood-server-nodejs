import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {
  BookingDto,
  BookingFilterDto,
  BookingInputDto,
  BookingPatchDto,
  BookingsDto,
} from './dto/booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { PaginationInputDto } from 'src/utils/dto/pagination.dto';
import { pageInfo } from '../utils/helpers/pagination.helper';

@Injectable()
export class BookingService {
  constructor(@InjectRepository(BookingEntity) private bookingEntity: Repository<BookingEntity>) {}

  private mapBooking(booking: BookingEntity): BookingDto {
    return {
      id: booking.id.toString(),
      title: booking.title,
      descirption: booking.description,
      bookingStatus: booking.booking_status,
      isArchived: booking.is_archived,
      createAt: booking.created_at,
      updatedAt: booking.updated_at,
      // TODO: can move out to user service mapping
      user: {
        id: booking.user?.id.toString(),
        email: booking.user?.email,
        username: booking.user?.username,
      },
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

  async bookings(filter: BookingFilterDto & PaginationInputDto): Promise<BookingsDto> {
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
    const { bookingStatus, isArchived } = filter;

    const findBooking = this.bookingEntity
      .createQueryBuilder('booking')
      .where('booking.id = :id', { id });

    if (bookingStatus) {
      findBooking.andWhere('booking.booking_status = :bookingStatus', { bookingStatus });
    }

    if (isArchived !== undefined) {
      findBooking.andWhere('booking.is_archived = :isArchived', { isArchived });
    }

    findBooking.leftJoinAndSelect('booking.user', 'user');

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
}
