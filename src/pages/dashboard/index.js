import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function MyForm() {
 
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 rounded-lg shadow-2xl flex items-center justify-center">
        <img className="max-w-full max-h-full grayscale hover:grayscale-0" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg"></img>
      </div>

      <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 rounded-lg shadow-2xl flex items-center justify-center">
        <img className="max-w-full max-h-full grayscale hover:grayscale-0" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg"></img>
      </div>

      <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 rounded-lg shadow-2xl flex items-center justify-center">
        <img className="max-w-full max-h-full grayscale hover:grayscale-0" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg"></img>
      </div>
    </div>
  );
}

export default MyForm;
