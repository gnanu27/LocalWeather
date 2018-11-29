import React, {Component} from 'react'
import {connect} from 'react-redux'

class WeatherData extends Component{

	renderWeather(weatherData){

		return(

<div key={weatherData.id}>

			<div className="forecast-description-main-name">
					<p>Weather in {weatherData.name} </p>

			 </div>


		<div className="forecast-sub" >
			<ul  className="forecast-list" >
				<li >Humidity: {weatherData.main.humidity}%</li>
				<li > Pressure: {weatherData.main.pressure} hPa </li>
				<li > Clouds: {weatherData.clouds.all}% </li>
				<li > Wind: {weatherData.wind.speed} mph </li>



			</ul>
			</div>

			<div className="forecast-description" >

				
			<div className="forecast-description-temp">
			<ul className="forecast-description-main-list">

					<li>  <p> {weatherData.main.temp}°F</p> </li>

					<li>  <p> {weatherData.weather[0].main}</p> </li>


			</ul>

				

				

			</div>


			<div className="forecast-description-main">

			<ul className="forecast-description-main-list">

				<li> <p> High: {weatherData.main.temp_max} °F </p> </li>

				<li> <p> Low: {weatherData.main.temp_min} °F</p> </li>
			</ul>

			</div>

			<div className="forecast-description-main-desc">

			<ul className="forecast-description-main-list">

				<li>  <p> Mostly {weatherData.weather[0].description} throught out the day </p> </li>

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