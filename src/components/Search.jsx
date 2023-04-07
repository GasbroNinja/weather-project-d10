import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import "../App.css"
//import { Link, Route, Routes, useLocation } from "react-router-dom";
//import NotFound from "./NotFound";


const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q="

const KEY = '910b52d2d2707dbd34dfcca7f47984f9';
const TIME_NOW = new Date().toLocaleString();
const Search = () => {


    const [query, setQuery] = useState("");
    const [country, setCountry] = useState(""); 
    const [city, setCity] = useState("");
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [pressure, setPressure] = useState("");
    const [humidity, setHumidity] = useState("");
    const [tempMin, setTempMin] = useState("");
    const [tempMax, setTempMax] = useState("");
    const [wind, setWind] = useState("");
    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");







    const [bgGif, setBgGif] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

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

    const handleChange = e => {
    setQuery(e.target.value);
    };

    const handleSubmit = async e => {
    e.preventDefault();
        const funcData = async () => {
          try {
            const response = await fetch(
              BASE_URL + query + "&appid=" + KEY + "&units=metric&exclude=minutely,alerts&"
            );
            if (response.ok) {
              const data = await response.json();
              
            setMain(data.weather[0].main);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setCountry(data.sys.country);
            setCity(data.name);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setTempMin(data.main.temp_min);
            setTempMax(data.main.temp_max);
            setWind(data.wind.speed);
            setSunrise(data.sys.sunrise);
            setSunset(data.sys.sunset);
            setBgGif(data.weather[0].main);


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

            setIsLoading(false)
            } else {
                <Alert variant="danger">
                    {errorMsg
                    ? errorMsg
                    : "Error to fetch"}
                </Alert>;
                setIsLoading(false)
            }

            if(!response.ok){
                // DA INSERIRE IL NOT FOUND

            };
          } catch (error) {
            
            setError(true)
            setErrorMsg(error.message)
            setIsLoading(false)
          }
        };
        funcData();

    }

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
      <Container>
        <Row>
          <Col xs={10} className="mx-auto">
            <Form id="myBorder" className="rounded-4" onSubmit={handleSubmit}>
              <Form.Control
                id="myBorder2"
                className="rounded-4"
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Insert your city type and press Enter"
              />
            </Form>
          </Col>
        </Row>
        <Container
          id="myBorder2"
          className="my-5 p-5 w-100 w-lg-50"
          style={{
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
                <h1 className="my-2 d-flex justify-content-center">{city}</h1>
                <h1 className="my-2 d-flex justify-content-center">
                  {TIME_NOW}
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
                  <h2 className="my-2 d-flex justify-content-end">{country}</h2>
                  <h2 className="my-2 d-flex justify-content-end">
                    {mainTemp} °C
                  </h2>
                  <h4 className="my-2 d-flex justify-content-end">{main}</h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {description}
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {pressure} Pa
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {humidity} kg/m³
                  </h4>
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
                  <h4 className="my-2 d-flex justify-content-end">
                    {tempMin} °C
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {tempMax} °C
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {wind} knots
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {convertMsToTime(sunrise)} A.M
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {convertMsToTime(sunset)} P.M
                  </h4>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Container>
    </Container>
  );

}

export default Search;