import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs';
cloudinary.config({
    cloud_name : 'dbipw9nuw',
    api_key: '641194224186714',
    api_secret :'Ks6I6uPjC6gCVebwR8W8fr9dBcw',
    secure: true
})

export const uploadImage = async (base64Image) => {
  try {
    
    // Decodificar la imagen base64 y guardarla como un archivo temporal
    const imagePath = 'temp_image.png'; // Ruta temporal donde se guardará el archivo

    const base64Data = base64Image[0].replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');

    fs.writeFileSync(imagePath, imageBuffer);
  

    // Subir la imagen a Cloudinary desde el archivo temporal
    const result = await cloudinary.uploader.upload(imagePath, {folder : 'replit'});

    // Eliminar el archivo temporal después de subirlo a Cloudinary
    
    fs.unlinkSync(imagePath);
    
    return result; // Devolver el resultado de la subida a Cloudinary

  } catch (error) {
    throw new Error('Error al subir la imagen a Cloudinary');
  }
};
