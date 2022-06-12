import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaUser } from "react-icons/fa";
import { BsFillCalendarDateFill, BsTabletFill, BsBook } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import "./Tab.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div className='centrado'>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="PERFIL" {...a11yProps(0)} />
                        <Tab label="EDUCACIÓN" {...a11yProps(1)} />
                        <Tab label="NIVEL" {...a11yProps(2)} />
                    </Tabs>
                </div>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h3 className='titulo'>Perfil</h3>
                    </div>
                </div>
                <div className='row topT'>
                    <div className='col-sm-2 centrado borde rsp'>
                        <FaUser className='icono'/>
                    </div>
                    <div className='col-sm-10'>
                        <h5 className='estT1'>Nombre</h5>
                        <h6 className='estT2'>Alex Besozzi</h6>
                    </div>
                </div>
                <div className='row topT'>
                    <div className='col-sm-2 centrado borde rsp'>
                        <BsFillCalendarDateFill className='icono'/>
                    </div>
                    <div className='col-sm-10'>
                        <h5 className='estT1'>Nacimiento</h5>
                        <h6 className='estT2'>12 Oct 2002 - Rosario Colonia</h6>
                    </div>
                </div>
                <div className='row topT'>
                    <div className='col-sm-2 centrado borde rsp'>
                        <BsTabletFill className='icono'/>
                    </div>
                    <div className='col-sm-10'>
                        <h5 className='estT1'>Celular</h5>
                        <h6 className='estT2'>092455260</h6>
                    </div>
                </div>
                <div className='row topT'>
                    <div className='col-sm-2 centrado borde rsp'>
                        <IoIosMail className='icono'/>
                    </div>
                    <div className='col-sm-10'>
                        <h5 className='estT1'>Email</h5>
                        <h6 className='estT2'>alexbesozzi12@gmail.com</h6>
                    </div>
                </div>
                <div className='row topT'>
                    <div className='col-sm-2 centrado borde rsp'>
                        <ImEarth className='icono'/>
                    </div>
                    <div className='col-sm-10'>
                        <h5 className='estT1'>Idiomas</h5>
                        <h6 className='estT2'>Español - Nativo</h6>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div className='row'>
                    <div className='col-sm-12'>
                        <h3 className='titulo'>Educación</h3>
                    </div>
                </div>
                <div className='row topT'>
                    <div className='col-sm-2 centrado borde rsp'>
                        <BsBook className='icono'/>
                    </div>
                    <div className='col-sm-10'>
                        <h5 className='estT1'>Analista Programador</h5>
                        <h6 className='estT2'>CTC, Rosario(2021 - Act)</h6>
                    </div>
                </div>
                <div className='row topT'>
                    <div className='col-sm-2 centrado borde rsp'>
                        <BsBook className='icono'/>
                    </div>
                    <div className='col-sm-10'>
                        <h5 className='estT1'>Bachillerato de Informatica</h5>
                        <h6 className='estT2'>UTU, Colonia del Sacramento(2018 - 2020)</h6>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Coming Son
            </TabPanel>
        </Box>
    );
}
