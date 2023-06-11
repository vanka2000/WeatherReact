import React from "react";
import './sercher.css'
import { request, requestName } from "../resourse/resourse";

class Sercher extends React.Component{
    constructor(props){
        super(props)
        this.parent = this.props.parent
        this.parent.sercher = this
        this.state = {
            serchValue : null
        }
       
    }


    getState(responceWeather){
        const display = this.parent.display
        display.getDate(responceWeather)
        display.getTemperature(responceWeather)
        display.getSpeedWind(responceWeather)
    }


    changeState(event){
        this.setState({
            serchValue : event.target.value
        })
    }

    async getSerchRequest(){
        const cityName = this.state.serchValue
        const responceCoord = await requestName(cityName)
        const latitude = responceCoord.data.results[0].latitude
        const longitude = responceCoord.data.results[0].longitude
        const responceWeather = await request(latitude, longitude)

        this.getState(responceWeather)
    }

    render(){
        return <section className="sercher_section">
            <input onChange={this.changeState.bind(this)} className="sercher_input" type="search"/>
            <button onClick={this.getSerchRequest.bind(this)} className="sercher_btn">Search</button>
        </section>
    }
}

export default Sercher