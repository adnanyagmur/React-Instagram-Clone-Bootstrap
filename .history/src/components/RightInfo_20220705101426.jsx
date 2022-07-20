import { Col, Image, Row } from "react-bootstrap";
import Person1 from "../assets/person/Person1.jpg";
const RightInfo = () => {

    return (
        <div>
            <Row>
                <Col className="px-5 py-4 d-none d-sm-block">
                    <Image className="" src={Person1} roundedCircle width="60px" height="60px" ></Image>
                </Col>
                <Col className="py-4">
                    <h6>Hüseyin Armut</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>Öneriler</Col>
                        <Col><h6>Tümünü Gör </h6></Col>
                    </Row>
                    <Row>
                        <Col>
                        <Image className="pl-0" src={Person1} roundedCircle width="40px" height="40px" ></Image>
                        <span> AhmetVeli</span>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>


                </Col>
            </Row>
        </div>

    )
}
export default RightInfo;