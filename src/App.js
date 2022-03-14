import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/4itc_mp1' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
