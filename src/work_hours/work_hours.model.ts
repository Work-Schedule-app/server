/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const Work_hoursSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    day:{type:Date, require: true},
    entrance_time: {type:Date, require: true},
    leaving_time: {type:Date, require: true},



});


export interface Work_hours {
    user_id: mongoose.Schema.Types.ObjectId,
    day: mongoose.Date,
    entrance_time: mongoose.Date,
    leaving_time: mongoose.Date

}
