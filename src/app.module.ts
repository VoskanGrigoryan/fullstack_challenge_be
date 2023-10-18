import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
// import { AuthService } from './auth/auth.service';
// import { PrismaService } from './prisma.service';
// import { JwtStrategy } from './auth/jwt.strategy';
import { ProjectsModule } from './project/projects.module';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './task/tasks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProjectsModule, PrismaModule, TasksModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
