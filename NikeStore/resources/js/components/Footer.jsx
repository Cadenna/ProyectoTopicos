import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <>
                <Navbar style={{ background: 'black', paddingTop: '20px', paddingBottom: '20px' }} expand="lg" className="justify-content-center">
                    <Navbar.Brand href="#home" style={{ color: 'white' }}><img src="https://img.icons8.com/color/48/000000/nike.png" alt="Nike Logo" />Nike</Navbar.Brand>
                    <p style={{ color: 'white' }} className="text-center mt-4 mb-4">&copy; {(new Date().getFullYear())} Copyright: Nike</p>
                    <div className="redes-sociales">
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/instagram-new--v1.png" alt="Instagram Icon" />
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/26/000000/facebook--v1.png" alt="Facebook Icon" />
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/twitter--v1.png" alt="Twitter Icon" />
                        </a>
                    </div>
                </Navbar>
            </>
        </div>
    )
}

export default Footer;
