import React, { useState } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Search from '../images/Search.ico';
import User from '../images/user.png';
import Cart from '../images/Cart.ico';
import './navBar.css';


const NavBar=()=>{
    const [search, setsearch] = useState({ query: ''});
    const handleSubmit=()=>{

    }
    const handleonChange=()=>{

    }

    return(
        <>
        <div display="inline-flex">
            <br/>
            <img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/react/b1030fbbf9258611ad7b86beceb57ac1.svg" alt="Fast Track Logo" width="100" height="50"/>
            <span style={{color: 'textDarkGray', fontSize: '12px'}}>Order by 6PM, receive tomorrow</span>&nbsp;
            <span>●</span>&nbsp;
            <span style={{color: 'textTan', fontWeight: 'bold', fontSize: '11px,13px,12px,14px'}}>Free Shipping on order over $99</span>
        </div>
        <hr/>
        <Navbar bg="light" variant="dark" expand="lg">
            <Navbar.Brand href="/"><img src="https://s3.amazonaws.com/s3.supplyhouse.com/html/react/da1ea880c818cad22ee979a198f127a8.svg" alt="Plumbing supplies, heating supplies, HVAC supplies from SupplyHouse Homepage" width=",,,80%"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse class="p-3 mb-2 bg-light">
                <Form inline onSubmit={handleSubmit}>
                    <FormControl className="form-group" onChange={handleonChange} type="text" placeholder="Search" value={search.query} size="lg"/>
                    <Button variant="info" type="submit"><img src={Search} alt="logo" width="30" height="30"/></Button>
                    &nbsp; &nbsp;
                    <span style={{color: 'textTan', fontWeight: 'bold', fontSize: '20px'}}>888-757-4774</span>
                </Form>
                
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Button variant="light"><strong>SIGN IN</strong><img src={User} alt="logo" width="20" height="20"/></Button>
                <Button variant="light"><strong>CART</strong><img src={Cart} alt="logo" width="20" height="20"/></Button>
            </Navbar.Collapse>
        </Navbar>
        <Navbar style={{backgroundColor: '#331811'}} variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-md">
            <Nav className="mr-auto">
                <Nav.Link id="whitelink" href="/about"><strong>Plumbing</strong></Nav.Link>
                <Nav.Link href="/heating"><strong>Heating</strong></Nav.Link>
                <Nav.Link href="/hvac"><strong>HVAC</strong></Nav.Link>
                <Nav.Link href="/pex"><strong>PEX</strong></Nav.Link>
                <Nav.Link href="/fittings"><strong>Fittings</strong></Nav.Link>
                <Nav.Link href="/valves"><strong>Valves</strong></Nav.Link>
                <Nav.Link href="/thermostats"><strong>Thermostats</strong></Nav.Link>
                <Nav.Link href="/electrical"><strong>Electrical</strong></Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                <Nav.Link href="/resources"><strong>Resources</strong></Nav.Link>
                <Nav.Link href="/about"><strong>Our Team</strong></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        <br/>
        </>
    );
}
export default NavBar;