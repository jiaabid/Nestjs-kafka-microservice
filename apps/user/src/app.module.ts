import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaService } from '@app/common/prisma/src';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
