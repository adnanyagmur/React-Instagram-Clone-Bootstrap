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
       <Col sm={4}>
        <Row>
        <StoryBar></StoryBar>
        </Row>

        <Row>
        Gönderi kısmı
        </Row>
        </Col>
        <Col sm={2}>
        asdasd
        </Col>
        <Col sm={3}></Col>
        </Row>
        </div>
    )
}
export default HomePage;