import React, {Component, Fragment} from 'react';

export default class WeatherTable extends Component{

    render(){
        const data = this.props.weather;
        console.log(data);

            return (
                <Fragment>
                    <section className="section" id="#biography">
                        <div className='container'>
                            <div className="section_header">
                                <h3 className="section_subtitle">Weather</h3>
                                <h2 className="section_title">Enter the name of the city in Latin letters</h2>
                            </div>
                            <div className="weather_form">
                                <div className="form_item">

                                        <input type="text" name="city" onChange={this.props.handleChange} className="fields" placeholder="Город"/>
                                        <input type="submit" onClick={this.props.getWeather} className="button button--table" value="Показать погоду"/>

                                </div>
                            </div>
                        </div>
                    </section>
                    {data ? <table>
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
                            <td className="city">{this.props.weather.city} {this.props.weather.country}</td>
                            <td className="temp">{this.props.weather.temp}</td>
                            <td className="humidity">{this.props.weather.humidity} %</td>
                            <td className="pressure">{this.props.weather.pressure} hpa</td>
                            <td className="sunrise">{this.props.weather.sunrise}</td>
                            <td className="sunset">{this.props.weather.sunset}</td>
                        </tr>

                        </tbody>
                    </table> : "" }

                </Fragment>
            )
        }


}