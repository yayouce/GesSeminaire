import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';
import { Repository } from 'typeorm';
import { CommissionEntity } from './entities/commission.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcript from "bcrypt"
import { genSalt } from 'bcrypt';

@Injectable()
export class CommissionService {

 constructor(
  @InjectRepository(CommissionEntity)
private registerRepository : Repository<CommissionEntity>

 ){}

  async registerCommission(registerDto: CreateCommissionDto) {
    

    const newCommission= this.registerRepository.create(registerDto)

    newCommission.salt =await bcript.genSalt()
    newCommission.Password= bcript.hashSync(newCommission.Password, newCommission.salt)
  
   try{
     
     return await this.registerRepository.save(newCommission)
   }
   catch(err){
    throw new ConflictException('mot de pass ou Numresponsable existe déjà!!')
   }



  }


  LoginCommission(LoginDto){}

  findAll() {
    return `This action returns all commission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commission`;
  }

  update(id: number, updateCommissionDto: UpdateCommissionDto) {
    return `This action updates a #${id} commission`;
  }

  remove(id: number) {
    return `This action removes a #${id} commission`;
  }
}
