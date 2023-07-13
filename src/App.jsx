import React from 'react';
import { Container } from 'reactstrap';
import Home from './pages/home/Home';
import './App.css';
import '../src/components/table/table.css';
import './pages/home/home.css';

function App() {
  return (
    <Container fluid className='app'>
      <Home />
    </Container>
  );
}

export default App;