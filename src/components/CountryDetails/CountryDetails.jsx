import React from 'react'
import { Card } from 'react-bootstrap';

function CountryDetails(country) {
    return (
        <div>
            {country.country !== null ? (
                <Card className='mt-3'>
                    <Card.Img variant="top" src={country.country.flags.svg} />
                    <Card.Body>
                        <Card.Text>
                            <p>Country name: {country.country.name.common}</p>
                            <p>Capital city: {country.country.capital[0]}</p>
                            <p>Population: {country.country.population}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : <br></br>}
        </div>
    )
}

export default CountryDetails;
