import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';

//Strategy for validating JWT tokens. Verifies the auth of tokens sent by user
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrkey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { username: string }) {
    const user = await this.prismaService.users.findUnique({
      where: {
        username: payload.username,
      },
    });

    return user;
  }
}
