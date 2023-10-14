import { Controller, Get, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUser(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.userService.getUser();

      return response.status(200).json({
        status: 'Ok',
        message: 'Successfully fetch data',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'Ok',
        message: 'Internal server error',
      });
    }
  }
}
