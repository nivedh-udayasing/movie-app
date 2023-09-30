import { Container, Row, Col } from "react-bootstrap";
import Genre from "./Genre";
const MainContainer = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col className="d-flex justify-content-between">
          <Genre />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-between">col h2iu3eh</Col>
      </Row>
    </Container>
  );
};

export default MainContainer;
