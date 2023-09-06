import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { PowerSetErrors } from './constant';

@Injectable()
export class PowerSetMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const numsStr = req.query.nums as string;

    if (!numsStr || numsStr.length === 0) {
      throw new BadRequestException(PowerSetErrors.NO_INFORMATION);
    }

    const nums = numsStr.split(',').map((num) => (num === '' ? null : Number(num)));
    this.validate(nums);

    req['nums'] = nums;
    next();
  }

  private validate(nums: number[]) {
    if (nums.length < 1 || nums.length > 10) {
      throw new BadRequestException(PowerSetErrors.NUMS_LENGTH_EXCEED_LIMIT);
    }

    if (new Set(nums).size !== nums.length) {
      throw new BadRequestException(PowerSetErrors.DUPLICATED_NUMBERS);
    }

    const stack: number[] = []
    for (const num of nums) { //Time complexity O(n)
      if (isNaN(num)) {
        throw new BadRequestException(PowerSetErrors.INPUT_MUST_NUMBER);
      }
      else if (num === null) {
        throw new BadRequestException(PowerSetErrors.NO_DATA_IN_COMMA);
      }
      else if (num > 10 || num < -10) {
        stack.push(num);
      }
    }
    if (stack.length !== 0) {
      throw new BadRequestException(`Number out of range: ${stack}, expected a number in the range of -10 to 10`);
    }
  }
}