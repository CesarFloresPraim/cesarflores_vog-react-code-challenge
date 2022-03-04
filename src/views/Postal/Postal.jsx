import React, { useEffect, useState } from 'react'
import { Col, Container, Row, InputGroup, DropdownButton, FormControl, Dropdown, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadZipcodeDetailsAsync } from '../../middleware/reducers/zipcode/zipcode.thunks';

function Postal() {
    const dispatch = useDispatch()
    const { isLoadingZipcode, zipcode, zipcodeErrorMessage } = useSelector((state) => state.zipcodes);

    const [selectedCountryCode, setSelectedCountryCode] = useState('us')
    const [zip, setZip] = useState("")


    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.innerHTML);
    }

    const handleZipcodeChange = (e) => {
        setZip(e.target.value)
    }

    const handleSearch = () => {
        dispatch(loadZipcodeDetailsAsync(selectedCountryCode, zip))
    }




    return (
        <Container>
            <Row className='mt-3'>
                <Col md={4}>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title={selectedCountryCode}
                        >
                            <Dropdown.Item onClick={handleCountryCodeChange}>us</Dropdown.Item>
                            <Dropdown.Item onClick={handleCountryCodeChange}>ca</Dropdown.Item>
                            <Dropdown.Item onClick={handleCountryCodeChange}>mx</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-label="Zipcode input" onChange={handleZipcodeChange} value={zip} />
                        <Button variant="outline-success" onClick={handleSearch}>Search</Button>{' '}
                    </InputGroup>
                </Col>
                <Col md={8}>
                    {isLoadingZipcode && <h3>Loading...</h3>}
                    {zipcodeErrorMessage && console.log(zipcodeErrorMessage)}
                    {zipcode && (
                        <Card
                            bg="light"
                            text="dark"
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>{`${zipcode.country} (${zipcode['country abbreviation']})`}</Card.Header>
                            <Card.Body>
                                <Card.Title>{zipcode['post code']}</Card.Title>
                                <Card.Text as='div'>
                                    <Row>
                                        {zipcode.places.map((place, idx) => {
                                            return <Col key={idx}>
                                                <div>Latitude: {place.latitude}</div>
                                                <div>Longitude: {place.longitude}</div>
                                                <div>Place name: {place['place name']}</div>
                                                <div>State: {`${place['state']} (${place['state abbreviation']})`}</div></Col>
                                        })}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container >
    )
}

export default Postal;