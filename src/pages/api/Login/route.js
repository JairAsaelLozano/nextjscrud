import multiparty from "multiparty";
import { uploadImage } from "@/pages/cloudinary";
import User from '@/pages/models/UserSchema'
import {connectDB} from '@/pages/moongose/mongoose'
import jwt from 'jsonwebtoken'
export default async function Register(req, res) {
    connectDB()

    const userFound = await User.findOne({Username: req.body.username})
    if(!userFound) return res.json({message: "user not found"})

    const MatchPassword = await User.comparePassword(req.body.password, userFound.Password)

    if(!MatchPassword) return res.json({token: null, message: 'invalid'})

    const token = jwt.sign({id: userFound._id}, 'secretword', {
    expiresIn:3600
    })

    await res.json({'token': token, 'UserName': req.body.username,success: true});

    
}

