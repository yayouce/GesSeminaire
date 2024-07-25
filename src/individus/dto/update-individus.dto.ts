import { PartialType } from '@nestjs/mapped-types';
import { CreateIndividusDto } from './create-individus.dto';

export class UpdateIndividusDto extends PartialType(CreateIndividusDto) {}
