
import 'dotenv/config';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {ConfigModule} from './config/config.module'
import { GirlModule } from './girl/girl.module';
import { BoyModule } from './boy/boy.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',           // 数据库类型
    host: process.env.DB_HOST,       // 数据库的连接地址host
    port: +process.env.DB_PORT,              // 数据库的端口
    username: process.env.DB_USERNAME,        // 连接账号
    password: process.env.DB_PASSWORD,     // 连接密码
    database: process.env.DB_DATABASE,     // 连接的数据库
    retryDelay: 500,         // 重试连接数据库间隔
    retryAttempts: 10,       // 允许重连次数
    synchronize: true,      // 是否将实体同步到数据库
    autoLoadEntities:true,  // 自动加载实体配置，forFeature()注册的每个实体都自己动加载
  }), ConfigModule.forRoot('hahah'), GirlModule, BoyModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
