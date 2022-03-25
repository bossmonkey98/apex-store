import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import {sliderItemsHome} from '../data'

const Container = styled.div`
width: 98.94vw;
position:relative;
overflow-x:hidden;`;

const Arrow = styled.div`
position:absolute;
display:flex;
justify-content: center;
align-items: center;
height:90px;
width:30px;
padding:5px;
background-color: var(--bg-color);
top:0;
bottom:0;
z-index: 2;
margin:auto;
left:${(props)=>props.direction === "left" && "0"};
right:${(props)=>props.direction === "right" && "0"};
cursor:pointer;
&:hover{
  color:black;
  background-color: var(--secondary-color);
  opacity:0.3;
  transition: 0.8s ease;
}`;

const Wrapper = styled.div`
cursor:pointer;
display:flex;
height:80vh;`;

const Slide = styled.div`
display:flex;
transition:0.5s ease;
transform: translateX(${props=>props.slideIndex *(-100)}vw);
object-fit:cover;`;

const Image = styled.img`
width:100vw`;

const Offers = styled.div`
height:40px;
color:white;
background-color:red;
display:flex;
justify-content: center;
align-items: center;
border:1px solid grey`;


function Slider() {
  const [slideIndex,setslideIndex] = useState(0)

  const clickHandler=(direction)=>{
    if(direction==="left")
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
    else
      setslideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
  }
  return (
    <div>
      <Container>
          <Arrow direction="left" onClick={()=>{clickHandler("left")}} >
            <ArrowLeft fontSize='large'/>
          </Arrow>
          <Slide slideIndex={slideIndex}>
          {sliderItemsHome.map((items) =>(
            <Wrapper key={items.id}>
              <Image src={items.img} />
            </Wrapper>
          ))}
          </Slide>
          <Arrow direction="right" onClick={()=>{clickHandler("right")}}>
            <ArrowRight fontSize='large'/>
          </Arrow>
      </Container>
      <Offers>
            Free Worldwide Shipping Available For Cart Value Above $100
      </Offers>
    </div>
  )
}

export default Slider