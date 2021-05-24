import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurants.entity';

@InputType()
export class createRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}

// export class createRestaurantDto {
//     @Field(() => String)
//     @IsString()
//     @Length(5, 10)
//     name: string;
//     @Field(() => Boolean, { nullable: true })
//     @IsBoolean()
//     isVegan?: boolean;
//     @Field(() => String)
//     @IsString()
//     address: string;
//     @Field(() => String)
//     @IsString()
//     ownerName: string;
//     @Field(() => String)
//     @IsString()
//     categoryName: string;
//   }
