import React from 'react'
import './SearchBar.css'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';

import InputGroup from 'react-bootstrap/InputGroup';
import search from './assets/desktop/icon-search.svg';
import location from './assets/desktop/icon-location.svg';
function SearchBar({ searchText, setSearchText, locationText, setLocationText, fullTimeOnly, setFullTimeOnly }) {
  return (
    <Container className='searchbarContainer'>
    <div className='searchbar'  >
     <Form className='d-flex '>
     <Row style={{width: '100%'}}>
          <Col xs={12} md={4}>
     <InputGroup  className="w-max custom-input-group">
     <InputGroup.Text style={{backgroundColor:'#fff', border:'0px'}}><img src={search} /></InputGroup.Text>
     <Form.Control
         value={searchText}
         onChange={(e) => setSearchText(e.target.value)}
        style={{backgroundColor:'#fff', border:'0px'}}
         placeholder="Filter by company"
        />
        </InputGroup>
     </Col>
    
      <Col xs={12} md={4}>
      <InputGroup  className="w-max">
      <InputGroup.Text style={{backgroundColor:'#fff', border:'0px'}} ><img src={location} /></InputGroup.Text>
        <Form.Control  
        value={locationText}
        onChange={(e) => setLocationText(e.target.value)}
       style={{backgroundColor:'#fff', border:'0px'}} 
       type="text"
        placeholder="Filter by location…" />
        
      </InputGroup>
      </Col>
      <Col xs={12} md={4}>
      <InputGroup  className="w-max">
       
      <Form.Check 
      label="Full Time Only"
      checked={fullTimeOnly}
      onChange={(e) => setFullTimeOnly(e.target.checked)} 
      style={{marginTop : '5px'}}
     /> 
      <Button style={{display:'none'}}>Search</Button>
   

      </InputGroup>
      </Col>
      </Row>
    </Form>
    
      </div>
      </Container>
  )
}

export default SearchBar