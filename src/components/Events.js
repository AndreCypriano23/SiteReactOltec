import React from 'react'
import CardItem from './CardItem'
import './Events.css';

function Events() {
  return (
    <div className='cards'>
      <h1>Nossos Eventos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              <CardItem
                //React Props for CardsItem:
                src='images/evento.jpeg'
                text='Evento dos Alunos 23/03/2020'
                label='Apresentação'
                path='/event'
              />
              <CardItem
                //React Props for CardsItem:
                src='images/evento2.jpeg'
                text='Evento dos Alunos 25/03/2020'
                label='Apresentação'
                path='/event'
              />
          </ul>
          <ul className='cards__items'>
              <CardItem
                //React Props for CardsItem:
                src='images/evento3.jpeg'
                text='Show dos Professores 23/03/2020'
                label='Apresentação'
                path='/event'
              />
              <CardItem
                //React Props for CardsItem:
                src='images/evento-bateria.jpeg'
                text='Workshop de Bateria 23/03/2020'
                label='Workshop'
                path='/event'
              />
          </ul>
        </div>
        <button className='btn-course'>Saiba Mais</button>
      </div>
    </div>
  )
}

export default Events
