/* eslint-disable array-callback-return */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import css from './TopNav.module.scss'
import { useAppSelector } from "../../app/hooks";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

const TopNav = () => {
    const detailsNumber = useAppSelector(state => state.cart.itemsInCart)

    return (
        <div dir='rtl'>
            <Navbar expand="lg" className={`${css.body}`}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <NavLink className='nav-link mx-2' to="/">עמוד הבית</NavLink>
                            <span className={`nav-link mx-2 ${css.limit}`}>|</span>
                            <NavLink className='nav-link mx-2' to="/about">אודות</NavLink>
                            <span className={`nav-link mx-2 ${css.limit}`}>|</span>
                            <NavLink className='nav-link mx-2' to="/comments">לקוחות כותבים</NavLink>
                            <span className={`nav-link mx-2 ${css.limit}`}>|</span>
                            <NavLink className='nav-link mx-2' to="/cart">
                                
                                <Badge overlap="rectangular" color="secondary" badgeContent={detailsNumber} className="mx-2"><ShoppingCartIcon /></Badge>
                                </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNav