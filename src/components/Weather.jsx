import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

import { useEffect, useContext, useCallback } from "react";
import { getCountries } from "../services/Countries";
import { getCities } from "../services/Cities";
import { getWeather } from "../services/Weather";
import { DataContext } from "../contexts/DataContext";

const Weather = () => {
  const contextData = useContext(DataContext);
  const { cities, setCities, setCountries, weather, setWeather, countries } =
    contextData;

  const getCity = useCallback( async (cities) => setCities(await getCities(cities)), []);  
  const buscarClima = useCallback( async (ciudad) => setWeather(await getWeather(ciudad)), []);


  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  return (
    <>
      <h1>WEATHER APP</h1>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="countries">Lista de Paises</Form.Label>
            <Form.Select
              aria-label="paises"
              onChange={(e) => getCity(e.target.value)}
            >
              <option value={""}>Selecciona un Pais</option>
              {countries.map((e, index) => {
                return (
                  <option key={index} value={e.country_name}>
                    {e.country_name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          {cities.length > 0 && (
            <>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="estados">Listado de Ciudades </Form.Label>
                <br />
                <Form.Select
                  name="estados"
                  onChange={(e) => buscarClima(e.target.value)}
                >
                  <option value={""}>Selecciona una Ciudad</option>
                  {cities.map((e, index) => {
                    return (
                      <option key={index} value={e.state_name}>
                        {e.state_name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </>
          )}
        </Col>
      </Row>

      <Row>
        {weather.location && (
          <>
            <Col className="mt-5">
              <div className="caja1">
                <Image src={weather.current.condition.icon} alt="" />
                <img src="./assets/animated/rainy-7.svg" alt="" />
                <p>
                  <b>CIUDAD:</b> {weather.location.name}
                </p>
                <p>
                  <em> {weather.current.condition.text}</em>
                </p>
                <p>HUMEDAD {weather.current.humidity}%</p>
                <p>
                  <strong> Velocidad del viento </strong> <br />
                  {weather.current.wind_kph} km/h | {weather.current.wind_mph}{" "}
                  mp/h
                </p>
              </div>
            </Col>
            <Col className="mt-5">
              <div className="caja2">
                <p>Prob. de precipitaciones: {weather.current.precip_in}%</p>
                <p>{weather.current.last_updated}</p>
                <p>
                  TEMPERATURAS <br /> {weather.current.temp_c}°C{" - "}{" "}
                  {weather.current.temp_f}°F
                </p>
              </div>
            </Col>

            <Col className="mt-5">
              <div className="caja3">
                <p>REGION: {weather.location.region}</p>
                <p>LATITUD: {weather.location.lat}</p>
                <p>LONGITUD: {weather.location.lon}</p>
                <p>HORA: {weather.location.localtime}</p>
              </div>
            </Col>
          </>
        )}
      </Row>
      <p>
        Powered by
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </p>
    </>
  );
};

export default Weather;
