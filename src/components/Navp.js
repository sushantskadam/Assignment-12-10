import React, { Component } from 'react'
import { Nav,NavItem, Navbar  ,NavLink,NavDropdown ,Container,Carousel,Row,Col,Card,Button,ButtonGroup,Image,ToggleButton,ToggleButtonGroup} from "react-bootstrap";
import{BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
export class Navp extends Component {
    render() {
        return (
          
            <div>
                 <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid={true}>
        <Navbar.Brand href="/">BPK SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" style={{textDecoration:"none"}}>HOME</Link>&nbsp;&nbsp;
            <Link href="#" style={{textDecoration:"none"}}>SHOP</Link>&nbsp;&nbsp;
            <Link href="#" style={{textDecoration:"none"}}>PICNIC</Link>&nbsp;&nbsp;
            <Link href="#" style={{textDecoration:"none"}}>PAGE</Link>&nbsp;&nbsp;
            <Link href="#" style={{textDecoration:"none"}}>PROMOTION</Link>&nbsp;&nbsp;
            <Link href="#" style={{textDecoration:"none"}}>BLOG</Link>&nbsp;&nbsp;
            <Link to="/contact" style={{textDecoration:"none"}}>CONTACT US</Link>
            </Nav>
            <Nav>
            <Nav.Link href="#"><span className="fa fa-search" style={{color: "black"}}></span></Nav.Link>
            <Nav.Link href="#"><span className="fa fa-shopping-cart" style={{color: "black"}}></span></Nav.Link>
            <Nav.Link href="#"><span className="fa fa-bars" style={{color: "black"}}></span></Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
            </div>
        )
    }
}

export default Navp
