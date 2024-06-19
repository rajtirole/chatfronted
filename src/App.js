// src/App.js
import React, { useState } from 'react';
import {   Route, Routes } from 'react-router-dom';
import GoogleAuth from './components/GoogleAuth';
import CustomerServiceForm from './components/CustomerServiceForm';
import CustomerServiceRequests from './components/CustomerServiceRequests';

const App = () =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
       <>
        <GoogleAuth isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" exact component={() => <CustomerServiceRequests category="general" />} />
          <Route path="/submit-request" component={CustomerServiceForm} />
          <Route path="/requests/:category" render={(props) => (
            <CustomerServiceRequests category={props.match.params.category} />
          )} />
        </Routes>
        </>
  );
};
export default App

