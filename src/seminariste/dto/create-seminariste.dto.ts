import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max } from "class-validator"


export class CreateSeminaristeDto {

    @IsString()
    @IsNotEmpty()
    Name: string

    @IsString()
    @IsNotEmpty()
    Firstname: string



    @Type(()=>Number)
    @IsNumber()
    @IsNotEmpty()
    Birth : number

    @IsString()
    @IsNotEmpty()
    Gender: string

    @IsString()
    @IsNotEmpty()
    SchoolLevel:string

    @IsString( )
    @IsNotEmpty()
    Level : string

    @IsString()
    
    @IsNotEmpty()
    Section:string


    @IsString()
    @IsNotEmpty()
    SousComite:string

    
    @IsString()
    @IsNotEmpty()
    Contacts:string

    
    @IsString()
    @IsNotEmpty()
    Parentcontacts:string

    @IsString()
    @IsNotEmpty()
    Matricule:string

}
