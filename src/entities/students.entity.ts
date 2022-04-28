// import { Emailcontact } from 'src/agora/emailcontact/emailcontact.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
//   OneToOne,
//   JoinColumn,
//   OneToMany,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsString, IsInt, IsNotEmpty } from 'class-validator';

// import { LocalentitycontactgroupEntitycontact } from '../localentitycontactgroup_entitycontact/localentitycontactgroup_entitycontact.entity';
@Entity('students')
@Unique(['name'])
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ length: 255 })
  photo: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  //@OneToOne((type) => Localentitycontactgroup, (entitycontact) => Entitycontact)
  //@JoinColumn({ name: 'localentitycontactgroup_id' })
  //local: Localentitycontactgroup;

//   @OneToMany(
//     (type) => LocalentitycontactgroupEntitycontact,
//     (localcontact) => localcontact.contact,
//   )
//   local: LocalentitycontactgroupEntitycontact[];

}
