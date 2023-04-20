
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { GirlMiddleware } from '../middleWare/girl.middleware'


import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { Girl } from './entities/girl.entity'
import { GirlDetail } from './entities/girlDetail.entity';
import { BoyService } from '../boy/boy.service';

@Module({
    imports: [TypeOrmModule.forFeature([Girl, GirlDetail])],
    controllers: [GirlController],
    providers: [GirlService, BoyService]
})
// 局部中间件
export class GirlModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(GirlMiddleware).forRoutes('girl')
        // consumer.apply(GirlMiddleware).forRoutes({path:'girl',method: RequestMethod.GET}) // 只允许GET进中间件
    }
}
