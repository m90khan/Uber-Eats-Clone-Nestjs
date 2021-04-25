import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurants.entity';
export declare class RestaurantsResolver {
    restaurants(vegan: boolean): Restaurant[];
    createRestaurant(createRestaurantDto: createRestaurantDto): boolean;
}
