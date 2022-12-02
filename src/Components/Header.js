import React ,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from "../features/car/carSlice.js"
import {useSelector} from 'react-redux';
function Header() { 
const [BurgerStatus,setBurgerStatus]=useState(false);
const cars =useSelector(selectCars)
  return (
    <div>
      <Container>
      <a>
        <img src="/images/logo.svg"/>
      </a>
      <Menu>
        {cars && cars.map((car,index)=>
        <a key={index} href='#'>{car}</a>
        )}
      <a href='#'>Model S</a>
     
      
      <a href='#'>Model X</a>
      <a href='#'>Model Y</a>
      <a href='#'>Model 3</a>
        
      
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <MenuIcon onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car,index)=>
        <li><a key={index} href='#'>{car} </a></li>
        )}
        <li><a href='#'>Existing Inventory </a></li>
        <li><a href='#'>Used Inventory </a></li>
        <li><a href='#'>Trade-in </a></li>
        <li><a href='#'>Existing Inventory </a></li>
        <li><a href='#'>Existing Inventory </a></li>
        <li><a href='#'>CyberTruck </a></li>
        <li><a href='#'>Roadstar </a></li>
        <li><a href='#'>Semi </a></li>
        <li><a href='#'>Charger </a></li>
        <li><a href='#'>Power</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Test Drive</a></li>
      </BurgerNav>
      </Container>
    </div>
  )
}

export default Header


const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:10;
`

const Menu = styled.div`
display:flex;
align-items:center;
flex: 1;
justify-content:center;

a{
  font-weight: 600;
  text-decoration:uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
  font-size:20px;
}
@media(max-width:768px){
  display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
cursor:pointer;
a{
  font-weight: 700;
  text-decoration:uppercase;
  margin-right:10px;
  font-size:20px;
}

`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;

transform: ${props=>props.show ? 'translateX(0)' : 'translateX(100%)' };
transition : transform  1s ;
li{
  padding:15px 0;
  border-bottom:1px solid black;
}
a{
  font-weight:600;
}

`
const CustomClose = styled(CloseIcon)`
cursor:pointer;

`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`
