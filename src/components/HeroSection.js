import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="" autoPlay loop muted />
      <h1>Escola de Música OLTEC</h1>
      <p>A música entre amigos</p>
      <div className='hero-btns'>
        <Button className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'>Saiba mais
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
