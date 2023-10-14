import { IsNotEmpty, IsInt, Min, Max, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 200)
  title: string;

  @IsString()
  @Length(2, 500)
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  assigned_to: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(4)
  severity: number;

  @IsNotEmpty()
  due_date: Date;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  project_id: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  owner_user_id: number;

  @IsNotEmpty()
  @IsString()
  task_type: string;
}
