import React, {Fragment} from 'react';
import '../../../../scss/layout/weather.scss';
import './Weather'
import Button from "../../../../elements/Button/Button";
import Input from "../../../../elements/Input/Input";

const WeatherView = (props) => {
        const {weather, handleChange, getWeather} = props;

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
                                <Input onInputChange={handleChange} className={'fields'} placeholder={'Город'}/>
                                <Button className={'button--table'} title ={'Показать погоду'} onButtonClick = {getWeather}/>

                            </div>
                        </div>
                    </div>
                </section>
                {weather ? <table>
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
                        <td className="city">{weather.city} {weather.country}</td>
                        <td className="temp">{weather.temp}</td>
                        <td className="humidity">{weather.humidity} %</td>
                        <td className="pressure">{weather.pressure} hpa</td>
                        <td className="sunrise">{weather.sunrise}</td>
                        <td className="sunset">{weather.sunset}</td>
                    </tr>

                    </tbody>
                </table> : "" }
            </Fragment>
        );
};
export default WeatherView

