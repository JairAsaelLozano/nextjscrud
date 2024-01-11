import multiparty from "multiparty";
import { uploadImage } from "@/pages/cloudinary";
import User from '@/pages/models/UserSchema'
import {connectDB} from '@/pages/moongose/mongoose'

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  connectDB()
  const form = new multiparty.Form();
  const data = await new Promise((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
      
    });
  });
  // console.log(`data: `, JSON.stringify(data.fields.username[0]));
  if (JSON.stringify(data.fields.image)) { //pregunta si llega una imagen

    const result = await uploadImage(data.fields.image)  //sube la imagen por cloudinary

    const user_image = {                    //crea la informacion de la imagen //id y el url para vincularlo al usuario
      public_id: result.public_id,
      secure_url: result.secure_url
    }
    
    const UserData = await new User({     //crea el usuario a partir del modelo de moongose
      Username : data.fields.username[0],
      Password : await User.encryptPassword(data.fields.password[0]),   //encriptamos la contraseña con bcrypt
      Email: data.fields.email[0],
      Image : user_image
    })
    await UserData.save();          //guardamos el modelo
    res.status(200).json({ success: true });
  }
  res.status(200).json({ success: false });

  
}