/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import mongoose from 'mongoose';
import { Work_hoursService } from './work_hours.service';

@Controller('Work_hours')
export class Work_hoursController {

    constructor(private Work_hoursService: Work_hoursService) { }

    @Get()

    @Get(':fireBaseUid')
    getWork_hoursById(@Param('fireBaseUid') fireBaseUid: string) {
        return this.Work_hoursService.getWork_hoursByUserId(fireBaseUid);
    }
    @Post('addWork_hours')
    signup(@Body('fireBaseUid') fireBaseUid: string,
        @Body('name') 
        id: mongoose.Schema.Types.ObjectId,
        day: mongoose.Date,
        entrance_time: mongoose.Date,
        leaving_time: mongoose.Date
    ) {
        return this.Work_hoursService.AddWork_hours(id, day, entrance_time, leaving_time);
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.Work_hoursService.delete(id);
    }

}
