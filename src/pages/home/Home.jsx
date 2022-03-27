import React from 'react'
import Slider from '../../components/Slider'
import './Home.css'
import Newsletter from '../../components/Newsletter/Newsletter'
import Categories from '../../components/categories'

export default function Home (){
  return (
    <div>
      <Slider/>
      <Categories/>
      <Newsletter/>
    </div>
  )
}
