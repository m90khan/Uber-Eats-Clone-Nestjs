"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestaurantDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let createRestaurantDto = class createRestaurantDto {
};
__decorate([
    graphql_1.Field(() => String),
    class_validator_1.IsString(),
    class_validator_1.Length(5, 10),
    __metadata("design:type", String)
], createRestaurantDto.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], createRestaurantDto.prototype, "isVegan", void 0);
__decorate([
    graphql_1.Field(() => String),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], createRestaurantDto.prototype, "address", void 0);
__decorate([
    graphql_1.Field(() => String),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], createRestaurantDto.prototype, "ownerName", void 0);
createRestaurantDto = __decorate([
    graphql_1.ArgsType()
], createRestaurantDto);
exports.createRestaurantDto = createRestaurantDto;
//# sourceMappingURL=create-restaurant.dto.js.map