/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';


@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async AddUser(fireBaseUid:string, name:string) {
    try {
      const newUser = new this.userModel({fireBaseUid, name});
      const result = await newUser.save();
      return result;
    }
    catch(error){
       return error
    }
    
  }
  async getUsers() {
    try {
      const result = await this.userModel.find().exec();
      return result;

    }
    catch (err) {
      return err
    }
  }

  async getUserByFireBaseUid(Uid: string) {
    try {
      const newUser = await this.userModel.findOne({fireBaseUid:Uid}).exec();
      return newUser
    } catch (error) {
      return error
    }
  }
  async delete(id: string) {
    try {
      const deletedSystem = await this.userModel
        .findByIdAndRemove({ _id: id })
        .exec();
      return deletedSystem;
    } catch (error) {
      return error
    }
  }


  async updateUser(id: string, name: string) {
    try {
      const updateUser = await this.userModel.findById(id)
      if (name) { updateUser.name = name }
    
      updateUser.save();
      return updateUser
    }
    catch (error) {
      return error
    }


  }
}