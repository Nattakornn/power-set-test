import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PowerSetController } from './power-set/power-set.controller';
import { PowerSetService } from './power-set/power-set.service';
import { PowerSetMiddleware } from './power-set/power-set.middleware';

@Module({
  imports: [],
  controllers: [PowerSetController],
  providers: [PowerSetService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PowerSetMiddleware)
      .forRoutes({ path: 'power-set', method: RequestMethod.GET });
  }

}
