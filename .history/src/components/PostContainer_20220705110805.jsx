import { Card, Col, Row } from "react-bootstrap";
import Kangal from "../assets/Post/Kangal.jpg"

const PostContainer = ()=>{

    return (
        <div>
        <Row>
            <Col>
            <Card>
                <Card.Text>  <h6></h6>Kangal5858</Card.Text>
                <Card.Img src={Kangal}></Card.Img>
                <Card

            </Card>
            </Col>
        </Row>
        </div>

    )
}
export default PostContainer;