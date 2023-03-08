/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { Work_hoursModule } from './work_hours/work_hours.module';
@Module({
  imports: [
   
    ConfigModule.forRoot(), 
    MongooseModule.forRoot('mongodb+srv://Work_Schedule_app:ZieVrHsNSaqJ1d1P@schedapp.shvvev6.mongodb.net/?retryWrites=true&w=majority'),  
  UserModule,
  Work_hoursModule
  
  ],
  controllers: [],
  providers: [],
})

export class AppModule {

}