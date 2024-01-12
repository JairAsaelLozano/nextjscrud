import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

function MyForm() {
 
  return (
    <>
    <div className='grid grid-rows-2 grid-flow-col'>

      <div className="relative flex flex-wrap items-center mr-5 ml-5 mt-20">
        
        <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 mt-0 mb-0 rounded-lg shadow-2xl flex items-center  hover-img">
          <img className="max-w-full max-h-full grayscale" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg" alt="Imagen 1"></img>
        </div>

        <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 mt-0 mb-0 rounded-lg shadow-2xl flex items-center  hover-img">
          <img className="max-w-full max-h-full grayscale" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg" alt="Imagen 1"></img>
        </div>

        <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 mt-0 mb-0 rounded-lg shadow-2xl flex items-center  hover-img">
          <img className="max-w-full max-h-full grayscale" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg" alt="Imagen 1"></img>
        </div>

        <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 mt-0 mb-0 rounded-lg shadow-2xl flex items-center  hover-img">
          <img className="max-w-full max-h-full grayscale" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg" alt="Imagen 1"></img>
        </div>

        <div className="w-44 h-60 backdrop-blur-sm p-3 mr-1 ml-1 mt-0 mb-0 rounded-lg shadow-2xl flex items-center  hover-img">
          <img className="max-w-full max-h-full grayscale" src="https://res.cloudinary.com/dbipw9nuw/image/upload/v1704426093/replit/bvunbt1d0tnrh9ifdqr5.jpg" alt="Imagen 1"></img>
        </div>
      </div>

      <div className='grid justify-items-center'>
        <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
      </div>
    </div>
    </>
  );
}

export default MyForm;
