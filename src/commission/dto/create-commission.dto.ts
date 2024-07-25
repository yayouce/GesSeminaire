import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommissionDto {

@IsNotEmpty()
@IsString()
Role:string;

@IsNotEmpty()
@IsString()
Password:string;


@IsNotEmpty()
@IsString()
NumRes :String
}
