import React from 'react'
import './Header.css'
import Form from 'react-bootstrap/Form';
import logo from './assets/desktop/logo.svg';
import sun from './assets/desktop/icon-sun.svg';
import moon from './assets/desktop/icon-moon.svg';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Header() {
  return (
 
    <div className="header_background">
      <Container>
            <div  className="header_container" >
            <Link to = '/'> 
                <img src={logo} alt="Logo"/>
            </Link>
          {/*      <div className="header_switch d-flex align-items-center">
                <img src={sun}/>
                <Form>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label=""
                />
                 </Form>
                <img src={moon}/>
                </div>
  */}
            </div>
      </Container>
    </div>

    
  )
}

export default Header