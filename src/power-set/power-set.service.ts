import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerSetService {
    public calculatePowerSet(nums: number[]): number[][] {  // Time complexity O((2^n)-1)
        const result: number[][] = [[]];
        for (const num of nums) {
            const currentSubsetCount = result.length;
            for (let i = 0; i < currentSubsetCount; i++) {
                const subset = [...result[i], num];
                result.push(subset);
            }
        }
        return result;
    }
}
