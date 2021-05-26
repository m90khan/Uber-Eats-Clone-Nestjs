import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { Restaurant } from './restaurants/entities/restaurants.entity';
@Module({
  imports: [
    // for .env file . isGlobal to be available all over modules
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod'),
        // HOST: Joi.string().required(),
        // PORT: Joi.number().default(5432).required(),
        // USERNAME: Joi.string().required(),
        // DATABASE: Joi.string().required(),
        // PASSWORD: Joi.string().required(),
      }),
    }),
    RestaurantsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,

      entities: [Restaurant],
      synchronize: process.env.NODE_ENV !== 'prod',
      logging: process.env.NODE_ENV !== 'prod',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// host: process.env.HOST,
// port: +process.env.PORT,
// username: process.env.USERNAME,
// password: String(process.env.PASSWORD),
// database: process.env.DATABASE,
// host: process.env.HOST,
// port: +process.env.PORT,
// username: process.env.USERNAME,
// password: String(process.env.PASSWORD),
// database: process.env.DATABASE,
