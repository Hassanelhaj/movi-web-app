
import logo from '../../imgs/logo.png';

import '../Navbar/Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Data } from '../../Data';
import { useState } from 'react';
import { show } from '../../redux/Slices/DataSlice';
import {RiMovieFill} from 'react-icons/ri';
import {BiMoviePla, BiMoviePlay} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai'


const NavBar =()=>{
  const list = useSelector(state=>state.movies.value);
  const [val,setVal] = useState('');
  const dispach = useDispatch();
  const handleSearch = (e)=>{
    const key = e
    Data(key);
  console.log('searching');

  }
      return(
  
        
          
            <Navbar  className='site-nav' expand="lg">
              <Container fluid>
               <Col>

                <Navbar.Brand href="/">
                <div className='logo-box'><h1><RiMovieFill/></h1><h1>MOVIES </h1>
   

                </div>
                </Navbar.Brand>
                </Col>
                <Navbar.Toggle id='toggler' aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Col className='links'>
                    <Link to ="/" className='nav-link flex-row'>
                    <h3><AiFillHome/></h3><h3>Home</h3>
                    </Link>
                    <Link to="/list" className='nav-link flex-row'>
                    <h3><BiMoviePlay/></h3><h3>Watch List({list.length})</h3>
                    </Link>
                    </Col>
                    
                  </Nav>
             
             
                </Navbar.Collapse>
              </Container>
            </Navbar>
     
        
  
    );
  
  

      
    }  
export default NavBar;