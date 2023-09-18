import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService

  constructor() {
    this.messagesService = new MessagesService()
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body)
    return this.messagesService.create(body)
  }

  @Get('/:id')
  getMessage(@Param('id') messageId) {
    console.log(messageId)
    return this.messagesService.findOne(messageId)
  }
}
