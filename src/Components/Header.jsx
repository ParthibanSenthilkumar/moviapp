import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userContext } from '../Context/Createcontectprofile';
import Dropdown from 'react-bootstrap/Dropdown';
import { signOut } from 'firebase/auth';
import { auth } from '../Services/Firebase';

const Header = () => {

  const {userProfile,setuserProfile}=useContext(userContext)
  console.log(userProfile,"userProfile");
  
  const [q,setQ]=useState('')
    let navigate=useNavigate()
  let handlesearch =(e) =>{
    e.preventDefault()
    if(q.trim()){
      navigate(`/search?q=${q}`)
    }
  }
const handleLogout=async()=>{
  await signOut(auth)
  navigate("/")
  localStorage.clear()
}
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"unset !important"}}>
      <Container fluid >  
        <Navbar.Brand as={Link} to="/home" >MOVIEAPP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/tvshow" >Tv Shows</Nav.Link>
            <Nav.Link as={Link} to="/favorites" >Favorites</Nav.Link>
            
          </Nav>
          <Form className="d-flex" onSubmit={handlesearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={q}
              onChange={ (e)=>setQ(e.target.value) }
            />
            <Button type="submit" variant="outline-danger me-3">Search</Button>
            <Dropdown>
              <Dropdown.Toggle variant="danger">
                {userProfile?.Loginemail || "Profile"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.ItemText>{userProfile?.Loginemail}</Dropdown.ItemText>

                <Dropdown.Divider />

                <Dropdown.Item className='movie_btn' onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header