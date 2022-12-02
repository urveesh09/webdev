import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
function Section(props) {
    
  return (
    <Wrap bgImage={props.backgroundImg} >
      <Fade bottom>
      <ItemText>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.description} 
        </p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
        {props.leftBtnText}
        </LeftButton>
        {props.rightBtnText 
        &&
        <RightButton>
        {props.rightBtnText}
        </RightButton>
        }
        
      </ButtonGroup>
    </Fade>
      <DownArrow src="/images/down-arrow.svg"/>
    </Button>
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props => `url("${props.bgImage}")` };
background-size:cover;
background-position:center;
background-repeat:no-repeat;
width:100vw;
height:100vh;
z-index:10;

`
const ItemText=styled.div`
padding-top:15vh;
text-align:center;
z-index:-1;
`

const ButtonGroup=styled.div`
display:flex;
text-align:center;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;
}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;

`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`

const DownArrow=styled.img`
margin-top:5px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`

const Button=styled.div``