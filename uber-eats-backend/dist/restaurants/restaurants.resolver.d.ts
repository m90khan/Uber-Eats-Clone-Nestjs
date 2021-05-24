import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurants.entity';
import { RestaurantsService } from './restaurants.service';
export declare class RestaurantsResolver {
    private readonly restaurantsService;
    constructor(restaurantsService: RestaurantsService);
    restaurants(): Promise<Restaurant[]>;
    createRestaurant(createRestaurantDto: createRestaurantDto): Promise<boolean>;
}
