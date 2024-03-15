import React, { useContext, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import SnackbarContent from '@mui/material/SnackbarContent';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { 
  FaTwitter,
  FaLinkedIn,
  FaGithub,
  FaInstagram,
  FaCodepen,
  FaGitlab
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from "react-icons/hi";

import { socialData } from "../../data/socialData";
import { contactData } from "../../data/contactData";

function Contact() {
const [open, setOpen] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [success, setSuccess] = useState(false);
const [errorMsg, setErrorMsg] = useState('');

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

const handleContactForm = (e) => {
  e.preventDefault();
  if (name && email && message) {
    if (isEmail(email)) {
      const responseData = { 
        name: name,
        email: email,
        message: message
      };

      axios.post(contactData.sheetAPI, responseData).then
      ((response) => {
        setSuccess(true);
        setErrorMsg('');

        setName('');
        setEmail('');
        setMessage('');
        setOpen(false);
      });
    } else {
      setErrorMsg('Invalid Email');
      setOpen(true);
    }
  } else {
    setErrorMsg('All fields are required');
    setOpen(true);
  }
};

  return (
    <div className='contact' id='contact'>
      <div className='contact--container'>
        <h1>Contact Me</h1>
        <div className='contact-body'>
          <div className="contact--form">
            <form onSubmit={handleContactForm}>
              <div className='input--container'>
                <label htmlFor='Name' className='input-label-name'>Name</label>
                <input
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  name='Name'
                  />
              </div>
              <div className='input--container'>
                <label htmlFor='Message'>Message</label>
                <textarea
                  placeholder='Enter your message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type='text'
                  name='Message'
                  />
              </div>
              <div className='submit-button'>
                <button type='submit'>
                  <p>{!success ? 'Send' : 'Sent'}</p>
                  <div className='submit-icon'>
                    <AiOutlineSend className='send-icon' />
                    <AiOutlineCheckCircle className='sent-icon' />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      X
                    </IconButton>
                  </React.Fragment>
                }
              />
            </Snackbar>
          </div>

          <div className='contact--info'>
            <a 
              href={`mailo:${contactData.email}`}
              className='personal details'
              >
                <FiAtSign />
                <p>{contactData.email}</p>
              </a>
              <a 
                href={`tel:${contactData.phone}`}
                className='personal-details'
                >
                  <FiPhone />
                  <p>{contactData.phone}</p>
                </a>
                <div className='personal-details'>
                  <HiOutlineLocationMarker />
                  <p>{contactData.address}</p>
                </div>
                <div className='personal-details'>
                  {socialData.github && (
                    <a
                      href={socialData.github}
                      target='_blank'
                      rel='noreferrer'
                    >
                        <FaGithub aria-label='GitHub'/>
                    </a>
                  )}
                  <p>Check out my GzitHub</p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;