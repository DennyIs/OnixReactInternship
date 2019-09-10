import React, {Component} from "react";
import '../../../assets/components/app/App.css';
import WeatherTable from "../Weather/WeatherTable";




export default class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: null,
            mycity: ""
        };
    }
    handleChange = (event) => {
        this.setState({
            mycity: event.target.value
        });
    };
    getWeather = () =>{
        console.log(this.state.mycity);
        if(this.state.mycity !== ""){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.mycity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    let sunset = data.sys.sunset;
                    let date = new Date(+sunset * 1000);
                    let sunset_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                    let sunrise = data.sys.sunrise;
                    let date1 = new Date(+sunrise * 1000);
                    let sunrise_time = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();
                    this.setState({
                        weather: {
                            temp: data.main.temp,
                            city: data.name,
                            country: data.sys.country,
                            humidity: data.main.humidity,
                            pressure: data.main.pressure,
                            sunrise: sunrise_time,
                            sunset: sunset_time,
                            error: ''
                        }
                    });
                })
                .catch((e) => {
                    alert(e)
                });
        }
        return false;
    };
    componentDidMount(){
        this.getWeather();
    }

    render() {
        const {weather, mycity} = this.state;
        return (
            <WeatherTable
                getWeather = {this.getWeather}
                handleChange = {this.handleChange}

                weather = {weather}
                mycity = {mycity}

            />
        );
    };

}
