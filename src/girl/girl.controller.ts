import { Controller, Inject, Get, Post, Request, Query, Body, Param, Headers } from '@nestjs/common';
import { GirlService } from './girl.service';
import {BoyService} from './../boy/boy.service';



@Controller('girl')
export class GirlController {
    constructor(@Inject('Config') private config: Object, private girlService: GirlService, private boyService: BoyService) {}

    @Get()
    getGirls(): any {
        return this.girlService.getGirls();
    }

    @Post('/add')
    addGirl(@Body() body) {
        console.log('body===', body)
        return this.girlService.addGirl();
    }

    @Get('/getGirlById')
    getGirlById(@Query() query):any{
        console.log('query===', query)
        let id:number = parseInt(query.id)
        return this.girlService.getGirlById(id)
    }

    @Get('/findGirlById/:id/:name')
    findGirlById(@Param() param, @Headers() headers) {
        console.log('headers===', headers)
        console.log('params===', param)
        let id = parseInt(param.id)
        return this.girlService.getGirlById(id)
    }

    @Get('/delete/:id')
    deleteGirl(@Param() params):any{
        let id:number = parseInt(params.id)
        return this.girlService.delGirl(id);
    }

    @Get('/update/:id')
    async updateGirl(@Param() params):Promise<void>{
        let id:number = parseInt(params.id)
        await this.girlService.updateGirl(id);
    }


    @Get('/findGirlByName/:name')
    findGirlByName(@Param() params) {
        console.log('params===', params)
        let name = params.name
        return this.girlService.getGirlByName(name)
    }


    @Get('/corstest')
    corsTest(): object{
      return {message: '测试跨域请求成功'}
    }

    @Get('/boy')
    getBoys() {
        console.log('config==', this.config)
        return this.boyService.findAll()
    }

    @Post('/addGirlDetail')
    addGirlDetail(@Body() body) {
        const { name } = body
        return this.girlService.addGirlDetail(name)
    }



}
