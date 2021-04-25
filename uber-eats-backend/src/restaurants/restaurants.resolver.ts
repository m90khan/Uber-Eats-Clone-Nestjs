import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurants.entity';

@Resolver()
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('vegan') vegan: boolean): Restaurant[] {
    return [];
  }
  @Mutation(() => Restaurant)
  createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
    console.log(createRestaurantDto);

    return true;
  }
}
