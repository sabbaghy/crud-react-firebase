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

const MenuToggle = styled.div`
   width:25px;
   height:25px;
   display:flex;
   align-items:center;
   justify-content:center;
   background:red;
   border-radius:5px;
   cursor: pointer;
   
   &:hover {
      background:blue;
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
               <MenuItems><MenuLink to="/usuario">Users</MenuLink></MenuItems>
            </Menu>
         </nav>
         <MenuToggle>
            <i className="material-icons"> menu </i>
         </MenuToggle>
      </Navbar>
   )

export default Navegation
