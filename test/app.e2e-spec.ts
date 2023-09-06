import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return [[],[0]] (GET /power-set?nums=0)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums=0')
      .expect(200)
      .expect([[],[0]]);
  });

  it('should return [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] (GET /power-set?nums=1,2,3)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums=1,2,3')
      .expect(200)
      .expect([[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]);
  });

  it('should return a 400 status for duplicate numbers. (GET /power-set?nums=1,2,3,4,4)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums=1,2,3,4,4')
      .expect(400);
  });

  it('should return a 400 status for nums.length not in [1, 10] range. (GET /power-set?nums=-1,-2,1,2,3,4,5,6,7,8,9,10)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums=-1,-2,1,2,3,4,5,6,7,8,9,10')
      .expect(400);
  });

  it('should return a 400 status for nums[i] not in [-10, 10] range. (GET /power-set?nums=-15,-2,1,6,7,8,9,11)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums=-15,-2,1,6,7,8,9,11')
      .expect(400);
  });

  it('should return a 400 status for no information. (GET /power-set?nums)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums')
      .expect(400);
  });

  it('should return a 400 status for no information. (GET /power-set)', () => {
    return request(app.getHttpServer())
      .get('/power-set')
      .expect(400);
  });

  it('should return a 400 status for input must be a number. (GET /power-set?nums=a,b,c,1,2)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums=a,b,c,1,2')
      .expect(400);
  });
  
  it('should return a 400 status for no data in comma range. (GET /power-set?nums=1,,,)', () => {
    return request(app.getHttpServer())
      .get('/power-set?nums=1,,,')
      .expect(400);
  });

});
