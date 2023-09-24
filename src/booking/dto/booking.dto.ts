import {
  IsArray,
  IsBoolean,
  IsBooleanString,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { BookingStatusEnum } from '../enums/bookingStatus.enum';
import { UserDto } from 'src/user/dto/user.dto';
import { PaginationDto } from 'src/utils/dto/pagination.dto';

export class BookingCommentInputDto {
  @IsNotEmpty()
  @IsString()
  comment: string;
}

export class BookingCommentDto {
  @IsNotEmpty()
  @IsNumberString()
  id: string;

  @IsNotEmpty()
  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsObject()
  user: UserDto;

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;
}

export class BookingInputDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class BookingPatchDto {
  @IsNotEmpty()
  @IsEnum(BookingStatusEnum)
  bookingStatus: BookingStatusEnum;

  @IsNotEmpty()
  @IsBoolean()
  isArchived: boolean;
}

export class BookingFilterDto {
  @IsOptional()
  @IsBooleanString()
  isShowComments: boolean;
}

export class BookingsFilterDto {
  @IsOptional()
  @IsEnum(BookingStatusEnum)
  bookingStatus: BookingStatusEnum;

  @IsOptional()
  @IsBooleanString()
  isArchived: boolean;

  @IsOptional()
  @IsString()
  sortBy: string;

  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  sortOrder: 'ASC' | 'DESC';
}

export class BookingDto {
  @IsNotEmpty()
  @IsNumberString()
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(BookingStatusEnum)
  bookingStatus: BookingStatusEnum;

  @IsNotEmpty()
  @IsBoolean()
  isArchived: boolean;

  @IsObject()
  user: UserDto | null;

  @IsNotEmpty()
  @IsArray()
  bookingComments: BookingCommentDto[];

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;
}

export class BookingEdgeDto {
  @IsString()
  cursor?: string | null;

  @IsNotEmpty()
  @IsObject()
  node: BookingDto;
}

export class BookingsDto {
  @IsNotEmpty()
  @IsObject()
  pageInfo: PaginationDto;

  @IsNotEmpty()
  @IsArray()
  edges: BookingEdgeDto[];
}
