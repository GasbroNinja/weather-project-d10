/*
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";



const BASE_URL_2 = "https://api.openweathermap.org/data/2.5/forecast?";
const KEY = "910b52d2d2707dbd34dfcca7f47984f9";

const Forecasts = (props) => {
  const [query2, setQuery2] = useState("");
  const [bgGif2, setBgGif2] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    funcData2();
  }, [props.coordinates]);

  const funcData2 = async () => {
    try {
      const response = await fetch(
        BASE_URL_2 +
          "lat=" +
          props.lat +
          "&lon=" +
          props.lon +
          "&appid=" +
          KEY +
          "&units=metric&exclude=minutely,alerts&"
      );
      if (response.ok) {
        setForecast(await response.json());
*/
        /*
          setMain2(list.weather[0].main);
          setMainTemp2(list.main.temp);
          setDescription2(list.weather[0].description);
          setCity2(list.name);
          setPressure2(list.main.pressure);
          setHumidity2(list.main.humidity);
          setTempMin2(list.main.temp_min);
          setTempMax2(list.main.temp_max);
          setWind2(list.wind.speed);
          setSunrise2(list.sys.sunrise);
          setSunset2(list.sys.sunset);
          setBgGif2(list.weather[0].main);

        const mappingDays = new Set(
          list.map((forecast) => forecast.dt_txt.slice(0, 10))
        );

        const singleDay = [...mappingDays].map((d) => {
          return list.find((forecast) => {
            return forecast.dt_txt.slice(0, 10) === d;
          });
        });

        setForecast(singleDay);

        setIsLoading(false);
      } else {
        <Alert variant="danger">
          {errorMsg ? errorMsg : "Error to fetch"}
        </Alert>;
        setIsLoading(false);
      }

      if (!response.ok) {
        // DA INSERIRE IL NOT FOUND
      }
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  };
*/
/*   const BGGif2 = forecast.list.weather[0].main;

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

 /* const daydate = new Date(forecast.list.dt * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      {isLoading ? (
        <Container
          id="myBorder2"
          className="d-flex justify-content-center"
          style={{ minHeight: "110px" }}
        >
          <Spinner
            id="myBorder"
            className="my-3 text-center"
            animation="grow"
            variant="info"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
            <h2 className="my-4 d-flex justify-content-center align-items-center">
              Forecasts...
            </h2>
          </Spinner>
        </Container>
      ) : (
        <Container
          id="myBorder2"
          className="my-5 p-5 w-100 w-lg-50"
          style={{
            backgroundImage: bgGif2 ?? "",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            objectFit: "cover",
          }}
        >
          <h1 className="text-center">Future 5 days forecasts</h1>
          <hr className="border border-2 border-light opacity-100" />

          <div>
            {forecast &&
              forecast.list.map((day, i) => (
                <Container
                  key={i}
                  id="myBorder2"
                  className="my-5 p-5 w-100 w-lg-50"
                  style={{
                    backgroundImage: bgGif2 ?? "",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    objectFit: "cover",
                  }}
                >
                  <Row className="d-none d-sm-flex">
                    <h1 className="my-2 d-flex justify-content-center">
                      {day.daydate}
                    </h1>
                    <h1 className="my-2 d-flex justify-content-center">
                      {day.name}
                    </h1>
                    <Col className="" sm={6} md={4} lg={1}>
                      <h2 className="my-2 d-flex">Temperature:</h2>
                      <h4 className="my-2 d-flex">Weather:</h4>
                      <h4 className="my-2 d-flex">Forecast:</h4>
                      <h4 className="my-2 d-flex">Pressure:</h4>
                      <h4 className="my-2 d-flex">Humidity:</h4>
                    </Col>

                    <Col className="" sm={6} md={8} lg={12}>
                      <h2 className="my-2 d-flex justify-content-end">
                        {day.main.temp} °C
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
                      <h4 className="my-2 d-flex">Sunrise:</h4>
                      <h4 className="my-2 d-flex">Sunset:</h4>
                    </Col>

                    <Col>
                      <h4 className="my-2 d-flex justify-content-end">
                        {day.main.temp_min} °C
                      </h4>
                      <h4 className="my-2 d-flex justify-content-end">
                        {day.main.temp_max} °C
                      </h4>
                      <h4 className="my-2 d-flex justify-content-end">
                        {day.wind.speed} knots
                      </h4>
                      <h4 className="my-2 d-flex justify-content-end">
                        {day.sys.sunrise} A.M
                      </h4>
                      <h4 className="my-2 d-flex justify-content-end">
                        {day.sys.sunset} P.M
                      </h4>
                    </Col>
                  </Row>
                </Container>
              ))}

            {  {forecast.slice(1, 6).map((forecast) => (
              <ForecastCard key={forecast.dt} data={forecast} />
            ))}   }
          </div>
        </Container>
      )}
    </>
  );
};


export default Forecasts;
*/