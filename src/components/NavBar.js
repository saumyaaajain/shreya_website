import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button, Form} from "react-bootstrap";
import { IoSearchOutline } from 'react-icons/io5';
import Overlay from "../utils/Overlay";
import React, {useState, useEffect} from 'react'

function NavBar() {

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY;
            const windowHeight = window.innerHeight;
            if (scrollPos <= windowHeight * 0.3) {
                setOpacity(scrollPos / (windowHeight * 0.3));
            } else {
                setOpacity(1);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" style={{ opacity: `${opacity}` }}>
            <Container className="bg-body-tertiary" style={{borderRadius: "25px", padding: "25px", marginTop: "10px", opacity: ".7"}}>
                <Navbar.Brand href="#home">Shreya Jain</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary"><IoSearchOutline /></Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <div style={{display: "inherit"}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <span style={{marginLeft: "15px"}}>
                        <Overlay />
                    </span>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavBar;