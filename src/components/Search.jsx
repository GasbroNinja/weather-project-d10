import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import "../App.css"
import Logo from "./Logo";
//import { Link, Route, Routes, useLocation } from "react-router-dom";
//import NotFound from "./NotFound";

const KEY = '910b52d2d2707dbd34dfcca7f47984f9';

const Search = () => {
  const [geo, setGeo] = useState(null);
  const [weather, setWeather] = useState([]);
  const [nextWeather, setNextWeather] = useState([]);
  const [query, setQuery] = useState("");
  

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [bgGif, setBgGif] = useState("");
//  const [bgGif2, setBgGif2] = useState("");


  //  const icons = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  let time = new Date().toLocaleTimeString();

  let [currentTime, changeTime] = useState(time);

  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }
  setInterval(checkTime, 1000);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}`;
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    geoFetch();
    
  };

    useEffect(() => {
      if (geo) {
        currentMeteo();
        nextMeteo();
      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [geo]);



      const geoFetch = async () => {
        try {
          const Url =
            "http://api.openweathermap.org/geo/1.0/direct?q=" +
            query +
            "&appid=" +
            KEY;
          const resp = await fetch(Url);
          if (resp.ok) {
            const data = await resp.json();
            setGeo(data[0]);

          }
        } catch (error) {
          setError(true);
          setErrorMsg(error.message);
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
        
      };

      const currentMeteo = async () => {
        try {
          const weatherFetch = `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&units=metric&appid=${KEY}`;
          const resp = await fetch(weatherFetch);
          if (resp.ok) {
            const data = await resp.json();
            setWeather(data);

            const BGGif = data.weather[0].main;
            console.log(BGGif);
            switch (BGGif) {
              case "Snow":
                setBgGif(
                  "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')"
                );
                break;
              case "Clouds":
                setBgGif(
                  "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')"
                );
                break;
              case "Fog":
                setBgGif(
                  "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')"
                );
                break;
              case "Rain":
                setBgGif(
                  "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')"
                );
                break;
              case "Clear":
                setBgGif(
                  "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                );
                break;
              case "Thunderstorm":
                setBgGif(
                  "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')"
                );
                break;
              default:
                setBgGif(
                  "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                );
                break;
            }


          }
        } catch (error) {
          setError(true);
          setErrorMsg(error.message);
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      };



      const nextMeteo = async () => {
        try {
          const forecastFetch = `https://api.openweathermap.org/data/2.5/forecast?lat=${geo.lat}&lon=${geo.lon}&units=metric&appid=${KEY}`;
          const resp = await fetch(forecastFetch);
          if (resp.ok) {
            const data = await resp.json();
            setNextWeather(data);
/*
             const BGGif2 = nextWeather.list.weather[0].main;

             switch (BGGif2) {
               case "Snow":
                 setBgGif2(
                   "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')"
                 );
                 break;
               case "Clouds":
                 setBgGif2(
                   "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')"
                 );
                 break;
               case "Fog":
                 setBgGif2(
                   "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')"
                 );
                 break;
               case "Rain":
                 setBgGif2(
                   "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')"
                 );
                 break;
               case "Clear":
                 setBgGif2(
                   "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                 );
                 break;
               case "Thunderstorm":
                 setBgGif2(
                   "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')"
                 );
                 break;
               default:
                 setBgGif2(
                   "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                 );
                 break;
             }
*/
          }
        } catch (error) {
          setError(true);
          setErrorMsg(error.message);
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      };



      //const bgDynamic = async () => {

      //} 







  return (
    <Container
      fluid
      className="p-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(4,83,83,1) 0%, rgba(69,69,69,1) 100%)",
      }}
    >
      <Logo />
      <Container>
        <Row>
          <Col xs={10} className="mx-auto">
            <Form id="myBorder" className="rounded-4" onSubmit={handleSubmit}>
              <Form.Control
                id="myBorder2"
                className="rounded-4 personalAnimation text-center fs-2"
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Insert your city type and press Enter"
                style={{
                  height: "90px",
                  background:
                    "linear-gradient(203deg, #071b1b 25%, #002727 90%)",
                }}
              />
            </Form>
          </Col>
        </Row>
        <Container
          id="myBorder2"
          className="my-5 p-5 w-100 w-lg-50"
          style={{
            //background: "linear-gradient(203deg, #071b1b 25%, #002727 90%)",
            backgroundImage: bgGif ?? "",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            objectFit: "cover",
          }}
        >
          {isLoading && !error && (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner
                id="myBorder"
                className="my-3 ms-auto me-5"
                animation="grow"
                variant="info"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <h2 className="my-3 d-flex justify-content-center align-items-center">
                Waiting your City . . .
              </h2>
            </div>
          )}
          {error && !isLoading && (
            <Alert variant="danger">
              {errorMsg ? errorMsg : "Errore nel reperire i dati"}
            </Alert>
          )}
          {!isLoading && !error && (
            <>
              <Row className="d-none d-sm-flex">
                <h1 className="my-2 d-flex justify-content-center">Today</h1>
                {weather.name ? (
                  <h1 className="my-2 d-flex justify-content-center">
                    {weather.name}
                  </h1>
                ) : null}
                <h1 className="my-2 d-flex justify-content-center">
                  {currentTime}
                </h1>
                <Col className="" /*sm={6} md={4} lg={1}*/>
                  <h2 className="my-2 d-flex">Country:</h2>
                  <h2 className="my-2 d-flex">Temperature:</h2>
                  <h4 className="my-2 d-flex">Weather:</h4>
                  <h4 className="my-2 d-flex">Forecast:</h4>
                  <h4 className="my-2 d-flex">Pressure:</h4>
                  <h4 className="my-2 d-flex">Humidity:</h4>
                </Col>

                <Col className="" /*sm={6} md={8} lg={12}*/>
                  {weather.sys ? (
                    <h2 className="my-2 d-flex justify-content-end">
                      {weather.sys.country}
                    </h2>
                  ) : null}
                  {weather.weather ? (
                    <h2 className="my-2 d-flex justify-content-end">
                      {weather.main.temp.toFixed()} °C
                    </h2>
                  ) : null}
                  {weather.weather ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {weather.weather[0].main}
                    </h4>
                  ) : null}
                  {weather.weather ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {weather.weather[0].description}
                    </h4>
                  ) : null}
                  {weather.main ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {weather.main.pressure} Pa
                    </h4>
                  ) : null}
                  {weather.main ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {weather.main.humidity} kg/m³
                    </h4>
                  ) : null}
                </Col>
              </Row>
              <hr className="text-light my-3 display-1 border-5 border-light" />
              <Row className="d-none d-sm-flex">
                <Col>
                  <h4 className="my-2 d-flex">Minimum:</h4>
                  <h4 className="my-2 d-flex">Maxmimum:</h4>
                  <h4 className="my-2 d-flex">Wind:</h4>
                  <h4 className="my-2 d-flex">Sunrise:</h4>
                  <h4 className="my-2 d-flex">Sunset:</h4>
                </Col>

                <Col>
                  {weather.main ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {weather.main.temp_min.toFixed()} °C
                    </h4>
                  ) : null}
                  {weather.main ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {weather.main.temp_max.toFixed()} °C
                    </h4>
                  ) : null}
                  {weather.wind ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {weather.wind.speed} knots
                    </h4>
                  ) : null}
                  {weather.sys ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {convertMsToTime(weather.sys.sunrise)} A.M
                    </h4>
                  ) : null}
                  {weather.sys ? (
                    <h4 className="my-2 d-flex justify-content-end">
                      {convertMsToTime(weather.sys.sunset)} P.M
                    </h4>
                  ) : null}
                </Col>
              </Row>
            </>
          )}
        </Container>
        <>
          <h1 className="text-center">Future 5 days forecasts</h1>
          <Row>
            {nextWeather.list && (
              <div className="list-group mt-4 ">
                {nextWeather.list.map((day, i) => (
                  <>
                    <Container
                      id="myBorder2"
                      key={i}
                      className="my-5 p-5 w-100 w-lg-50"
                      style={{
                        background:
                          "linear-gradient(203deg, #071b1b 25%, #002727 90%)",
                      }}
                    >
                      <Row className="d-none d-sm-flex">
                        <h1 className="my-2 d-flex justify-content-center">
                          Previsioni del:
                        </h1>
                        <h1 className="my-4 d-flex justify-content-center">
                          {day.dt_txt}
                        </h1>
                        <Col>
                          <h2 className="my-2 d-flex">Temperature:</h2>
                          <h4 className="my-2 d-flex">Weather:</h4>
                          <h4 className="my-2 d-flex">Forecast:</h4>
                          <h4 className="my-2 d-flex">Pressure:</h4>
                          <h4 className="my-2 d-flex">Humidity:</h4>
                        </Col>

                        <Col>
                          <h2 className="my-2 d-flex justify-content-end">
                            {day.main.temp.toFixed()} °C
                          </h2>
                          <h4 className="my-2 d-flex justify-content-end">
                            {day.weather[0].main}
                          </h4>
                          <h4 className="my-2 d-flex justify-content-end">
                            {day.weather[0].description}
                          </h4>
                          <h4 className="my-2 d-flex justify-content-end">
                            {day.main.pressure} Pa
                          </h4>
                          <h4 className="my-2 d-flex justify-content-end">
                            {day.main.humidity} kg/m³
                          </h4>
                        </Col>
                      </Row>
                      <hr className="text-light my-3 display-1 border-5 border-light" />
                      <Row className="d-none d-sm-flex">
                        <Col>
                          <h4 className="my-2 d-flex">Minimum:</h4>
                          <h4 className="my-2 d-flex">Maxmimum:</h4>
                          <h4 className="my-2 d-flex">Wind:</h4>
                        </Col>

                        <Col>
                          <h4 className="my-2 d-flex justify-content-end">
                            {day.main.temp_min.toFixed()} °C
                          </h4>
                          <h4 className="my-2 d-flex justify-content-end">
                            {day.main.temp_max.toFixed()} °C
                          </h4>
                          <h4 className="my-2 d-flex justify-content-end">
                            {day.wind.speed} knots
                          </h4>
                        </Col>
                      </Row>
                    </Container>
                    <hr className="border border-light border-3" />
                  </>
                ))}
              </div>
            )}
          </Row>
        </>
      </Container>
    </Container>
  );
}
        



export default Search;