
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(payload) {
    try {
      console.log(payload)
      console.log(this.prismaService.user, 'this is user')
      return await this.prismaService.user.create(payload)
    } catch (err) {
      console.log(err)
    }


  }
}
