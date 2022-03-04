import React from "react";

import "./mainLayout.css"

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

//My components
import Navigation from "../components/Navigation/Navigation";

//My Views
import Home from "../views/Home/Home.jsx";

function MainLayout() {
    return (

        <Router>
            <Navigation></Navigation>
            <Container className="full-height">
                <Row className="full-height">
                    <Col xs={12}>
                        <Routes>
                            <Route path="/" element={<Home />}>
                            </Route>
                            <Route path="/universities">
                            </Route>
                            <Route path="/lookup">
                            </Route>
                        </Routes>
                    </Col>
                </Row>
            </Container>

        </Router >
    );
}

export default MainLayout;