import {Entity, OneToOne, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated, JoinColumn} from 'typeorm'
import { Girl } from './girl.entity'

@Entity()

export class GirlDetail {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Generated('uuid')
    uuid: string

    @Column({ type: "varchar", length: 255})
    location: string

    @OneToOne(() => Girl)
    @JoinColumn({name:'girl_id'})
    girl: Girl
}