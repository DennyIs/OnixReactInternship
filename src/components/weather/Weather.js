import React, {Component} from "react";
import '../../assets/components/app/App.css';
import rect1 from "../../assets/components/img/rect1.png";

const API_KEY = 'd8cdf3658e9a132ca913b27667fb2156';

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: null,
            mycity: ''
        };
    }
    getWeather = async (event) => {
        event.preventDefault();

        const api_url = await
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.mycity}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        try {
        let sunset = data.sys.sunset;
        let date = new Date(+sunset * 1000);
        let sunset_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let sunrise = data.sys.sunrise;
        let date1 = new Date(+sunrise * 1000);
        let sunrise_time = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();
        console.log(sunset_time);
        console.log(data);
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
        }
        catch (e) {
            e = data.message;
            alert(e);
        }
        console.log(this.state.weather);
    };
    renderTable(data) {
        if (data) {
            return (
                <table>
                    <tbody>
                    <tr>
                        <th>Местоположение<br/></th>
                        <th>Температура<br/></th>
                        <th>Влажность<br/></th>
                        <th>Давление<br/></th>
                        <th>Восход солнца<br/></th>
                        <th>Закат солнца<br/></th>
                    </tr>
                    <tr>
                        <td className="city">{this.state.weather.city} {this.state.weather.country}</td>
                        <td className="temp">{this.state.weather.temp}</td>
                        <td className="humidity">{this.state.weather.humidity} %</td>
                        <td className="pressure">{this.state.weather.pressure} hpa</td>
                        <td className="sunrise">{this.state.weather.sunrise}</td>
                        <td className="sunset">{this.state.weather.sunset}</td>
                    </tr>

                    </tbody>
                </table>
            )
        }
    };
    handleChange = (event) => {
        this.setState({
            mycity: event.target.value
        });
    }
    render() {
        return (
            <div className="title" id="#biography">
                <div>
                    Weather from API
                </div>
                <h2>
                    Enter the name of the city in Latin letters
                </h2>
                <form onSubmit={this.getWeather}>
                <input type="text" name="city" onChange={this.handleChange} className="fields" placeholder="Город"/>
                <input type="submit" className="button1" value="Показать погоду"/>
                {this.renderTable(this.state.weather)}
                </form>
                <img src={rect1} alt="rectangle"/>
            </div>
        );
    };

}
export default Weather;