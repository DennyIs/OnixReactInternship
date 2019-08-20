import React, {Component} from "react";
import '../../assets/components/app/App.css';
import rect1 from "../../assets/components/img/rect1.png";

const API_KEY = 'd8cdf3658e9a132ca913b27667fb2156';

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: null
        };
    }
    getWeather = async (event) => {
        event.preventDefault();
        const api_url = await
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kirovohrad,ua&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
        this.setState({
            weather: {
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                error: ""
            }
        });
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
                        <td className="date">{this.state.weather.city} {this.state.weather.country}</td>
                        <td className="event">{this.state.weather.temp}</td>
                        <td className="event">{this.state.weather.humidity}</td>
                        <td className="event">{this.state.weather.pressure}</td>
                        <td className="event">{this.state.weather.sunrise}</td>
                        <td className="event">{this.state.weather.sunset}</td>
                    </tr>

                    </tbody>
                </table>
            )
        }
    };
    render() {
        return (
            <div className="title" id="#biography">
                <div>
                    Weather form
                </div>
                <h2>
                    Weather
                </h2>
                <input type="text" name="city" placeholder="Город"/>
                <input type="button" className="button1" value="Показать погоду" onClick={this.getWeather}/>
                {this.renderTable(this.state.weather)}
                <img src={rect1} alt="rectangle"/>
            </div>
        );
    };

}
export default Weather;