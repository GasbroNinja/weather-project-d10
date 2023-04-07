import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const navigate = useNavigate();
  console.log("NAVIGATE", navigate);

  // navigate è una funzione
  // serve a redirezionare l'utente ad una nuova rotta via codice

  return (
    <Container fluid className="px-0 bg-dark" style={{ minHeight: "100vh" }}>
      <div className={`text-center ${props.spacings} bg-dark`}>
        <h1 className="text-light">404 — Pagina non trovata</h1>
        <p className="text-light">
          La risorsa richiesta non esiste, <Link to="/">torna indietro</Link>
        </p>
        {/* alternativa 1) */}

        <Link to="/">
          <Button variant={props.variant || "info"}>Torna alla Homepage</Button>
        </Link>

        {/* alternativa 2) */}
        {/* <Button
        variant={props.variant || "info"}
        onClick={() => {
          navigate("/");
        }}
      >
        Torna alla Homepage
      </Button> */}
      </div>
    </Container>
  );
};

export default NotFound;