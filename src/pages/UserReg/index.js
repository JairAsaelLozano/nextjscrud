import { useEffect } from 'react';
import { useState } from 'react';
function MyForm() {

    const [image, setImage] = useState(null);
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [email, setEmail] = useState("");

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        // Mostrar un mensaje de error o manejar la incompatibilidad de contraseñas aquí
        alert('Las contraseñas no coinciden');
        return
      }
      
      // Recolectar los valores del formulario aquí (nombre, correo, etc.)
      const formData = new FormData();
      formData.append('username',username)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('image',image)

      // Realizar la solicitud POST
      fetch('api/reguser/route', {
        method: 'POST',
        body: formData

      })
        .then((response) => {
          // Manejar la respuesta aquí
          if (response.ok) {
            // Hacer algo si la respuesta es exitosa
          } else {
            // Manejar errores si la respuesta no es exitosa
          }
        })
        .catch((error) => {
          // Manejar errores de red u otros errores aquí
        });
    };
  
    const handlePasswordMatch = () => {

    };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="backdrop-blur-sm p-6 rounded-lg shadow-2xl">
        <form className="text-center" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-4">Registrate</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="text-black border-2 border-gray-300 rounded-md px-4 py-2 transition focus:border-blue-500 focus:outline-none"
              // Agregar la expresión regular para validar el nombre de usuario
              pattern="[a-zA-Z0-9]+"
              required
              name="username"      
              onChange={(e)=>{setUserame(e.target.value)}}      
            />
          </div>
          <div className="mb-4">
          <input
              type="text"
              placeholder="Correo electronico"
              className="text-black border-2 border-gray-300 rounded-md px-4 py-2 transition focus:border-blue-500 focus:outline-none"
              // Agregar la expresión regular para validar el correo electrónico
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              required
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}}  
            />
          </div>
          <div className="mb-4">
          <input
              type="password"
              placeholder="Contraseña"
              className="text-black border-2 border-gray-300 rounded-md px-4 py-2 transition focus:border-blue-500 focus:outline-none"
              id="password"
              // Agregar la expresión regular para validar la contraseña
              pattern="[a-zA-Z0-9]+[@,;.][a-zA-Z0-9]+"
              required
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}}  
            />
          </div>
          <div className="mb-6">
           <input
              type="password"
              placeholder="Confirmar Contraseña"
              className="text-black border-2 border-gray-300 rounded-md px-4 py-2 transition focus:border-blue-500 focus:outline-none"
              id="confirmPassword"
              required
              onChange={(e)=>{setConfirm(e.target.value)}}  
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden" // Esta clase ocultará el input, se puede personalizar
              required
              name="image"
            />
            <label htmlFor="fileInput">
              {image ? (
                <img
                  src={image}
                  alt="Vista previa"
                  className="rounded-md max-w-xs mx-auto cursor-pointer"
                  style={{ maxWidth: '200px', maxHeight: '200px' }} // Establece el tamaño máximo de la imagen
                />
              ) : (
                <div className="text-black border-2 border-gray-300 rounded-md px-4 py-2 transition focus:border-blue-500 focus:outline-none cursor-pointer">
                  Click para subir una imagen
                </div>
              )}
            </label>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
            Iniciar sesión
          </button>
        </form>
        <p className="mt-4">
          ¿No tienes cuenta? <a href="#" className="text-black hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

export default MyForm;
