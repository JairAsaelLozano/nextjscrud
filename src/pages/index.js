import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function MyForm() {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    // Realizar la solicitud POST
     await fetch('api/Login/route', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Convierte la respuesta a JSON
        } else {
          throw new Error('Error en la solicitud');
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
       
      });
  };


  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="backdrop-blur-sm p-6 rounded-lg shadow-2xl">
        <form className="text-center" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-4">Iniciar sesión</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="text-black border-2 border-gray-300 rounded-md px-4 py-2 transition focus:border-blue-500 focus:outline-none"
              name="username"
              onChange={(e)=>{setUserame(e.target.value)}} 
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Contraseña"
              className="text-black border-2 border-gray-300 rounded-md px-4 py-2 transition focus:border-blue-500 focus:outline-none"
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}} 
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
            Iniciar sesión
          </button>
        </form>
        <p className="mt-4">
          ¿No tienes cuenta? <Link href="UserReg/" className="text-black hover:underline">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default MyForm;
