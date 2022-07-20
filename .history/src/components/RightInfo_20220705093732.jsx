import { Col, Image, Row} from "react-bootstrap";
import Person1 from "../assets/person/Person1.jpg";
const RightInfo = () =>{

    return(
        <div>
           <Row>
           <Col  className="px-3 py-4 d-none d-sm-block">
                    <Image  src={Person1} roundedCircle width="60px" height="60px" ></Image>
                </Col>
                <Col>
                <span style={{height:"%50"}} >Hüseyin</span>
                </Col>
                </Row>
        </div>

    )
}
export default RightInfo;