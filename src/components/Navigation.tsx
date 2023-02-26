import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import iconCart from "../images/iconCart.png"

export function Navigation() {
    const {openCart, cartQuantity} = useShoppingCart()

    return (
        <Navbar className="bg-white shadow-sm mb-3" sticky="top">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button
                        onClick={openCart}
                        style={{ width: "3.5rem", height: "3.5rem", position: "relative" }}
                        variant="outline-primary"
                        className="rounded-circle"
                        >
                        <img style={{width: "2rem"}} src={iconCart} />
                        <div 
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)"
                            }}
                            >
                            {cartQuantity}
                        </div>
                    </Button>
                )}
            </Container>
        </Navbar>
    )
}