import { Container, Row } from "react-bootstrap";
import Headers from "../components/Headers.jsx"
import StoryBar from "../components/StoryBar.jsx";

const HomePage = ()=>{

    return(
        <div>
            <Row>
        <Headers></Headers>
        </Row>
        <Row>
        <Container>
        <StoryBar></StoryBar>
        </Container>
        </Row>
        </div>
    )
}
export default HomePage;