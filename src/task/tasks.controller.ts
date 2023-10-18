import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.tasksService.findAll(+id);
  }

  @Get('/task/:id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(+id);

    if (task === null) {
      throw new BadRequestException('No task was found with that id');
    }

    if (!task) {
      throw new NotFoundException('No task was found with that id');
    }

    //Only return when query is ok
    return task;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
