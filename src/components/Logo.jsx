import "../App.css"
import { Container, Badge } from "react-bootstrap";


const Logo = () => {
    return (
      <Container fluid className="text-center">
        <Badge
          id="myBorder"
          style={{
            background:
              "linear-gradient(103deg, rgba(104,93,93,1) 0%, rgba(29,119,205,1) 100%)",
          }}
          className="mb-5 p-4 mx-auto d-flex align-items-center"
        >
          <h1 className="h1 d-flex display-1">💧</h1>
          <h2 className="d-flex ms-0 logo">NotMeteo.it</h2>
        </Badge>
      </Container>
    );
}

export default Logo;

