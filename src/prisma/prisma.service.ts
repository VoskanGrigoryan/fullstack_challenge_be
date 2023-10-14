import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

//Service is where business logic is defined
@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
