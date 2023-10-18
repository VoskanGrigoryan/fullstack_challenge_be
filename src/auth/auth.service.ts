import { Injectable, NotFoundException } from '@nestjs/common';
// import { JwtStrategy } from './jwt.strategy';
// import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
import { LoginDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
  ) // private readonly usersService: UsersService,
  {}

  async login(loginDto: LoginDto): Promise<any> {
    const { username, password } = loginDto;

    const user = await this.prismaService.users.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      throw new NotFoundException('Invalid password');
    }

    return {
      token: this.jwtService.sign({ username }),
    };
  }
}
