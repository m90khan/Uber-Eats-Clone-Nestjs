import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;
  @Field(() => String)
  @Column()
  name: string;
  @Field(() => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan?: boolean;
  @Field(() => String)
  @Column()
  address: string;
  @Field(() => String)
  @Column()
  ownerName: string;
  @Field(() => String)
  @Column()
  categoryName: string;
}
