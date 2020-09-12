import React from 'react'
import styled from 'styled-components'

const LabelStyled = styled.div`
   width:100%;
   font-size:1em;
   color:red;
   text-align:left;
   margin-top: 2rem
`

const Label = ( {text } ) => {
   return (
      <LabelStyled>
         <label> {text} </label>
      </LabelStyled>
   )
}

export default Label
