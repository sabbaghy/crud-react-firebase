import React from 'react'
import LinkForm from './LinkForm'

import {db} from '../firebase'

const Links = () => {

   const addOrEdit = async (linkObjet)=>{
      await db.collection('links').doc().set(linkObjet)
      console.log('en links', linkObjet, 'task save')

   }

   return (
      <>
         <LinkForm 
            addOrEdit={addOrEdit}
         />
         <h1> Links </h1>
      </>
   )
}

export default Links