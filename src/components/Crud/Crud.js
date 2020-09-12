import React from 'react';
import './Crud.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Links from './Links'

const Crud = () => {
   return (
      <>
         <h1 className='text-center'>Taguara Digital</h1>
         <div
            className='container p-4'
         >
            <div className="row">
               <Links/ >
            </div>
            <ToastContainer />
         </div>
      </>
  );
}

export default Crud;
