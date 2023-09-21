import { Injectable } from '@nestjs/common';
import { BookingDto, BookingInputDto } from './dto/booking.dto';

@Injectable()
export class BookingService {
  async bookingCreate(bookingInputDto: BookingInputDto): Promise<BookingDto> {
    const { title, description } = bookingInputDto;

    console.log(title, description);

    return null;
  }
}
