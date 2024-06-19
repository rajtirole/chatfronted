// src/components/CustomerServiceRequests.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerServiceRequests = ({ category }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`/api/requests/${category}`)
      .then(response => {
        setRequests(response.data);
      }).catch(err => {
        console.error(err);
      });
  }, [category]);

  return (
    <div>
      <h1>{category} Requests</h1>
      <ul>
        {requests.map(request => (
          <li key={request.id}>{request.comments}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerServiceRequests;
