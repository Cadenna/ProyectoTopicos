import React from "react";
import { Image, Card, Col, Row, Button} from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="position-relative">
                <Image
                style={{marginTop: "50px"}}
                className="d-block w-100 "
                src="https://static.nike.com/a/images/w_1920,h_400,c_fill,f_auto/b61e5a45-a839-44c8-9930-e4a9c8166933/image.jpg"
                alt="Third slide"
                />
            </div>

            <div style={{marginTop:'50px'}}>
                <Row xs={1} md={2} className="g-10 mx-auto" >
                    
                <Card className="border-0" style={{ position: "relative" }}>
                    <Card.Img
                    variant="top"
                    style={{ maxHeight: "850px" }}
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aadb8e45-7e31-493a-9bce-6b36e0ad0473/jersey-de-f%C3%BAtbol-dri-fit-del-fc-barcelona-alternativo-2023-24-stadium-GFJsLg.png"
                    fluid
                    />
                    <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white"
                    }}
                    >
                    <Card.Text>Lo nuevo en jersey de futbol: Luminous Pack</Card.Text>
                    <Card.Title>Creatividad que conecta con la habilidad</Card.Title>
                    <Button variant="light">Comprar</Button>{' '}
                    </div>
                </Card>
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9edbab5-9956-46b8-8b4b-a439085cd835/top-de-tejido-de-punto-con-te%C3%B1ido-ondulado-sin-mangas-sportswear-P9pvx7.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "white"
                        }}
                        >
                        <Card.Text>Vacaciones en Paris</Card.Text>
                        <Card.Title>Los mejores estilos para días de diversión</Card.Title>
                        <Button variant="light">Comprar</Button>{' '}
                        </div>
                    </Card>
                </Row>
            </div >
                
            <div style={{marginTop:'30px'}}>
                <Row xs={1} md={3} className="g-10 mx-auto">
                <Card className="border-0" style={{maxWidth:''}}>
                            <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25cd0327-33c0-404b-90cd-e1af503ddecc/chamarra-dri-fit-one-f3Fz5z.png" />
                            <Card.Body>
                                <Card.Title>Nike Dri-FIT One</Card.Title>
                                <Card.Text>
                                Chamarra para mujer 
                                </Card.Text>
                                <Card.Text>
                                    $1,599
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                            
                        </Card>


                        <Card  className="border-0 ">
                            <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a6cacfa-2f9a-4093-8e30-d42d102752a5/jersey-dri-fit-nba-swingman-denver-nuggets-icon-edition-2022-23-B8FDSD.png" />
                            <Card.Body>
                                <Card.Title>Nike Sportwear</Card.Title>
                                <Card.Text>
                                Chamarra de entrenador holgada para hombre
                                </Card.Text>
                                <Card.Text>
                                    $1,679
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>

                        

                        <Card  className="border-0">
                            <Card.Img  variant="top" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5774bc93-4e86-416a-bfd6-f6682e221819/chamarra-holgada-con-gorro-talla-grande-sportswear-lightweight-synthetic-fill-D2f09B.png" />
                            <Card.Body>
                                <Card.Title>Nike Sportswear Lightweight Synthetic Fill
                                </Card.Title>
                                <Card.Text>
                                Chamarra para niña
                                </Card.Text>
                                <Card.Text>
                                    $999
                                </Card.Text>
                                <Button className="outline-light" variant="light">Comprar</Button>{' '}
                            </Card.Body>
                        </Card>
                </Row>
            </div>


            <div style={{marginTop:'50px'}}>
                <Row xs={1} md={2} className="g-10 mx-auto" >
                    
                <Card className="border-0" style={{ position: "relative" }}>
                    <Card.Img
                    variant="top"
                    style={{ maxHeight: "850px" }}
                    src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/43bb4508-4d13-4720-bd40-ce25b42e0551/sitio-web-oficial-de-nike.png"
                    fluid
                    />
                    <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white"
                    }}
                    >
                    <Card.Text>Descubre lo nuevo del aire</Card.Text>
                    <Card.Title>Air Max Pulse</Card.Title>
                    <Button variant="light">Comprar</Button>{' '}
                    </div>
                </Card>
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/58ea11f9-f4c8-4d4d-a268-9d6183834e3d/sitio-web-oficial-de-nike.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "white"
                        }}
                        >
                        <Card.Text>Nike ACG</Card.Text>
                        <Card.Title>Creado para la aventura</Card.Title>
                        <Button variant="light">Comprar</Button>{' '}
                        </div>
                    </Card>
                </Row>
            </div >
        
            <div style={{marginTop:'50px'}}>
                <Row xs={1} md={3} className="g-10 mx-auto" >
                    
                <Card className="border-0" style={{ position: "relative" }}>
                    <Card.Img
                    variant="top"
                    style={{ maxHeight: "850px" }}
                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6923f6fb-5346-4af3-92cf-f08d40d08579/sudadera-con-gorro-sin-cierre-de-french-terry-con-bloques-de-colores-club-fleece-3ts95P.png"
                    fluid
                    />
                    <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "black"
                    }}
                    >
                    <Card.Title>Hombre</Card.Title>
                    <Button as={Link} to="/men" variant="secondary">Comprar</Button>{' '}
                    </div>
                </Card>
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9721505b-832e-4b27-9735-8d8e12b2e956/maleta-de-entrenamiento-gym-club-24l-7B6RDJ.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "black"
                        }}
                        >
                        <Card.Title>Mujer</Card.Title>
                        <Button as={Link} to="/women" variant="secondary">Comprar</Button>{' '}
                        </div>
                    </Card>

                    
                    <Card className="border-0" style={{ position: "relative" }}>
                        <Card.Img
                        variant="top"
                        style={{ maxHeight: "850px" }}
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5177ab73-1f54-41cb-9ec9-5095eca4e69c/sudadera-con-gorro-sin-cierre-talla-grande-sportswear-club-fleece-PwGfcT.png"
                        fluid
                        />
                        <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            color: "black"
                        }}
                        >
                        <Card.Title>Niñ@s</Card.Title>
                        <Button as={Link} to="/children" variant="secondary">Comprar</Button>{' '}
                        </div>
                    </Card>
                </Row>
            </div >
             <br>
             </br>
             <br>
             </br>
            <Footer/>
            
        </>
      

      
    );
  }

export default Home;