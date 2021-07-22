import React from 'react';
import Footer from './components/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Container } from 'react-bootstrap'

const App = () => {
    return (
      <Container>
        <Router>
            <Footer />
        </Router>
      </Container>
    );
};

export default App;