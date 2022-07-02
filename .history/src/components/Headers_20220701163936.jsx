import { Navbar,Container,Image,Form,FormControl,Button } from "react-bootstrap";
import YaziLogo from "../assets/instaYaziLogo.png";

const Headers = ()=>{

    return (
        <Navbar bg="light">
  <Container>
    <Navbar.Brand href="/"> <Image src={YaziLogo} alt="instagramLogoYazi" height="60px" ></Image> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-center ml-5">
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
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
