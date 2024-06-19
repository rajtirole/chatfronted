// src/components/CustomerServiceForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CustomerServiceForm = () => {
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/submit-request', { category, comments })
      .then(response => {
        if (response.data.success) {
          alert('Request submitted successfully');
        }
      }).catch(err => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General Queries</option>
          <option value="product-features">Product Features Queries</option>
          <option value="product-pricing">Product Pricing Queries</option>
          <option value="product-implementation">Product Feature Implementation Requests</option>
        </select>
      </div>
      <div>
        <label>Comments:</label>
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerServiceForm;
