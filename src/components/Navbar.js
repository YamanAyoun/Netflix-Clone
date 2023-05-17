import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar(){
    return(
        <>
          <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorite">FavList</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbar;