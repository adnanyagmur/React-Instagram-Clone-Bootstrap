import { Col, Image, Row} from "react-bootstrap";
import Person1 from "../assets/person/Person1.jpg";
const RightInfo = () =>{

    return(
        <div>
           <Row>
           <Col  className="px-3 py-4 d-none d-sm-block">
                    <Image className="px-5" src={Person1} roundedCircle width="60px" height="60px" ></Image>
                </Col>
                <Col>
                <span >Hüseyin</span>
                </Col>
                </Row>
        </div>

    )
}
export default RightInfo;