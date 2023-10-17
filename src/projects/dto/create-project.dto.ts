import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 100)
  title: string;

  @IsString()
  @Length(1, 500)
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  owner_user_id: number;

  updated_at?: Date;
}
