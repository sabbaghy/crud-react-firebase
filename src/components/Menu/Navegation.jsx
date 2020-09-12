import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import LogoImg from '../../Assets/images/logos/td-logo.png'

const Logo = styled.div`
   width:100px;

   .logo__img {
      display:block;
      width:100px;
   }
`

const Navbar = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   background:#93939f;
   padding-left:1rem;
   padding-right:1rem;
   margin-top:0;
   margin-bottom:0;
`

const Menu = styled.ul`
   display:flex;
   justify-content:space-between;
   background:#93939f;
   padding-left:0;
   margin-top:0;
   margin-bottom:0;
   list-style:none;
`

const MenuItems = styled.li`
   padding:1rem;
`

const MenuLink = styled(Link)`
   text-decoration:none;
   text-transform:uppercase;
   color:red;
`

const Navegation = () => (
      <Navbar>
         <Logo>
            <img src={ LogoImg } alt="logo" className='logo__img' />
         </Logo>
         <nav>
            <Menu>
               <MenuItems><MenuLink to="/">Login</MenuLink></MenuItems>
               <MenuItems><MenuLink to="/home">Home</MenuLink></MenuItems>
               <MenuItems><MenuLink to="/crud">Crud</MenuLink></MenuItems>
            </Menu>
         </nav>
         <i className="bg-light material-icons"> menu </i>
      </Navbar>
   )

export default Navegation
