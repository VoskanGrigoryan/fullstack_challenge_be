import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(): Promise<any> {
    return this.prisma.users.findUnique({
      where: {
        username: 'voskan',
      },
    });
  }
}
