import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class UserService {
  findAll() {
    return ['Taro', 'Hanako'];
  }

  create(name: string) {
    return ` ${name}を追加しました`;
  }
}
