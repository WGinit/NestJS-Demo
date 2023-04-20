import {Module, Global, DynamicModule} from '@nestjs/common'
import { config } from './config'

@Global()
// @Module({
//   providers:[{
//     provide:"Config",
//     useValue: config
//   }],
//   exports:[{
//     provide: "Config",
//     useValue: config
//   }]
// })

export class ConfigModule {
    static forRoot (name: string): DynamicModule{
        if (name) {
            config.appName = name
        }
        return {
            module: ConfigModule,
            providers:[{
                provide: "Config",
                useValue: config
            }],
            exports:[{
                provide:"Config",
                useValue: config
            }]
        }
      }
}