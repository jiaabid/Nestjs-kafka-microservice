import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UserTopics } from '@app/common/topic/user.topic';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(UserTopics.ADD_USER)
  async createUser(request) {
    console.log('in the microservicess')
    console.log(request)
    return this.appService.createUser(request);
  }

}
