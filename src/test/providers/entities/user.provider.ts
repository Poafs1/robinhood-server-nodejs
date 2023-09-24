import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../../../user/entities/user.entity';

export const userEntityProvider = {
  provide: getRepositoryToken(UserEntity),
  useFactory: jest.fn(() => ({
    //
  })),
};
