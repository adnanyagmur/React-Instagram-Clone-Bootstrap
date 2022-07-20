import { Col, Image} from "react-bootstrap";
import Person1 from "../assets/person/Person1.jpg";
const RightInfo = () =>{

    return(
        <div>
           
           <Col  className="px-3 py-4 d-none d-sm-block">
                    <Image  src={Person1} roundedCircle width="60px" height="60px" ></Image>
                </Col>
                <Col>
                <div className="text-center">Hüseyin</div>
                </Col>
        </div>

    )
}
export default RightInfo;