import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';
import {
  bookingCommentEntityProvider,
  bookingEntityProvider,
} from '../test/providers/entities/booking.provider';
import { userEntityProvider } from '../test/providers/entities/user.provider';
import { userData } from '../test/mock/user.mock';
import {
  BookingCommentInputDto,
  BookingFilterDto,
  BookingInputDto,
  BookingPatchDto,
  BookingsFilterDto,
} from './dto/booking.dto';
import { UserDto } from '../user/dto/user.dto';
import { PaginationInputDto } from '../utils/dto/pagination.dto';
import { BookingStatusEnum } from './enums/bookingStatus.enum';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        userEntityProvider,
        bookingEntityProvider,
        bookingCommentEntityProvider,
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('bookings', () => {
    it('should return bookings as a pagination object', async () => {
      const filter: BookingsFilterDto & PaginationInputDto = {
        limit: undefined,
        offset: undefined,
        sortBy: undefined,
        sortOrder: undefined,
        bookingStatus: undefined,
        isArchived: undefined,
      };

      const bookings = await service.bookings(filter);

      expect(bookings).toBeDefined();
      expect(bookings.edges).toBeDefined();
      expect(bookings.pageInfo).toBeDefined();
    });

    it('should return bookings with limit and offset', async () => {
      const filter: BookingsFilterDto & PaginationInputDto = {
        limit: 5,
        offset: 0,
        sortBy: 'id',
        sortOrder: 'DESC',
        bookingStatus: undefined,
        isArchived: undefined,
      };

      const bookings = await service.bookings(filter);

      expect(bookings.edges.length).toBe(filter.limit);
      expect(bookings.edges[0].node.id).toBe('5');
      expect(bookings.pageInfo.hasNextPage).toBe(true);
      expect(bookings.pageInfo.hasPreviousPage).toBe(false);

      filter.offset = 5;

      const bookings2 = await service.bookings(filter);

      expect(bookings2.edges.length).toBe(filter.limit);
      expect(bookings2.edges[0].node.id).toBe('10');
      expect(bookings2.pageInfo.hasNextPage).toBe(false);
      expect(bookings2.pageInfo.hasPreviousPage).toBe(true);
    });

    it('should return bookings with sortBy and sortOrder', async () => {
      const filter: any = {
        limit: 5,
        offset: 0,
        sortBy: 'id',
        sortOrder: 'ASC',
        bookingStatus: undefined,
        isArchived: undefined,
      };

      const bookings = await service.bookings(filter);

      expect(bookings.edges[0].node.id).toBe('1');

      filter.sortOrder = 'DESC';

      const bookings2 = await service.bookings(filter);

      expect(bookings2.edges[0].node.id).toBe('5');
    });

    it('should return bookings with bookingStatus', async () => {
      const filter: BookingsFilterDto & PaginationInputDto = {
        limit: 5,
        offset: 0,
        sortBy: undefined,
        sortOrder: undefined,
        bookingStatus: BookingStatusEnum.TODO,
        isArchived: undefined,
      };

      const bookings = await service.bookings(filter);

      bookings.edges.forEach((booking) => {
        expect(booking.node.bookingStatus).toBe(filter.bookingStatus);
      });
    });

    it('should return bookings with isArchived', async () => {
      const filter: BookingsFilterDto & PaginationInputDto = {
        limit: 5,
        offset: 0,
        sortBy: undefined,
        sortOrder: undefined,
        bookingStatus: undefined,
        isArchived: false,
      };

      const bookings = await service.bookings(filter);

      bookings.edges.forEach((booking) => {
        expect(booking.node.isArchived).toBe(filter.isArchived);
      });
    });
  });

  describe('booking', () => {
    it('should return a booking', async () => {
      const filter: any = {
        isShowComments: false,
      };

      const booking = await service.booking('1', filter);

      expect(booking).toBeDefined();
      expect(booking.id).toBe('1');
    });

    it('should throw an error if booking is not found', async () => {
      const filter: BookingFilterDto = {
        isShowComments: false,
      };

      await expect(service.booking('0', filter)).rejects.toThrow();
    });
  });

  describe('bookingCreate', () => {
    it('should return a booking', async () => {
      const user: UserDto = userData[0];

      const bookingInputDto: BookingInputDto = {
        title: 'Test Title',
        description: 'Test Description',
      };

      const booking = await service.bookingCreate(user, bookingInputDto);

      expect(booking).toBeDefined();
      expect(booking.id).toBeDefined();
      expect(booking.title).toBe(bookingInputDto.title);
      expect(booking.description).toBe(bookingInputDto.description);
      expect(booking.bookingStatus).toBe(BookingStatusEnum.TODO);
      expect(booking.isArchived).toBe(false);
      expect(booking.user).toBeNull();
      expect(booking.createdAt).toBeDefined();
      expect(booking.updatedAt).toBeDefined();
    });
  });

  describe('bookingUpdate', () => {
    it('should return a booking', async () => {
      const bookingPatchDto: BookingPatchDto = {
        bookingStatus: BookingStatusEnum.DONE,
        isArchived: true,
      };

      const booking = await service.bookingUpdate('1', bookingPatchDto);

      expect(booking).toBeDefined();
      expect(booking.id).toBe('1');
      expect(booking.bookingStatus).toBe(bookingPatchDto.bookingStatus);
      expect(booking.isArchived).toBe(bookingPatchDto.isArchived);
    });
  });

  describe('bookingCommentCreate', () => {
    it('should return a booking comment', async () => {
      const user: UserDto = userData[0];

      const bookingComment: BookingCommentInputDto = {
        comment: 'Test Comment',
      };

      const booking = await service.bookingCommentCreate('1', user, bookingComment);

      expect(booking).toBeDefined();
      expect(booking.id).toBeDefined();
      expect(booking.comment).toBe(bookingComment.comment);
      expect(booking.user).toBeNull();
      expect(booking.createdAt).toBeDefined();
      expect(booking.updatedAt).toBeDefined();
    });
  });
});
