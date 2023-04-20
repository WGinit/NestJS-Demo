

import {Entity, OneToMany, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated, JoinColumn} from 'typeorm'
import { Order } from '../../order/entities/order.entity'


@Entity()
export class Girl{

  @PrimaryGeneratedColumn('uuid')
  id:number

  @Generated('uuid')
  uuid:string

  @CreateDateColumn({type:"timestamp"})
  entryTime: Date

  @Column({ type: "varchar", length: 255})
  name:string

  @Column({ type: 'int'})
  age:number

  @Column({ type: 'varchar'})
  skill:string

  @OneToMany(() => Order, (order) => order.girl)
  @JoinColumn()
  order: Order[]
}

