import { Col, Row } from "react-bootstrap";
import Headers from "../components/Headers.jsx"
import PostContainer from "../components/PostContainer.jsx";
import RightInfo from "../components/RightInfo.jsx";
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
       <PostContainer></PostContainer>
        </Row>
        </Col>
        <Col sm={2}>
        <RightInfo></RightInfo>
        </Col>
        <Col sm={3}></Col>
        </Row>
        </div>
    )
}
export default HomePage;