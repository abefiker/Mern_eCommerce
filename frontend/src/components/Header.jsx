import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseonselect={true.toString()} >
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} alt="proshop" />
                        ProShop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart'>
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            <Nav.Link href='/login'>
                                <FaUser /> Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header