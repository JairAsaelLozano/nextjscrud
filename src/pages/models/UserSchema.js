import { Schema, model, models } from "mongoose";
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    Username:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },   
    Email:{
        type: String,
        required: true
    },  
    Image: {
        public_id: String,
        secure_url: String
    }
})


UserSchema.statics.encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10)
    
    return await bcrypt.hash(password, await bcrypt.genSalt(10))
}

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password,receivedPassword)
}


export default models.User || model('User', UserSchema)
