import { Navbar, Container, Image, Form, FormControl, Button } from "react-bootstrap";
import YaziLogo from "../assets/instaYaziLogo.png";
import SearchLogo from "../assets/searchLogo.png";



const Headers = () => {

  return (
    <Navbar bg="light">
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
        <Navbar.Collapse className="justify-content-end">
          <Image className="mt-1 mx-1 " src={SearchLogo} alt="instagramLogoYazi" height="25px"></Image>
          <Image className="mt-1 mx-1 " src={SearchLogo} alt="instagramLogoYazi" height="25px"></Image>

          <Image className="mt-1 mx-1 " src={SearchLogo} alt="instagramLogoYazi" height="25px"></Image>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default Headers;
