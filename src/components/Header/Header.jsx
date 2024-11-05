import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>

    <Title> Транспорт</Title>
    <div className="wrap">
        <Card Name="Велосипед" photo="/card1.jpg"/>
        <Card Name="Мотоцикл" photo="https://catalog.detmir.st/media/TFOylVhZ8_KEBylXHhdHVx1AZw6z1jZFlNBjMHepwvY="/>
        <Card Name="Самокат" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnFNpUlukQQCeuSsggRCTdzp4-m8AvTaTEw&s"/>
        
    </div>
    
    </>
  )
}

export default Header