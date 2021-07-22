import React from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
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
            <NavBar />
            <Switch>
                <Route path="/" render={() => <Home/>}/>
            </Switch>
            <Footer />
        </Router>
      </Container>
    );
};

export default App;