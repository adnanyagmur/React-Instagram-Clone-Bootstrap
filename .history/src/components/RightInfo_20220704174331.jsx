import { Col} from "react-bootstrap";

const RightInfo = () =>{

    return(
        <div>
           
           <Col  className="px-3 py-4">
                    <Image  src={Person1} roundedCircle width="60px" height="60px" ></Image>
                   <div className="text-center">Hüseyin</div>
                </Col>
        </div>

    )
}
export default RightInfo;