import { Nav, Row,Col,Image } from "react-bootstrap";
import Person1 from "../assets/person/Person1.jpg";
import Person2 from "../assets/person/Person2.jpg";
import Person3 from "../assets/person/Person3.jpg";
import Person4 from "../assets/person/Person4.jpg";


const StoryBar = ()=>{

    return(
        <Nav>
            <Row>
                <Col sm={2} className="px-3 py-4">
                    <Image src={Person1} roundedCircle width="60px" height="60px" ></Image>
                </Col>
                <Col sm={2} className="px-3">
                    <Image src={Person2} roundedCircle width="60px" height="60px"></Image>
                </Col>
                <Col sm={2} className="px-3">
                    <Image src={Person3} roundedCircle width="60px" height="60px"></Image>
                </Col>
                <Col sm={2} className="px-3">
                     <Image src={Person4} roundedCircle width="60px" height="60px"></Image>
                </Col>
                <Col sm={2} className="px-3">
                    <Image src={Person1} roundedCircle width="60px" height="60px" ></Image>
                </Col>
                <Col sm={2} className="px-3">
                    <Image src={Person2} roundedCircle width="60px" height="60px"></Image>
                </Col>
             
               
                
            </Row>
        </Nav>

    )
}
export default StoryBar;