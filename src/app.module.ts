/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    //mongodb://localhost:27017/waze-project
    //mongodb+srv://naama_frank-kod:VWSi2A2igrlqgFCw@cluster0.sddzqju.mongodb.net/waze-final-project?retryWrites=true&w=majority
    ConfigModule.forRoot(),
    
   
    MongooseModule.forRoot('mongodb+srv://Work_Schedule_app:dpBKp3FHsGfEHwmH@schedapp.shvvev6.mongodb.net/?retryWrites=true&w=majority'),  
  
  ],
  controllers: [],
  providers: [],
})

export class AppModule {

}
