import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const footerStyle = {
  backgroundColor: '#f1f1f1',
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "160px",
  width: "100%",
};

const iconStyle = {
  color: 'dark',
  textDecoration: 'none',
  marginRight: '10px',
};

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={footerStyle}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            size="lg"
            className='m-1'
            href='https://www.facebook.com'  
            role='button'
            style={iconStyle}
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            size="lg"
            className='m-1'
            href='https://twitter.com/'  // Reemplaza con la URL correcta
            role='button'
            style={iconStyle}
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            size="lg"
            className='m-1'
            href='https://www.google.com/'  // Reemplaza con la URL correcta
            role='button'
            style={iconStyle}
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            size="lg"
            className='m-1'
            href='https://www.instagram.com/'  // Reemplaza con la URL correcta
            role='button'
            style={iconStyle}
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            size="lg"
            className='m-1'
            href='https://www.linkedin.com/'  // Reemplaza con la URL correcta
            role='button'
            style={iconStyle}
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            size="lg"
            className='m-1'
            href='https://github.com/'  // Reemplaza con la URL correcta
            role='button'
            style={iconStyle}
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='/quienes-somos'>  {/* Reemplaza con la URL correcta */}
          Quienes Somos
        </a>
      </div>
    </MDBFooter>
  );
}