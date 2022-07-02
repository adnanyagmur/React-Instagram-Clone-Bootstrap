import { Navbar,Container } from "react-bootstrap"

const Headers = ()=>{

    return (
        <Navbar bg="red">
  <Container>
    <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
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
