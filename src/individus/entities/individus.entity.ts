import { IndividusTypeEnum } from "Generics/IndividusType-Enum";
import { TimestampEntites } from "Generics/timestamp.entities";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("individus")
export class IndividusEntity extends TimestampEntites  {

   
    @PrimaryGeneratedColumn("uuid")
    Idindividus:string;

    @Column()
    Name :string
    @Column()
    Firstname :string

    @Column({
        type:"enum",
        enum:IndividusTypeEnum,
        
        default:IndividusTypeEnum.VISITEUR

    })
    TypeIndiv:string;
    

    @Column()
    NumIndiv : string

    @Column({
        length:50,
        unique:true
    })
    password:string;


    @Column({
        length:50
    })
    salt:string;
    
 

}


