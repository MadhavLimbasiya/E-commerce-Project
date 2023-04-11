import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Header() 
{
    return (
        <div>
            <Navbar bg="dark" variant="dark">
               
                    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        <Link to="/add" class="App-link">Add Product</Link>
                        <Link to="/update" class="App-link">Update Product</Link>
                        <Link to="/login" class="App-link">Login </Link>
                        <Link to="/register" class="App-link">Register </Link>
                    </Nav>
               
            </Navbar>
        </div>
    )
}

export default Header;