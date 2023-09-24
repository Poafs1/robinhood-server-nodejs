import { getRepositoryToken } from '@nestjs/typeorm';
import { BookingCommentEntity } from '../../../booking/entities/booking-comment.entity';
import { BookingEntity } from '../../../booking/entities/booking.entity';
import { bookingCommentData, bookingData } from '../../../test/mock/booking.mock';
import { sortBy } from '../../utils/arrays.utils';
import { BookingStatusEnum } from '../../../booking/enums/bookingStatus.enum';

export const bookingEntityProvider = {
  provide: getRepositoryToken(BookingEntity), // Provide the repository token
  useFactory: jest.fn(() => {
    const filter: any = {
      limit: 10,
      offset: 0,
      sortBy: 'created_at',
      sortOrder: 'DESC',
    };

    const data = bookingData;

    return {
      createQueryBuilder: jest.fn(() => {
        return {
          leftJoinAndSelect: jest.fn().mockReturnThis(),
          orderBy: jest.fn(function (key, order) {
            filter.sortBy = key.split('.')[1];
            filter.sortOrder = order;

            return this;
          }),
          limit: jest.fn(function (limit) {
            filter.limit = limit;

            return this;
          }),
          skip: jest.fn(function (offset) {
            filter.offset = offset;

            return this;
          }),
          where: jest.fn(function (_key, value) {
            Object.keys(value).forEach((key) => {
              filter[key] = value[key];
            });

            return this;
          }),
          andWhere: jest.fn(function (_key, value) {
            Object.keys(value).forEach((key) => {
              filter[key] = value[key];
            });

            return this;
          }),
          getManyAndCount: jest.fn(function () {
            let result = data;

            if (filter?.bookingStatus) {
              result = result.filter((booking) => booking.booking_status === filter.bookingStatus);
            }

            if (filter?.isArchived !== undefined) {
              result = result.filter((booking) => booking.is_archived === filter.isArchived);
            }

            result = result.slice(filter.offset, filter.offset + filter.limit);

            const total = bookingData.length;

            result = sortBy(result, filter.sortBy, filter.sortOrder);

            return Promise.resolve([result, total]);
          }),
          getOne: jest.fn(function () {
            if (!filter.id) {
              return Promise.reject();
            }

            const foundData = data.find((booking) => booking.id === Number(filter.id));

            if (!foundData) {
              return Promise.reject();
            }

            return Promise.resolve(foundData);
          }),
        };
      }),
      save: jest.fn((booking) => {
        const payload = {
          id: data[data.length - 1].id + 1,
          booking_status: BookingStatusEnum.TODO,
          is_archived: false,
          created_at: new Date(),
          updated_at: new Date(),
          ...booking,
        };

        return Promise.resolve(payload);
      }),
      create: jest.fn((booking) => {
        const payload = {
          id: data[data.length - 1].id + 1,
          booking_status: BookingStatusEnum.TODO,
          is_archived: false,
          created_at: new Date(),
          updated_at: new Date(),
          ...booking,
        };

        data.push(payload);

        return payload;
      }),
      findOne: jest.fn((id) => {
        const foundData = data.find((booking) => booking.id === Number(id));

        if (!foundData) {
          return Promise.reject();
        }

        return Promise.resolve(foundData);
      }),
    };
  }),
};

export const bookingCommentEntityProvider = {
  provide: getRepositoryToken(BookingCommentEntity),
  useFactory: jest.fn(() => {
    const data = bookingCommentData;

    return {
      save: jest.fn(({ comment, user_id, booking_id }) => {
        const payload = {
          id: data[data.length - 1].id + 1,
          comment,
          user_id,
          booking_id,
          created_at: String(new Date()),
          updated_at: String(new Date()),
        };

        return Promise.resolve(payload);
      }),
      create: jest.fn(({ comment, user_id, booking_id }) => {
        const payload = {
          id: data[data.length - 1].id + 1,
          comment,
          user_id,
          booking_id,
          created_at: String(new Date()),
          updated_at: String(new Date()),
        };

        data.push(payload);

        return payload;
      }),
    };
  }),
};
