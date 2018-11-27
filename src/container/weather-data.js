import React, {Component} from 'react'
import {connect} from 'react-redux'

class WeatherData extends Component{

	renderWeather(weatherData){

		return(

<div key={weatherData.id}>
<div className="forecast-sub" >
			<ul  className="forecast-list" >
				<li >Humidity: {weatherData.main.humidity}%</li>
				<li > Pressure: {weatherData.main.pressure} hPa </li>
				<li > Pressure: {weatherData.clouds.all}% </li>
				<li > Wind: {weatherData.wind.speed} miles/hour </li>



			</ul>
			</div>

			<div className="forecast-description" >
			<div className="forecast-description-main">
					<p>weather in {weatherData.name} </p>

			 </div>
				
			<div className="forecast-description-main">
			<ul className="forecast-description-main-list">

					<li>  <h1> {weatherData.main.temp} °F</h1> </li>

					<li>  <h2> {weatherData.weather[0].main}</h2> </li>

			</ul>

				

				

			</div>


			<div className="forecast-description-main">

			<ul className="forecast-description-main-list">

				<li> <p> High: {weatherData.main.temp_max} °F </p> </li>

				<li> <p> Low: {weatherData.main.temp_min} °F</p> </li>
			</ul>

			</div>

 			</div> 
 			</div>


			)

	}
	render(){


		return(
			<div className="forecast-container">

			{this.props.weather.map(this.renderWeather)}
			</div>


		)
	}
}

function mapStateToProps({weather}){
	return{weather}
}
export default connect (mapStateToProps) (WeatherData)