import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-awesome-reveal';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import Drawer from '@mui/material/Drawer';

import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function NavBar() {
    const { theme, setHandleDrawer } =useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handlDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    }

    const shortName = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1>
                    {shortName(headerData.name)}
                </h1>

                <IoMenuSharp
                    onClick={handlDrawerOpen}
                />
            </div>
            <Drawer 
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                className='drawer'
                disableScrollLock={true}
            >
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                >
                                    <div>
                                        <IoHomeSharp/>
                                        <span>Home</span>
                                    </div>
                                </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                                >
                                    <div>
                                        <FaUser/>
                                        <span>About Me</span>
                                    </div>
                                </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default NavBar;