import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GenerateQrcodeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  url: string;
}

export class GenerateQrcodeResponseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  response: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  message: string;
}
