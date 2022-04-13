import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Container = styled.div`
padding: 20px;
display:flex;
flex-wrap:wrap`;

const Wrapper = styled.div`
background-color: #fff;
flex:1;
position:relative;
margin:1rem;
object-fit:contain;
&:hover{
    transform: scale(1.1);
    transition: 0.8s ease;
}`;

const Image = styled.img`
width:100%;
height:100%`;

const Title = styled.div`
display: flex;
font-size: 2rem;
font-weight: 600;
flex-direction:column;
justify-content:center;
align-items: center;
position:absolute;
top:0;
bottom:0;
width: 100%;
color:rgb(255,255,255,0);
&:hover{
    transition: 0.2s ease;
    background-color:var(--bg-color);
    color: var(--secondary-color);
}`;

const Button = styled.button`
cursor: pointer;
max-height: 50px;
padding:10px;
margin:20px;
font-size:1rem;
font-weight: 600;
border: none;
color: white;
border-radius: 5px;
background-color:red;
&:hover{
   background-color:var(--bg-color);
   border:1px solid #c30101;
   transition: 0.5s ease;
}`;


export default function Categories() {
    const [categoryData, setCategoryData] =useState();
    const url ="/api/categories"
        const fetchdata = async() =>{
            const response = await axios.get(url)
            const arr = response.data.categories
            setCategoryData(arr)
        }

    useEffect(()=> fetchdata() ,[])

  return (
      <>
        {!categoryData? <>Loading</> : <>
        <Container>
            {categoryData.map((items) =>(
                <Wrapper key={items.id}>
                    <Image src = {items.img} />
                    <Title>{items.categoryName}
                    <Link to="/products">
                        <Button>Shop Now</Button>
                    </Link>
                    </Title>
                </Wrapper>))
            }  
        </Container>
        </>}
    </>
  )
}