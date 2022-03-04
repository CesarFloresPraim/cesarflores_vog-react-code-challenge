import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import UniversitiesList from '../../components/UniversitiesList.jsx/UniversitiesList';
import { loadCountriesAsync } from '../../middleware/reducers/country/country.thunks';
import { loadUniversitiesAsync } from '../../middleware/reducers/universities/university.thunks';

function Universities() {

    const { isLoadingCountries, countries, countriesErrorMessage } = useSelector((state) => state.countries);
    const { isLoadingUniversities, universities, universitiesErrorMessage } = useSelector((state) => state.universities);


    const dispatch = useDispatch()

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCountryName, setSelectedCountryName] = useState('Montenegro');
    const [formattedCountries, setFormattedCountries] = useState([]);

    //Loads countries once
    useEffect(() => {
        dispatch(loadCountriesAsync())
    }, [])
    //Load universities for selected country
    useEffect(() => {
        dispatch(loadUniversitiesAsync(selectedCountryName))
    }, [selectedCountry])
    //When countries change gives format {value: v, label:b} needed by the select
    useEffect(() => {
        formatCountriesSelect()
    }, [countries])
    //Handles the change on the select and updates state
    /* @params: {value: v, label:b} */
    const handleSelectValue = (e) => {
        let countryFound = countries.filter(obj => obj.name.common === e.value)
        console.log(countryFound);
        setSelectedCountryName(e.value)
        setSelectedCountry(countryFound[0])
    }
    //Gives format {value: v, label:b} needed by the select and updates state
    const formatCountriesSelect = () => {
        let fCountries = countries.map((country) => {
            return { value: country.name.common, label: country.name.common }
        })
        setFormattedCountries(fCountries)
    }

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={4}>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={countries[0]}
                        isLoading={isLoadingCountries}
                        isClearable={true}
                        isSearchable={true}
                        name="countires"
                        options={formattedCountries}
                        onChange={handleSelectValue}
                        value={formattedCountries.filter(obj => obj.value === selectedCountryName)}
                    />
                    {countriesErrorMessage && console.log(countriesErrorMessage)}
                    <CountryDetails country={selectedCountry}></CountryDetails>

                </Col>
                <Col md={8}>
                    {isLoadingUniversities && <h3>Loading...</h3>}
                    {universitiesErrorMessage && console.log(universitiesErrorMessage)}
                    <UniversitiesList universities={universities}></UniversitiesList>
                </Col>
            </Row>
        </Container>
    )
}

export default Universities;
