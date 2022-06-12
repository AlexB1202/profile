import React from 'react';
import Perro from "./perro.png"
import "./Header.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { BsLinkedin } from "react-icons/bs";

function Header() {

    return (
        <>
            <div className='container top'>
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8 centrar'>
                        <div className='imgP'>
                            <img src={Perro} className="logoP" />
                        </div>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8 txtP'>
                        <h1>Alex Besozzi</h1>
                        <h6>Analista Programador</h6>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8 centrado'>
                        <Button className='botones' variant="dark">Curriculum Vitae</Button>
                        <Link to="contacto" smooth={true} duration={500}>
                            <Button to="contacto" className='botones bnt' variant="outline-dark">Enviar Mensaje</Button>
                        </Link>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </div>
        </>
    );
}

export default Header;