import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurants.entity';
import { createRestaurantDto } from './create-restaurant.dto';

@InputType()
export class updateRestaurantDto extends PartialType(createRestaurantDto) {}
