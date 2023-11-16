import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { json, Link, Outlet } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


function Menu() {
    const isLoggedIn = Cookies.get("isLoggedIn");
    const username = Cookies.get("username");
    const navigate = useNavigate();

    const logOut = () => {
        Cookies.remove("isLoggedIn");
        Cookies.remove("username");
        Cookies.remove("token");
        navigate("/login");
        swal("Sesión cerrada", "Haz cerrado sesión!", "success");
        
    };

    return (
        <>
           

            <div
                className="m-banner"
                style={{
                    background: "white",
                    display: "block",
                    textAlign: "center",
                    color: "black",
                    padding: "10px", 
                }}
            >
                <span>ENVÍOS A TODO MÉXICO</span>
            </div>

            <Navbar style={{ background: "#f5f5f5" }} expand="lg">
                <Navbar.Brand style={{ paddingLeft: "30px" }} as={Link} to="/">
                    <img src="https://img.icons8.com/color/48/null/nike.png" />
                </Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">
                                Inicio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/new">
                                Nuevos Lanzamientos
                            </Nav.Link>
                            <Nav.Link as={Link} to="/men">Hombres</Nav.Link>
                            <Nav.Link as={Link} to="/women">Mujeres</Nav.Link>
                            <Nav.Link as={Link} to="/children">Niños</Nav.Link>

                            
                        </Nav>
                        <Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-secondary">
                                    Buscar
                                </Button>
                            </Form>

                            {isLoggedIn && (
                                <>
                                    <NavDropdown
                                        title="Cuenta"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item>
                                            {username.toUpperCase()}
                                            <noframes></noframes>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={logOut}>
                                            Cerrar sesion
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link as={Link} to="/cart">
                                        <img src="https://img.icons8.com/external-thin-kawalan-studio/24/null/external-cart-shopping-e-commerce-thin-kawalan-studio.png" />
                                    </Nav.Link>
                                </>
                            )}
                            {!isLoggedIn && (
                                <NavDropdown
                                    title="Cuenta"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item as={Link} to="login">
                                        Iniciar Sesión<noframes></noframes>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="register">
                                        Registro
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default Menu;
