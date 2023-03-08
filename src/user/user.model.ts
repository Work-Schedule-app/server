/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    fireBaseUid:{ type: String,require:true},
    name: { type: String, require:true },
   
});


export interface User {
    fireBaseUid:string  
    name: string
    
 }
