import { IsString, Length } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @Length(4, 20)
  username: string;

  @IsString()
  @Length(4, 40)
  email: string;

  @IsString()
  @Length(4, 20)
  password: string;
}
