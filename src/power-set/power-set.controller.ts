import { Controller, Get, HttpCode, HttpStatus, Query, Req } from '@nestjs/common';
import { PowerSetService } from './power-set.service';

@Controller('power-set')
export class PowerSetController {
    constructor(private readonly powerSetService: PowerSetService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    powerSet(@Req() req: number[]) {
        const nums:number[] = req['nums']
        return this.powerSetService.calculatePowerSet(nums)
    }

}
