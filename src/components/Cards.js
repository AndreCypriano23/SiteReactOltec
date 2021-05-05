import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import { Link } from 'react-router-dom'


function Cards() {
  return (
    <div className='cards'>
      <h1>Nossos Cursos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              <CardItem
                //React Props for CardsItem:
                src='images/drums.jpg'
                text='Aula de Bateria - Matrículas Abertas'
                label='Nível Básico ao Avançado'
                path='/courses'
              />
              <CardItem
                //React Props for CardsItem:
                src='images/guitarra.jpg'
                text='Aula de Guitarra - Matrículas Abertas'
                label='Nível Básico ao Avançado'
                path='/courses'
              />
          </ul>
          <ul className='cards__items'>
              <CardItem
                //React Props for CardsItem:
                src='images/canto.jpg'
                text='Aula de Canto - Matrículas Abertas'
                label='Nível Básico ao Avançado'
                path='/courses'
              />
              <CardItem
                //React Props for CardsItem:
                src='images/baixo.jpg'
                text='Aula de Baixo - Matrículas Abertas'
                label='Nível Básico ao Avançado'
                path='/courses'
              />
          </ul>
        </div>
        <Link to='/courses'>
            <button className='btn-course'>Saiba Mais</button>
        </Link>
      </div>
    </div>
  )
}

export default Cards
