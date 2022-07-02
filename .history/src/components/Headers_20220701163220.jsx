import { Navbar,Container,Image } from "react-bootstrap";
import YaziLogo from "../assets/instaYaziLogo.png";

const Headers = ()=>{

    return (
        <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="/"> <Image src={YaziLogo} alt="instagramLogoYazi"></Image> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="/">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}
export default Headers;
