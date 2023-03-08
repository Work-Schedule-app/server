/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Work_hoursSchema } from './work_hours.model';
import { Work_hoursService } from './work_hours.service';
import { Work_hoursController } from './work_hours.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Work_hours', schema: Work_hoursSchema}])],
  controllers: [Work_hoursController],
  providers: [Work_hoursService],
})
export class Work_hoursModule {}
