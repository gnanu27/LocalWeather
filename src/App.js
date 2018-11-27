import React, { Component } from 'react';
import SearchBar from './container/search-bar.js'
import WeatherData from './container/weather-data'
import Header from './components/header'


class App extends Component {
  render() {
    return (
    <div >
    <Header />
      <SearchBar />
      <WeatherData />
     </div>
    );
  }
}

export default App;
