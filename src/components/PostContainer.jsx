import { Card, Col, Row } from "react-bootstrap";
import Kangal from "../assets/Post/Kangal.jpg"

const PostContainer = ()=>{

    return (
        <div>
        <Row>
            <Col>
            <Card>
                <Card.Text> <h6 className="pl">Kangal5858</h6></Card.Text>
                <Card.Img src={Kangal}></Card.Img>
          

            </Card>
            </Col>
        </Row>
        </div>

    )
}
export default PostContainer;