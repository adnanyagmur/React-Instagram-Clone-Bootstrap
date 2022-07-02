import { Container, Row } from "react-bootstrap";
import Headers from "../components/Headers.jsx"
import StoryBar from "../components/StoryBar.jsx";

const HomePage = ()=>{

    return(
        <div>
            <Row>
        <Headers></Headers>
        </Row>
        <Row sm={3}></Row>
        <Row sm={6}>
        <Container >
        <StoryBar></StoryBar>
        </Container>
        </Row>
        </div>
    )
}
export default HomePage;