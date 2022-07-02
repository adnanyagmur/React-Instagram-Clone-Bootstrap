import { Navbar,Col,ThemeProvider, Container, Image, Form, FormControl, Button, Row } from "react-bootstrap";
import YaziLogo from "../assets/instaYaziLogo.png";
import SearchLogo from "../assets/searchLogo.png";
import HomeIcons from "../assets/HomeIcons.png";
import CompassIcons from "../assets/CompassIcons.png";
import MesengerIcons from "../assets/MesengerIcons.png";
import HeartsIcons from "../assets/HeartIcons.png";
const Headers = () => {

  return (

    <Navbar bg="light">
          <Container>
        <Col sm={2}>
        <Navbar.Brand href="/" className="ml-"> <Image src={YaziLogo} alt="instagramLogoYazi" height="60px" ></Image> </Navbar.Brand>
        </Col>
        <Navbar.Toggle />
        <Col sm={4}>
        <Navbar.Collapse className="justify-content-center">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mb-2 me-2 d-none d-sm-block"
              aria-label="Search"
            />  <Image className="mx-1 mt-1 " src={SearchLogo} alt="instagramLogoYazi" height="22px"></Image>
          </Form>
        </Navbar.Collapse>
        </Col>
        <Col sm={4}>
        <Navbar.Collapse className="justify-content-center">
          <Image className="mx-3 mb-1 " src={HomeIcons} alt="HomeIcons" height="25px"></Image>
          <Image className="mx-3 mb-1 " src={MesengerIcons} alt="mesenger İcons " height="25px"></Image>

          <Image className="mx-3 mb-1 " src={CompassIcons} alt="compass icons" height="25px"></Image>
          <Image className="mx-3 mb-2 d-none d-sm-block" src={HeartsIcons} alt="compass icons" height="25px"></Image>
        </Navbar.Collapse>
        </Col>
      </Container>

    </Navbar>

  )
}
export default Headers;
