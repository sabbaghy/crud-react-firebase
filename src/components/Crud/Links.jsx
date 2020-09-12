import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import LinkForm from './LinkForm'

import {db} from '../../firebase'

const Links = () => {

   const [links, setLinks] = useState([])
   const [currentId, setCurrentId ] = useState('')

   const addOrEdit = async (linkObjet)=>{
      try{
         if(currentId === ''){
            await db.collection('links').doc().set(linkObjet)
            toast('Register was added', {
               type: 'success',
               autoClose: 2000,
            })
         } else {
            await db.collection('links').doc(currentId).update(linkObjet)
            toast('Register was updated', {
               type: 'info',
               autoClose: 2000,
            })
            setCurrentId('')
         }
      } catch (error){
         console.log('Sorry, there are som problems, ', error)
      }
   }

   const onDelete = async (id) =>{
      try {
         if(window.confirm('are you sure you want to delete?')){
            await db.collection('links').doc(id).delete()
            toast('Register was deleted', {
               type: 'warning',
               autoClose: 2000,
            })
         }

      } catch (error) {
         console.log('Sorry, there are som problems, ', error)
      }
   }


   const getLinks = async () =>{
      try {
         db.collection('links').onSnapshot((querySnapshop) => {
            const rowsLink = []
            querySnapshop.forEach((row) => {
               rowsLink.push({...row.data(), id:row.id})
            })
            setLinks(rowsLink)
         })         
      } catch (error) {
         console.log('Sorry, there are som problems, ', error)
      }
   }

   useEffect(() => {
      getLinks()
   }, [])

   return (
      <>
         <div className="col-md-4 p-2">
            <LinkForm {...{addOrEdit, currentId, links}}/>
         </div>
         <div className="col-md-8 p-2"> 
         
            {links.map((row) => (
               <div
                  className="card mb-1"
                  key={row.id}
               >
                  <div className="card-body">
                     <div className="d-flex justify-content-between">
                        <h3> {row.url} </h3>
                        <div className="pr">
                           <i 
                              className="material-icons cursor text-danger"
                              onClick={() => {onDelete(row.id)}}
                           >
                              delete
                           </i>
                           <i 
                              className="material-icons cursor text-success"
                              onClick={() => setCurrentId(row.id)}
                           >
                              create
                           </i>
                        </div>
                     </div >
                     <p> {row.name} </p>
                     <p> {row.description}</p>
                     <a href={row.url} target="_blank" rel="noopener noreferrer">
                        Go to
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}

export default Links