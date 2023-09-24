import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
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
import { User } from 'src/user/decorators/user';
import { PaginationInputDto } from 'src/utils/dto/pagination.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get('/')
  async bookings(@Query() filter: BookingsFilterDto & PaginationInputDto): Promise<BookingsDto> {
    return this.bookingService.bookings(filter);
  }

  @Get('/:id')
  async booking(@Param('id') id: string, @Query() filter: BookingFilterDto): Promise<BookingDto> {
    return this.bookingService.booking(id, filter);
  }

  @Post('/')
  async bookingCreate(@User() user, @Body() bookingInputDto: BookingInputDto): Promise<BookingDto> {
    return this.bookingService.bookingCreate(user, bookingInputDto);
  }

  @Patch('/:id')
  async bookingUpdate(
    @Param('id') id: string,
    @Body() bookingPatchDto: BookingPatchDto,
  ): Promise<BookingDto> {
    return this.bookingService.bookingUpdate(id, bookingPatchDto);
  }

  @Post('/:id/comment')
  async bookingCommentCreate(
    @Param('id') id: string,
    @User() user,
    @Body() bookingCommentInputDto: BookingCommentInputDto,
  ): Promise<BookingCommentDto> {
    return this.bookingService.bookingCommentCreate(id, user, bookingCommentInputDto);
  }
}
