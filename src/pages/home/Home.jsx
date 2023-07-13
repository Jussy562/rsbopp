import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Navbar from '../../components/navbar/Navbar';
import Table from '../../components/table/table';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <header className='shadow-lg'>
        <Navbar />
      </header>
      <section className='py-8 px-5 md:py-12 md:px-10 bg-blue-600'>
        <Container>
          <Row className='justify-content-center'>
            <Col>
              <h1 className='text-white font-bold text-center'>BID OPPORTUNITIES</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='p-5 md:p-10 bg-white'>
        <Container>
          <Row className='gap-4'>
            <Col md='8' className='text-center'>
              <div className='bg-blue-300 h-48 px-10 py-11'>
                <p>Presented here are forthcoming prequalifications or bid opportunities from esteemed corporate members of Rivers State PPA, accompanied by concise description that have been thoughtfully provided. Kindly click on the respective business opportunities to access comprehensive details.</p>
              </div>
            </Col>
            <Col md='4' className='rounded-xl shadow-xl'>
              <div className='flex flex-col h-48'>
                <Button color='primary' className='hover:bg-blue-300 px-3 py-1 shadow-md rounded-t-xl text-blue-800 hover:text-white text-sm mb-1.5 w-full'>
                  Login
                </Button>

                <div className='flex flex-col justify-end items-center p-6 pt-11 bg-blue-800 rounded-b-xl text-white'>
                  <p className='font-bold text-sm text-center'>Contractor Registration</p>
                  <Button color='primary' className='hover:bg-blue-300 px-3 py-1 shadow-md rounded-xl text-blue-800 hover:text-white text-sm mb-1.5 w-full'>
                    Login
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='p-5 md:p-10 bg-white'>
        <Container>
          <Table />
        </Container>
      </section>
      <footer className='p-5 md:p-10 bg-white'>
        <Footer />
      </footer>
      </div>
  );
}

export default Home;