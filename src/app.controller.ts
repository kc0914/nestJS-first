import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {}

  // 全てのユーザーを取得するエンドポイント
  @Get()
  findAll() {
    return { message: 'This action returns all users' };
  }

  // 特定のidのユーザーを取得するエンドポイント
  @Get('id')
  findOne(@Param('id') id: string) {
    return { message: `This action returns a user by id: ${id}` };
  }

  // 新しいユーザーを作成するエンドポイント
  // @Post()
  // create() {
  //   return { message: 'This action adds a new user' };
  // }

  @Post()
  createBody(@Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return body;
  }
}
