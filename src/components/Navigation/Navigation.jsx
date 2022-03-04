import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import { useLocation, useNavigate } from 'react-router-dom'

import "./Navigation.css"

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    function goToRoute(route, e) {
        e.preventDefault()
        navigate(route)
    }

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/" className="logo-font">REACT CHALLENGE</Navbar.Brand>
                <Nav defaultActiveKey={location.pathname}>
                    <Nav.Item className="p-3">
                        <Nav.Link href="/" onClick={(e) => goToRoute('/', e)}>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="p-3">
                        <Nav.Link href="/universities" onClick={(e) => goToRoute('universities', e)}>
                            Universities
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="p-3">
                        <Nav.Link href="/lookup" onClick={(e) => goToRoute('lookup', e)}>
                            Postal lookup
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;