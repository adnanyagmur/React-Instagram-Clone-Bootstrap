import { Navbar, Container, Image, Form, FormControl, Button } from "react-bootstrap";
import YaziLogo from "../assets/instaYaziLogo.png";
import SearchLogo from "../assets/searchLogo.png";
import HomeIcons from "../assets/HomeIcons.png";
import CompassIcons from "../assets/CompassIcons.png";
import MesengerIcons from "../assets/MesengerIcons.png";
import HeartsIcons from "../assets/HeartIcons.png";
const Headers = () => {

  return (
    <Navbar bg="dark" className="pt-0">
      <Container>
        <Navbar.Brand href="/"> <Image src={YaziLogo} alt="instagramLogoYazi" height="60px" ></Image> </Navbar.Brand>
        <Navbar.Toggle />
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
        <Navbar.Collapse className="justify-content-center">
          <Image className="mx-2 " src={HomeIcons} alt="HomeIcons" height="25px"></Image>
          <Image className="mx-2 " src={MesengerIcons} alt="mesenger İcons " height="25px"></Image>

          <Image className="mx-2 " src={CompassIcons} alt="compass icons" height="25px"></Image>
          <Image className="mx-2 mb-1 " src={HeartsIcons} alt="compass icons" height="25px"></Image>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default Headers;
