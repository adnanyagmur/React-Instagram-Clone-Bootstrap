import { Col, Image, Row } from "react-bootstrap";
import Person1 from "../assets/person/Person1.jpg";
const RightInfo = () => {

    return (
        <div>
            <Row>
                <Col className="px-5 py-4 d-none d-sm-block">
                    <Image className="" src={Person1} roundedCircle width="60px" height="60px" ></Image>
                </Col>
                <Col className="pt-5">
                    <h6>Hüseyin Armut</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>


                </Col>
            </Row>
        </div>

    )
}
export default RightInfo;