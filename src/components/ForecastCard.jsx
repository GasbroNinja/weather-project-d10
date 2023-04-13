/*
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


const ForecastCard = ({ data }) => {

      const [bgGif2, setBgGif2] = useState("");
    
    const BGGif2 = data.list.weather[0].main;

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


      


    const daydate = new Date (data.dt * 1000).toLocaleDateString("en-US",{
        weekday:"short",
        month:"short",
        day:"numeric",
    });

//  const icons = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    return (
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
        <Row className="d-none d-sm-flex">
          <h1 className="my-2 d-flex justify-content-center">{daydate}</h1>
          <h1 className="my-2 d-flex justify-content-center">{city}</h1>
          <h1 className="my-2 d-flex justify-content-center">
            {currentTime}
          </h1>
          <Col className="" sm={6} md={4} lg={1}>
            <h2 className="my-2 d-flex">Country:</h2>
            <h2 className="my-2 d-flex">Temperature:</h2>
            <h4 className="my-2 d-flex">Weather:</h4>
            <h4 className="my-2 d-flex">Forecast:</h4>
            <h4 className="my-2 d-flex">Pressure:</h4>
            <h4 className="my-2 d-flex">Humidity:</h4>
          </Col>

          <Col className="" sm={6} md={8} lg={12}>
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
      </Container>
    );




export default ForecastCard;
*/