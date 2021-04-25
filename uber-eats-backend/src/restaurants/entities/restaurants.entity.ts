import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isVegan?: boolean;
  @Field(() => String)
  address: string;
  @Field(() => String)
  ownerName: string;
}
