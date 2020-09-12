import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
   width: 100%;
   font-size: 2em;
   color: red;
   text-align: center;
`
const Title = ({text}) => {
   return (
      <TitleContainer >
         <label className="title-label"> {text} </label>
      </TitleContainer>
   )
}

export default Title