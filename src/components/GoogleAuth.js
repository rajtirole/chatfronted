// src/components/GoogleAuth.js
import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const GoogleAuth = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLoginSuccess = (response) => {
    axios.post('/auth/google', { token: response.tokenId })
      .then(() => setIsAuthenticated(true))
      .catch(err => console.error(err));
  };

  const handleLogoutSuccess = () => {
    axios.post('/logout')
      .then(() => setIsAuthenticated(false))
      .catch(err => console.error(err));
  };

  return (
    <div>
      {!isAuthenticated ? (
        <GoogleLogin
          clientId="GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={(response) => console.error(response)}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <GoogleLogout
          clientId="GOOGLE_CLIENT_ID"
          buttonText="Logout"
          onLogoutSuccess={handleLogoutSuccess}
        />
      )}
    </div>
  );
};

export default GoogleAuth;
