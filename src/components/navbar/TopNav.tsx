import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import css from './TopNav.module.scss'
import { GiHotMeal } from 'react-icons/gi'


const TopNav = () => {
    return (
        <div dir='rtl' className="">
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to="/" className='navbar-brand'>
                        <GiHotMeal/>
                        {/* <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
                         &nbsp; אסאדו
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`mx-auto ${css.nav}`}>
                            <NavLink className='nav-link mx-2' to="/">עמוד הבית</NavLink>
                            <NavLink className='nav-link mx-2' to="/about">אודות</NavLink>
                            <NavLink className='nav-link mx-2' to="/comments">לקוחות כותבים</NavLink>
                            <NavLink className='nav-link mx-2' to="/cart">סל קניות</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNav