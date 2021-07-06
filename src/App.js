import React from 'react';

import { CircularProgress } from '@material-ui/core';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
import covidImage from './image/image.png';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: [],
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data: data })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ country: country, data: fetchedData })
    }
    render() {
        const { data, country } = this.state;
        return (
            data.confirmed ?
                (
                    <div className={styles.container}>
                        <img src={covidImage} alt="COVID - 19" className={styles.image} />
                        <Cards data={data} />
                        <CountryPicker handleCountryChange={this.handleCountryChange} />
                        <Chart data={data} country={country} />
                    </div>
                ) : (
                    <div className={styles.progress}>
                        <CircularProgress color="secondry"></CircularProgress>
                    </div>
                )

        )
    }
}

export default App;