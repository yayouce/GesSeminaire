import { min, Min } from "class-validator";
import { seminaristeSchoolEnum } from "Generics/seminaristeShoolEnum";
import { SeminaristGenreEnum } from "Generics/seminaristGenreEnum";
import { Column, Entity, Generated, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { seminaristeLevelEnum } from "../../../Generics/seminaristeNiveauEnum";
import { semiSectionEnum } from "Generics/semiSectionEnum";
import { semiSousCoEnum } from "Generics/semiSousCoEnum";
import {  CommissionEntity } from "src/commission/entities/commission.entity";
import { TimestampEntites } from "Generics/timestamp.entities";


@Entity("seminariste")
export class SeminaristEntity extends TimestampEntites {

    @Column()
    @PrimaryGeneratedColumn("uuid")
    Idseminariste: string
    
    

    @Column()
    Name: string

    @Column()
    Firstname: string
    @Column(
       
    )
    Birth : number

    @Column({
        type :"enum",
        enum : SeminaristGenreEnum
    })
    Gender: string

    @Column(
        {
            type:"enum",
            enum : seminaristeSchoolEnum
        }
    )
    SchoolLevel:string

    @Column(
        {
            type:"enum",
            enum :seminaristeLevelEnum
        }
    )
    Level : string

    @Column(
        {
            type: "enum",
            enum:semiSectionEnum
        }
    )
    Section:string


    @Column({
        type:"enum",
        enum:semiSousCoEnum
    })
    SousComite:string

    @Column()
    Contacts:string

    @Column()
    Parentcontacts:string

    @Column()
    Matricule:string

    


    // @ManyToOne(
    //     type=>CommissionEntity,
    //     (commission)=>commission.seminaristes,
        
    //     {
    //         nullable:true,
    //         cascade:["insert","update"], //
    //         eager:true //dès qu'on appel cv, il emmène en même temps le CV associé
    //     }
    //     )
    //     commission:CommissionEntity
        

    


}
