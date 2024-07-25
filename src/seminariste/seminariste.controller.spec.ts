import { Test, TestingModule } from '@nestjs/testing';
import { SeminaristeController } from './seminariste.controller';
import { SeminaristeService } from './seminariste.service';

describe('SeminaristeController', () => {
  let controller: SeminaristeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeminaristeController],
      providers: [SeminaristeService],
    }).compile();

    controller = module.get<SeminaristeController>(SeminaristeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
