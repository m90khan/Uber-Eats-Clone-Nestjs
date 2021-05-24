import { Restaurant } from '../entities/restaurants.entity';
declare const createRestaurantDto_base: import("@nestjs/common").Type<Omit<Restaurant, "id">>;
export declare class createRestaurantDto extends createRestaurantDto_base {
}
export {};
