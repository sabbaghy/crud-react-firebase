import React from 'react'
import styled from 'styled-components'

const InputSyled = styled.input`
   width:100%;
   height:35px;
   border-radius:5px;
   border: 1px solid red;
   padding: 0 10px 0 5px;
   box-sizing: border-box;
   background:#efefef;
   color: #123321;
   outline: none;
   font-size: 1rem;
   
   &::placeholder{
      font-size: 1rem;
      color: #123321;
      opacity: .7;
   }
`


const Input = ( {attribute, handleChange, param } ) => {
   return (
      <InputSyled
         id={attribute.id}
         name={attribute.name}
         placeholder={attribute.placeholder}
         type={attribute.type}
         onChange={ (e) => handleChange (e.target.name, e.target.value) }
         className= {(!param) ? 'regular-style' : 'regular-style regular-style--errors'}
      />
   )
}

export default Input
