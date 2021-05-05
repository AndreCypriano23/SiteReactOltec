import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
  //States
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

//function display mobile put or remove
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);


  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'> 
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              OLTEC <i className='fas fa-music' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                </li>
                <li>
                    <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                      Cursos
                    </Link>
                </li>
                <li>
                    <Link to='/event' className='nav-links' onClick={closeMobileMenu}>
                      Eventos
                    </Link>
                </li>
                <li>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Matricule-se 
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>MATRICULE-SE</Button>}
          </div>
      </nav>
    </>
  ); 
}

export default Navbar;
