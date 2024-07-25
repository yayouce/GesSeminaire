import { Injectable } from '@nestjs/common';
import { CreateIndividusDto } from './dto/create-individus.dto';
import { UpdateIndividusDto } from './dto/update-individus.dto';

@Injectable()
export class IndividusService {
  create(createIndividusDto: CreateIndividusDto) {
    return 'This action adds a new individus';
  }

  findAll() {
    return `This action returns all individus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} individus`;
  }

  update(id: number, updateIndividusDto: UpdateIndividusDto) {
    return `This action updates a #${id} individus`;
  }

  remove(id: number) {
    return `This action removes a #${id} individus`;
  }
}
