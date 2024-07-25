import { commissionrole } from "Generics/CommiRole-Enum";
import { TimestampEntites } from "Generics/timestamp.entities";
import {  SeminaristEntity } from "src/seminariste/entities/seminariste.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("commission")
export class CommissionEntity extends TimestampEntites  {

    @Column()
    @PrimaryGeneratedColumn("uuid")
    IdCommission:string;

    @Column({
        unique:true
    })
    NumRes :String

    @Column({
        type:"enum",
        enum:commissionrole,
        default:commissionrole.AUTRE

    })
    Role:string;
    

    @Column({
        length:50,
        unique:true
    })
    Password:string;


    

    @Column({
        length:50
    })
    salt:string;

    
    // @OneToMany(
    //     type =>SeminaristEntity,
    //     (seminariste)=> seminariste.commission,
    //     {
    //         nullable:true,
    //         cascade:true, //
    //             //dès qu'on appel cv, il emmène en même temps le CV associé
            
    //     }
    // )
    
    //     seminaristes : SeminaristEntity[]

}
