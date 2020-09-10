import React, {useState, useEffect} from 'react'
import { db } from '../firebase'

const LinkForm = (props) => {
      
   const initialStateValues = {
      url: '',
      name: '',
      description: ''
   }
   const [values, setValues] = useState(initialStateValues)

   const handleSubmit = (e) => {
      e.preventDefault();
      props.addOrEdit(values)
      setValues({...initialStateValues})
   }

   const handleInputChange = (e) => {
      const {name, value} = e.target
      setValues({...values, [name]:value})
   }

   const getById = async (id) => {
      const result = await db.collection('links').doc(id).get()
      setValues({ ...result.data()})
   }

   useEffect(() => {
      if(props.currentId === ''){
         setValues({...initialStateValues })
      } else {
         // setValues({...initialStateValues})
         getById(props.currentId)
      }
   }, [props.currentId])

   return (
      <form
         className="card card-body"
         onSubmit={handleSubmit}
      >
         <div className="form-group input-group">
            <div className="input-group-text bg-light">
               <i className="material-icons">insert_link</i>
            </div>
            <input
               type="text"
               className="form-control"
               placeholder="htpps://someurl.com"
               name="url"
               value={values.url}
               onChange={handleInputChange}
            />
         </div>

         <div className="form-group input-group">
            <div className="input-group-text bg-light">
               <i className="material-icons">create</i>
            </div>
            <input
               type="text"
               className="form-control"
               placeholder="Website name "
               name="name"
               onChange={handleInputChange}
               value={values.name}
            />
         </div>
      
         <div className="form-group">
            <textarea
               name="description"
               rows="3"
               className="form-control"
               placeholder="Write a descriptions"
               onChange={handleInputChange}
               value={values.description}
            >
            </textarea>
         </div>
      
         <button
            className="btn btn-success btn-block"
         >
            {(props.currentId === '' ? 'Save' : 'Update`' )}
         </button>
      </form>
   )
}

export default LinkForm
