import { Test, TestingModule } from '@nestjs/testing';
import { PowerSetService } from './power-set.service';

describe('PowerSetService', () => {
  let service: PowerSetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PowerSetService],
    }).compile();

    service = module.get<PowerSetService>(PowerSetService);
  });

  it('should return [[],[0]] (calucaltePowerSet("0"))', () => {
    const result = service.calculatePowerSet([0])
    expect(result)
      .toEqual([[], [0]])
  });

  it('should return [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] (calucaltePowerSet("1,2,3"))', () => {
    const result = service.calculatePowerSet([1,2,3])
    expect(result)
      .toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
  });

});
