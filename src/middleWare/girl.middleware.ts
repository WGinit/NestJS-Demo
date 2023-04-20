import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GirlMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('come in girl middleware');
    // res.send('禁止访问，你被拦截了');
    next();
  }
}