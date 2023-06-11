import React, { useState } from "react";
import './display.css';
import {request, cities} from '../resourse/resourse';

// function foo(){
//     const [firstState, setState] = useState(null)
// }

export default class Display extends React.Component{

    constructor(props){
        super(props)
        this.parent = this.props.parent
        this.parent.display = this
        this.state = {
            weatherDate: null,
            weatherTime: null,
            weatherTemperature: null,
            weatherSpeed : null,
            weatherImg : null
        }
    }
    



    getWeatherImg(city){
        const image = city.img 
        this.setState({weatherImg : image})
    }

    getSpeedWind(weather){
        const speedwind = weather.data.current_weather.windspeed 
        this.setState({weatherSpeed : speedwind})
    }

    getTemperature(weather){
        const temperature = weather.data.current_weather.temperature
        this.setState({weatherTemperature: temperature})
        
    }

    getDate(weather) {
        const date = weather.data.current_weather.time.split('T')[0].split('-').reverse().join('.')
        const time = weather.data.current_weather.time.split('T')[1]
        this.setState({weatherDate: date})
        this.setState({weatherTime: time})
    }

    async getWeather(city) {
        const weather = await request(city.latitude, city.longitude)
        this.getDate(weather)
        this.getTemperature(weather)
        this.getSpeedWind(weather)
        this.getWeatherImg(city)
        console.log(weather.data)
    }
    
    componentDidMount(){
        this.getWeather(cities.Kharkov)
    }

    render(){
        return <section className="section_display" >
      
        <div className="control">
            <button className="control_btn" onClick={this.getWeather.bind(this, cities.Kharkov)}>Харьков</button>
            <button className="control_btn" onClick={this.getWeather.bind(this, cities.LosAngeles)}>Лос-Анджелес</button>
            <button className="control_btn" onClick={this.getWeather.bind(this, cities.Moscow)}>Москва</button>
            <button className="control_btn" onClick={this.getWeather.bind(this, cities.NewYork)}>Нью-Йорк</button>
            <button className="control_btn" onClick={this.getWeather.bind(this, cities.Dubai)}>Дубай</button>
            <button className="control_btn" onClick={this.getWeather.bind(this, cities.Rome)}>Рим</button>
        </div>
        <div className="display" style={{backgroundImage : `url(${this.state.weatherImg})`}}>
         <div className="display_weather_cont">
            <div className="weather_title">Погода на : <span className="titleWeather"> {this.state.weatherDate} <br /> {this.state.weatherTime} </span></div>
            <div className="weather_title">Температура: <br/>{this.state.weatherTemperature + "°C"}</div>
            <div className="weather_title">Скорость ветра: <br/>{this.state.weatherSpeed + " km/h"}</div>
         </div>
        </div>
        </section>
    }
}
