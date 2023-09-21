import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingDto, BookingInputDto } from './dto/booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // TODO: get all list of bookings + pagination

  @Get()
  async booking() {
    //
  }

  @Post('/')
  async bookingCreate(@Body() bookingInputDto: BookingInputDto): Promise<BookingDto> {
    return this.bookingService.bookingCreate(bookingInputDto);
  }

  @Patch()
  async bookingUpdate() {
    //
  }
}
