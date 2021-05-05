import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Courses.css';


function Courses() {
  return (
    <>
      <div className='title-courses'><h1>CURSOS</h1></div>
      <div className='course-container'>
        <div className='course-text'>
          <h1>Curso de Canto <i class='fas fa-microphone-alt'></i></h1>
          <p>Curso individual dividido por níveis desde o básico ao avançado.
          Apresenta-se como cantar de um modo eficiente e moderno, construindo seu próprio repertório.
                 É abrangido os temas: intensidade; dinâmica; saúde vocal; tipo de voz; postura; afinação; entre outros mecanismos que o tornará um bom cantor.</p>
        </div>
        <div><img src='images/canto-curso.jpg' /></div>
      </div>
      <div className='course-container'>
        <div className='course-text'>
          <h1>Curso de Guitarra <i class='fas fa-guitar'></i></h1>
          <p>Curso individual dividido por níveis desde o básico ao avançado.
          É oferecido ao estudante a possibilidade de aprender técnicas essenciais para um bom guitarrista, tais como: arpejos; palhetada alternada; padrões melódios; tapping; hammer on; improviso; entre outras.
                São utilizado playbacks desenvolvidos pela escola para melhor execução de exercícios e bom desenvolvimento.</p>
        </div>
        <div><img src='images/guitarra-curso.jpg' /></div>
      </div>
      <div className='course-container'>
        <div className='course-text'>
          <h1>Curso de Baixo <i class='fas fa-guitar'></i></h1>
          <p>Curso individual dividido por níveis desde o básico ao avançado.
                É passado diversas técnicas, como slaps e tapping; aplicação de escalas e a relação com a harmonia; acentuação e ditado rítmico; dinâmica; percepção musical; improvisação, entre outros.</p>
        </div>
        <div><img src='images/baixo-curso.jpg' /></div>
      </div>
      <div className='course-container'>
        <div className='course-text'>
          <h1>Curso de Bateria <i class='fas fa-drum'></i></h1>
          <p>Curso individual dividido por níveis desde o básico ao avançado.
              Com o auxilio de apostilas e métodos, aprende-se exercícios de levadas, viradas, rudimentos, postura para se tornar um ótimo baterista. Todos os exercícios são realizados com metrônomo.</p>
        </div>
        <div><img src='images/bateria-curso.jpg' /></div>
      </div>
      <Footer />
    </>
  )
}

export default Courses;