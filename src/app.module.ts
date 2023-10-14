import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
// import { AuthService } from './auth/auth.service';
// import { PrismaService } from './prisma.service';
// import { JwtStrategy } from './auth/jwt.strategy';
import { ProjectsModule } from './projects/projects.module';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ProjectsModule, PrismaModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
