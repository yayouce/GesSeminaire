import { Injectable } from '@nestjs/common';
import { CreateSeminaristeDto } from './dto/create-seminariste.dto';
import { UpdateSeminaristeDto } from './dto/update-seminariste.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SeminaristEntity } from './entities/seminariste.entity';
import { Repository } from 'typeorm';
import { randomInt } from 'crypto';

@Injectable()
export class SeminaristeService {
constructor(
  
  @InjectRepository(SeminaristEntity)
  private SeminaristeRepository: Repository<SeminaristEntity>

){}

  async createSemi(createSeminaristeDto: CreateSeminaristeDto) {

    
    const seminariste = await this.SeminaristeRepository.create(createSeminaristeDto)
   
    const Number = seminariste.Parentcontacts.slice(0,3)
    seminariste.Name=seminariste.Name.toLocaleUpperCase()
    seminariste.Firstname=seminariste.Firstname.toLocaleUpperCase()
    seminariste.Matricule = "HKM24_"+seminariste.Name.slice(0,1)+"."+createSeminaristeDto.Firstname.slice(0,1)+Number

    return this.SeminaristeRepository.save(createSeminaristeDto) ;
  }

  async findAll() {
    return await this.SeminaristeRepository.find() ;
  }

  findOne(id: number) {
    return `This action returns a #${id} seminariste`;
  }

  update(id: number, updateSeminaristeDto: UpdateSeminaristeDto) {
    return `This action updates a #${id} seminariste`;
  }

  remove(id: number) {
    return `This action removes a #${id} seminariste`;
  }
}
