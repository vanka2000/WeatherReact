import axios from 'axios'
import KharkovImg from './img/Kharkov.png'
import LAImg from './img/LA.png'
import MoscowImg from './img/Moscow.png'
import NYImg from './img/New-York.png'
import DubaiImg from './img/Dubai.png'
import RomeImg from './img/Rome.png'


const request = async (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const req =  await axios(url)
    return req
}

const requestName = async (name) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&language=ru&count=10&format=json`
    const req =  await axios(url)
    return req
}


const cities = {
    Kharkov : {
        latitude : '49.92',
        longitude : '36.29',
        img: KharkovImg
    },
    LosAngeles : {
        latitude : '34.05',
        longitude : '-118.24',
        img: LAImg
    },
    Moscow : {
        latitude : '55.75',
        longitude : '37.62',
        img : MoscowImg
    },
    NewYork : {
        latitude : '40.71',
        longitude : '-74.01',
        img : NYImg
    },
    Dubai : {
        latitude : '25.08',
        longitude : '55.31',
        img : DubaiImg
    },
    Rome : {
        latitude : '41.89',
        longitude : '12.51',
        img : RomeImg
    }

}



export  {request, cities, requestName}