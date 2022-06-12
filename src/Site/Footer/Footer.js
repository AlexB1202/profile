import React, { useState } from 'react'
import emailjs from "emailjs-com";
import "./Footer.css";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { AiOutlineClose } from "react-icons/ai";

export default function Footer() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_f9e4lei', e.target, 'NeFL4w2HSZ-cY3PrU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                        <form onSubmit={sendEmail}>
                            <div id="contacto" className="row pt-5 mx-auto  centrado">
                                <h1 className='txtCen'>Contacto</h1>
                                <div className="col-8 from-group mdq">
                                    <input type="text" className="form-control" placeholder="Nombre" name="name" />
                                </div>
                                <div className="col-8 from-group pt-2 mdq">
                                    <input type="email" className="form-control" placeholder="Mail" name="email" />
                                </div>
                                <div className="col-8 from-group pt-2 mdq">
                                    <input type="text" className="form-control" placeholder="Asunto" name="subject" />
                                </div>
                                <div className="col-8 from-group pt-2 mdq">
                                    <textarea type="text" className="form-control" id="" cols="30" rows="8" placeholder="Mensaje" name="message"></textarea>
                                </div>
                                <div className="esp col-8 from-group mdq">
                                    <input type="submit" className="btn btn-outline-primary" value="Enviar" onClick={() => {
                                        setOpen(true);
                                    }} />
                                    <div className='Alerta'>
                                        <Box sx={{ width: '100%' }}>
                                            <Collapse in={open}>
                                                <Alert
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            <AiOutlineClose />
                                                        </IconButton>
                                                    }
                                                    sx={{ mb: 2 }}
                                                >
                                                    Mensaje Enviado con Exito!!.
                                                </Alert>
                                            </Collapse>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </div>
        </div >
    )
}
