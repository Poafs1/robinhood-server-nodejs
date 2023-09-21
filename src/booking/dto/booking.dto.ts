import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class BookingInputDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class BookingDto {
  @IsNotEmpty()
  @IsNumberString()
  id: string;
}
