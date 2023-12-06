import React from 'react';
import Container from 'react-bootstrap/Container';


function Home() {
  return (
    <>
      <Container>
      
        <div className='hero-container flex-column'>
          <div>
            <img src="/images/hero.png" alt="" />
          </div>
          <div className='d-flex w-75 mx-auto inter text-muted'>
          <p>This is an application that was designed and developed by Gael Estrera, Shaira Eunice Aban, Beah Rentuaya, Andrea Tiongco, and Christian Dasalla for the final class project in CSCI 180.05. This application was designed and developed to be used as a Bike Management system for Ateneo de Manila University students and staff.</p>
        </div>
        </div>
        
      </Container>
      
    </>
    
  )
}

export default Home;