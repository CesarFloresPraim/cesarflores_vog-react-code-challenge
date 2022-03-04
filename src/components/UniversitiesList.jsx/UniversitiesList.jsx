import React from 'react'
import { Col, Row, Card} from 'react-bootstrap';

function UniversitiesList({ universities }) {
    return (
        <Row>
            {universities && universities.map((uni) => (
                <Col md={4} key={uni.name}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{uni.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{uni.country}</Card.Subtitle>
                            <Card.Text>
                            </Card.Text>
                            <Card.Link href={uni.web_pages[0]}>{uni.web_pages[0]}</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>


    )
}

export default UniversitiesList;
