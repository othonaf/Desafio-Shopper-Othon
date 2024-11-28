import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TravelRequest from './components/TravelRequest';
import TravelOptions from './components/TravelOptions';
import TravelHistory from './components/TravelHistory';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<TravelRequest/>} />
        <Route path="/options" element={<TravelOptions/>} />
        <Route path="/history" element={<TravelHistory/>} />
      </Routes>
    </Router>
  );
}

export default App;
