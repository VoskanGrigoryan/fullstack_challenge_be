import { IsNotEmpty, IsInt, Min, Max, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  username: string;

  @IsString()
  @Length(2, 50)
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(2)
  user_role: number;

  //Should be enctrypted
  @IsNotEmpty()
  @IsString()
  password: string;
}
