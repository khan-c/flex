import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import HomePage from './homepage/homepage';
//testing 
import ResultsIndexContainer from '../components/search/results_index_container'; 
import Map from '../components/search/map'; 
import SearchPage from './search/search_page'; 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <ResultsIndexContainer />
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
