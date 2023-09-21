import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './entities/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
