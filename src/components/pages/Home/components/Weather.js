import React from 'react';
import '../../../scss/layout/table.scss';
import PropTypes from 'prop-types';
import Input from '../../../elements/Input/Input';
import Button from '../../../elements/Button/Button';


const Weather = ({
  handleChange, getWeather, temp, city, country, humidity, pressure, sunrise, sunset
}) => {
  return (
    <>
      <section className="section" id="#biography">
        <div className="container">
          <div className="section_header">
            <h3 className="section_subtitle">Weather</h3>
            <h2 className="section_title">Enter the name of the city in Latin letters</h2>
          </div>
          <div className="weather_form">
            <div className="form_item">
              <Input onInputChange={handleChange} id="mycity" className="fields" placeholder="Город" />
              <Button className="button--table" title="Показать погоду" onButtonClick={getWeather} />
            </div>
          </div>
          {city ? (
            <table>
              <tbody>
                <tr>
                  <th>
                    Местоположение
                    <br />
                  </th>
                  <td className="city">
                    {city}
                    {' '}
                    {country}
                  </td>
                </tr>
                <tr>
                  <th>
                    Температура
                    <br />
                  </th>
                  <td className="temp">{temp}</td>
                </tr>
                <tr>
                  <th>
                    Влажность
                    <br />
                  </th>
                  <td className="humidity">
                    {humidity}
                    {' '}
                    %
                  </td>
                </tr>
                <tr>
                  <th>
                    Давление
                    <br />
                  </th>
                  <td className="pressure">
                    {pressure}
                    {' '}
                    hpa
                  </td>
                </tr>
                <tr>
                  <th>
                    Восход солнца
                    <br />
                  </th>
                  <td className="sunrise">{sunrise}</td>
                </tr>
                <tr>
                  <th>
                    Закат солнца
                    <br />
                  </th>
                  <td className="sunset">{sunset}</td>
                </tr>
              </tbody>
            </table>
          ) : '' }
        </div>
      </section>
    </>
  );
};
Weather.propTypes = {
  handleChange: PropTypes.func,
  getWeather: PropTypes.func,
  temp: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
};
Weather.defaultProps = {
  handleChange: undefined,
  getWeather: undefined,
  temp: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  pressure: undefined,
  sunrise: undefined,
  sunset: undefined,
};
export default Weather;
