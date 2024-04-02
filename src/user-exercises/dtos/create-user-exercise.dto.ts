import { ApiHideProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserExerciseDto {
  @ApiHideProperty()
  @Expose()
  userId: string;

  @IsOptional()
  @IsNumber()
  @Expose()
  log?: number;

  @IsDateString()
  @Expose()
  date: Date;

  @IsString()
  @IsOptional()
  @Expose()
  duration?: string;
}
