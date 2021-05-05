import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Event.css';

function Event(){
  return(
    <div className='container'>
      <div className='title-event'><h1>EVENTOS</h1></div>
      <div className='course-container'>
          <div className='course-text'>
            <h1>Evento dos Alunos 23/03/2020 <i class='far fa-calendar'></i></h1>
              <p> </p> 
          </div>
          <div><img src='images/evento.jpeg' /></div>    
      </div>
      <div className='course-container'>
          <div className='course-text'>
            <h1>Evento dos Alunos 17/03/2020 <i class='far fa-calendar'></i></h1>
              <p></p> 
          </div>    
          <div><img src='images/evento2.jpeg' /></div>
      </div>
      <div className='course-container'>
          <div className='course-text'>
            <h1>Apresentação Musical dos Professores 17/09/2022 <i class='far fa-calendar'></i></h1>
              <p></p> 
          </div>
          <div><img src='images/evento-prof.jpg' /></div>    
      </div>
      <div className='course-container'>  
          <div className='course-text'>
            <h1>Workshop de Bateria 17/09/2022 <i class='far fa-calendar'></i></h1>
              <p></p> 
          </div>
          <div><img src='images/evento-bateria.jpeg' /></div>  
      </div>
      <Footer />
    </div>
  )
}

export default Event;