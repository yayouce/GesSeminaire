import { Injectable } from '@nestjs/common';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';

@Injectable()
export class MaterielsService {
  create(createMaterielDto: CreateMaterielDto) {
    return 'This action adds a new materiel';
  }

  findAll() {
    return `This action returns all materiels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiel`;
  }

  update(id: number, updateMaterielDto: UpdateMaterielDto) {
    return `This action updates a #${id} materiel`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiel`;
  }
}
