import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "../App.css"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q="
const KEY = '910b52d2d2707dbd34dfcca7f47984f9';
const Search = () => {
    const [query, setQuery] = useState("");
    const [country, setCountry] = useState(""); 
    const [city, setCity] = useState("");
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [pressure, setPressure] = useState("");
    const [humidity, setHumidity] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = e => {
    setQuery(e.target.value);
    };

    const handleSubmit = async e => {
    e.preventDefault();
        const funcData = async () => {
          try {
            const response = await fetch(
              BASE_URL + query + "&appid=" + KEY + "&units=metric"
            );
            if (response.ok) {
              const data = await response.json();
              console.log(data);
            setMain(data.weather[0].main);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setCountry(data.sys.country);
            setCity(data.name);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);

            setIsLoading(false)
            } else {
                alert("Error fetching results");
                setIsLoading(false)
            }
          } catch (error) {
            setError(true)
            setErrorMsg(error.message)
            setIsLoading(false)
          }
        };
        funcData();

 


    }

    useEffect(() => {

    },[])


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
        <Container id="myBorder2" className="my-5 p-5 bg-trasparent w-50">
          {isLoading && !error && (
            <>
              <h2 className="my-3 d-flex justify-content-center align-items-center">
                <Spinner
                  className="my-3 me-5"
                  animation="border"
                  variant="info"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                Waiting your City . . .
              </h2>
            </>
          )}
          {error && !isLoading && (
            <Alert variant="danger">
              {errorMsg ? errorMsg : "Errore nel reperire i dati"}
            </Alert>
          )}
          {!isLoading && !error && (
            <>
              <Row>
                <h1 className="my-2 d-flex justify-content-center">{city}</h1>
                <Col>
                  <h2 className="my-2 d-flex">Country:</h2>
                  <h2 className="my-2 d-flex">Temperature:</h2>
                  <h4 className="my-2 d-flex">Weather:</h4>
                  <h4 className="my-2 d-flex">Forecast:</h4>
                  <h4 className="my-2 d-flex">Pressure:</h4>
                  <h4 className="my-2 d-flex">Humidity:</h4>
                </Col>
                <Col>
                  <h2 className="my-2 d-flex justify-content-end">
                    {" "}
                    {country}
                  </h2>
                  <h2 className="my-2 d-flex justify-content-end">
                    {" "}
                    {mainTemp} °C
                  </h2>
                  <h4 className="my-2 d-flex justify-content-end"> {main}</h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {" "}
                    {description}
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {" "}
                    {pressure} Pa
                  </h4>
                  <h4 className="my-2 d-flex justify-content-end">
                    {" "}
                    {humidity} kg/m³
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