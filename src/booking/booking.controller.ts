import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import {
  BookingDto,
  BookingFilterDto,
  BookingInputDto,
  BookingPatchDto,
  BookingsDto,
} from './dto/booking.dto';
import { User } from 'src/user/decorators/user';
import { PaginationInputDto } from 'src/utils/dto/pagination.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get('/')
  async bookings(@Query() filter: BookingFilterDto & PaginationInputDto): Promise<BookingsDto> {
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
}
