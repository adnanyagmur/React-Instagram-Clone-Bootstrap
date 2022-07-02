import { Col, Row } from "react-bootstrap";
import Headers from "../components/Headers.jsx"
import StoryBar from "../components/StoryBar.jsx";

const HomePage = ()=>{

    return(
        <div>
            <Row>
        <Headers></Headers>
        </Row>
        
        <Row>
            <Col sm={3}></Col>
       <Col sm>
        <StoryBar></StoryBar>
        </Col>
        <Col>
        </Col>
        <Col></Col>
        </Row>
        </div>
    )
}
export default HomePage;