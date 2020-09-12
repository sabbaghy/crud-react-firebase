import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Title from './components/title/Title'
import Label from './components/label/Label'
import Input from './components/inputs/Input'

const LoginCard = styled.div`
   background-color: #ddd;
   min-height:250px;
   width:400px;
   margin-top:2rem;
   margin-left:auto;
   margin-right:auto;
   padding:1rem;
   border-radius:10px;
   text-align: center;
`
const LoginContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-content: center;
   align-items: center;
   border-radius: 15px;;
`
const LoginBtn = styled.button`
   width: fit-content;
   height: 35px;
   display: inline-block;
   border-radius: 5px;
   border:1px solid transparent;
   outline: none;
   background:#93939f; 
   font-size: 1rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
   padding: 0 2rem;
   
   &:hover{
      background:#cdcdcd; 
      border-color:red;
      color: red;
   }
`
const LabelError = styled.label`
      text-align:center;
      color:red;
      font-size:.75rem;
`

// validar correo
const validateEmail = (email) => {
   const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   if(emailRegex.test(email)){return true;}
   else{return false;}
}

const Login = () => {

   const [user, setUser] = useState('')
   const [userError, setUserError] = useState(false)
   const [inputError, setInputError] = useState({
      inputUserError: '',
      inputPasswordError: ''
   })
   const [password, setPassword] = useState('')
   const [passwordError, setPasswordError] = useState(false)
   const history = useHistory()
   
   function handleChange(name, value) {
      if(name === 'email'){
         if (!validateEmail(value)){
            setInputError({inputError, inputUserError: 'email address is not valid' })
            setUserError(true)
         } else{
            setUser( value )
         }
      }
      if(name === 'password'){
         if(value.length < 6){
            setInputError({inputError, inputPassworError: 'password lenght must be large than 6' })
            setPasswordError(true)
         } else{
            setPassword( value )
         }
      }
   }
   
   function handleSubmit (e) {

      console.log(e.target)

      history.push('/home')
      let account = {user, password}
      
      if(account){
         ifMatch(account)
      }
   }

   function ifMatch(){
      
   }

   return (
      <LoginCard>
         <LoginContent>
            <Title  text={'Welcome!'}/>
            <div>
               <Label  text={'Email'}/>
               <Input
                  attribute={{
                     id: 'email',
                     name: 'email',
                     placeholder: 'Enter your email address',
                     type: 'text'
                  }}
                  handleChange={handleChange}
                  value={user}
               />
            </div>
            { userError &&
               <LabelError>Error... email address is not valid</LabelError>
            }

            <div>
               <Label  text={'Password'}/>
               <Input
                  attribute={{
                     id: 'password',
                     name: 'password',
                     placeholder: 'Enter your password',
                     type: 'password'
                  }}
                  handleChange={handleChange}
                  param={passwordError}
                  value={password}
               />
            </div>
            { passwordError &&
               <LabelError>Error... Password must be larger than 6 characters</LabelError>
            }

            <LoginBtn onClick={(e) => handleSubmit(e)}> Login </LoginBtn>

         </LoginContent>
      </LoginCard>
   )
}

export default Login

