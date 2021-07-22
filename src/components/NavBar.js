import React, { useState } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Search from '../images/Search.ico';
import User from '../images/user.png';
import Cart from '../images/Cart.ico';


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
            <Navbar.Collapse class="p-3 mb-2 bg-light text-white">
                <Form inline onSubmit={handleSubmit}>
                    <FormControl className="form-group" onChange={handleonChange} type="text" placeholder="Search" value={search.query} size="lg"/>
                    <Button variant="info" type="submit"><img src={Search} alt="logo" width="30" height="30"/></Button>
                </Form>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Button variant="light"><strong>SIGN IN</strong><img src={User} alt="logo" width="20" height="20"/></Button>
                <Button variant="light"><strong>CART</strong><img src={Cart} alt="logo" width="20" height="20"/></Button>
            </Navbar.Collapse>
        </Navbar>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Nav className="mr-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-md">
                <Nav.Link href="/about"><strong>Plumbing</strong></Nav.Link>
                <Nav.Link href="/posts"><strong>Heating</strong></Nav.Link>
                <Nav.Link href="/about"><strong>HVAC</strong></Nav.Link>
                <Nav.Link href="/posts"><strong>PEX</strong></Nav.Link>
                <Nav.Link href="/about"><strong>Fittings</strong></Nav.Link>
                <Nav.Link href="/posts"><strong>Valves</strong></Nav.Link>
                <Nav.Link href="/about"><strong>Thermostats</strong></Nav.Link>
                <Nav.Link href="/posts"><strong>Electrical</strong></Nav.Link>
                <Nav.Link href="/about"><strong>Resource</strong></Nav.Link>
                <Nav.Link href="/posts"><strong>Our Team</strong></Nav.Link>
            </Navbar.Collapse>
            </Nav>
        </Navbar>
        <br/>
        </>
    );
}
export default NavBar;