import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm'
import { InjectRepository }from '@nestjs/typeorm'
import { Girl } from './entities/girl.entity'
import { GirlDetail } from './entities/girlDetail.entity'

@Injectable()
export class GirlService {
    constructor(
        @InjectRepository(Girl) private readonly girl:Repository<Girl>,
        @InjectRepository(GirlDetail) private readonly girlDetail: Repository<GirlDetail>
    ) {}
    getGirl(): {[key: string]: string | number} {
        return {
            code: 0,
            data: 'wginit',
            message: 'hello'
        }
    }

    addGirl() {
        const data = new Girl()
        console.log('new girl==', data)
        data.name = 'wg'
        data.age = 12
        data.skill = 'coding'
        return this.girl.save(data)
    }

    getGirlById(id:number){
        let  reJson:any ={}
        switch(id){
            case 1:
                reJson={id:1,name:'翠花',age:18}
                break;
            case 2:
                reJson={id:1,name:'小红',age:20}
                break;
            case 3:
                reJson={id:1,name:'大丫',age:23}
                break;
        }
        return reJson;
    }

    delGirl(id:number){
        return this.girl.delete(id)
    }

    //修改
    updateGirl( id: number ){
        let data = new Girl()
        data.name="王小丫";
        data.age=19
        return this.girl.update(id,data)
    }

    // 查询
    getGirls(){
        return this.girl.find()
    }

    // 根据姓名查找一个女孩的信息
    getGirlByName(name:string){
        return this.girl.find({
            where:{
                name: Like(`%${name}%`)
            }
        })
    }

    addGirlDetail(name: string) {
        const data = new GirlDetail()
        data.girl = this.getGirlByName(name)[0]
        data.location = 'guangdong'
        return this.girlDetail.save(data)
    }


}
