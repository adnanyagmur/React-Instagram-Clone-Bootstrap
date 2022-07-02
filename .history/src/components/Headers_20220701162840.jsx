import { Navbar,Container,Image } from "react-bootstrap"

const Headers = ()=>{

    return (
        <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="/"> <Image></Image> </Navbar.Brand>
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
