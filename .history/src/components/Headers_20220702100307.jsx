import { Navbar,Col,ThemeProvider, Container, Image, Form, FormControl, Button, Row } from "react-bootstrap";
import YaziLogo from "../assets/instaYaziLogo.png";
import SearchLogo from "../assets/searchLogo.png";
import HomeIcons from "../assets/HomeIcons.png";
import CompassIcons from "../assets/CompassIcons.png";
import MesengerIcons from "../assets/MesengerIcons.png";
import HeartsIcons from "../assets/HeartIcons.png";
const Headers = () => {

  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
> 
    <Navbar bg="light">
          <Container>
        <Col sm={4}>
        <Navbar.Brand href="/"> <Image src={YaziLogo} alt="instagramLogoYazi" height="60px" ></Image> </Navbar.Brand>
        </Col>
        <Navbar.Toggle />
        <Col sm={4}>
        <Navbar.Collapse className="justify-content-center m">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />  <Image className="mt-1 mx-1 " src={SearchLogo} alt="instagramLogoYazi" height="25px"></Image>
          </Form>
        </Navbar.Collapse>
        </Col>
        <Col sm={4}>
        <Navbar.Collapse className="justify-content-center">
          <Image className="mx-2 " src={HomeIcons} alt="HomeIcons" height="25px"></Image>
          <Image className="mx-2 " src={MesengerIcons} alt="mesenger İcons " height="25px"></Image>

          <Image className="mx-2 " src={CompassIcons} alt="compass icons" height="25px"></Image>
          <Image className="mx-2 mb-1 " src={HeartsIcons} alt="compass icons" height="25px"></Image>
        </Navbar.Collapse>
        </Col>
      </Container>

    </Navbar>
    
    </ThemeProvider>
  )
}
export default Headers;
