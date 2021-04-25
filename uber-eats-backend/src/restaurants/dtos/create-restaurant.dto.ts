import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class createRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;
  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  isVegan?: boolean;
  @Field(() => String)
  @IsString()
  address: string;
  @Field(() => String)
  @IsString()
  ownerName: string;
}
