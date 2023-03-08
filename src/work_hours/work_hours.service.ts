/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Work_hours } from './work_hours.model'


@Injectable()
export class Work_hoursService {

  constructor(@InjectModel('Work_hours') private readonly Work_hoursModel: Model<Work_hours>) { }

  async AddWork_hours(  
    user_id: mongoose.Schema.Types.ObjectId,
    day: mongoose.Date,
    entrance_time: mongoose.Date,
    leaving_time: mongoose.Date) {
    try {
      const newWork_hours = new this.Work_hoursModel({user_id,day,entrance_time,leaving_time});
      const result = await newWork_hours.save();
      return result;
    }
    catch(error){
       return error
    }
    
  }
 

  async getWork_hoursByUserId(Uid: string) {
    try {
      const work_hours = await this.Work_hoursModel.findOne({id:Uid}).exec();
      return work_hours
    } catch (error) {
      return error
    }
  }
  async delete(id: string) {
    try {
      const deletedWork_hours = await this.Work_hoursModel
        .findByIdAndRemove({ _id: id })
        .exec();
      return deletedWork_hours;
    } catch (error) {
      return error
    }
  }


 
}