import { Test, TestingModule } from '@nestjs/testing';
import { SeminaristeService } from './seminariste.service';

describe('SeminaristeService', () => {
  let service: SeminaristeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeminaristeService],
    }).compile();

    service = module.get<SeminaristeService>(SeminaristeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
