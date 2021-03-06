import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, SetFetchedCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            SetFetchedCountries(await fetchCountries())
        }

        getCountries();
    }, [SetFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => (<option value={country} key={index}>{country}</option>))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;