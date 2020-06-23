import React, { Component } from 'react';
import './App.css';
import ButtonSearchWheater from './ButtonSearchWheater';
import CurrentWheater from './CurrentWheater';
import City from './City';

const api = {
  key: "28c13d4f349b2d5b41c172e81e41e4a1",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends Component {
  state = {
    data: null,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleDataFatch = (event) => {
    // if (event.key === 'Enter' || this.handleDataFatch) {
    const wheater = this.state.value;
    fetch(`${api.base}weather?q=${wheater}&units=metric&APPID=${api.key}`)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(result => {
        this.setState({
          data: result.main.temp,
          city: result.name,
          sunrise: result.sys.sunrise,
          country: result.sys.country,
          description: result.weather.icon,
        })
      })
      .catch(error => console.log(error))
  }



  render() {

    const { data, city, country, sunrise, description } = this.state

    // let startDate = new Date(sunrise).toUTCString().slice(16, 22);
    let startDate = new Date(sunrise).toUTCString().slice(16, 22);

    return (
      <div className="app">
        <main>
          <h2>-Enter city name to see current weather-</h2>
          <div className="search-box">
            <div className="main-wrapper">
              <input
                className="search-bar"
                onChange={this.handleInputChange}
                placeholder="search..."
                type="text"
              />

              <ButtonSearchWheater click={this.handleDataFatch} />
            </div>
            {data ? <City city={city} country={country} /> : data}
            {data ? <CurrentWheater sunrise={startDate} data={data} description={description} /> : data}

          </div>
        </main>
      </div>
    );
  }
}

export default App