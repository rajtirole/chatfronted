import axios from 'axios';
import React ,{useState,useEffect} from 'react';
const Home = () => {
  const [requests, setRequests] = useState([]);


  useEffect(() => {
    axios.get('/api/requests/general').then(response => {
      setRequests(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Customer Service Requests</h1>
      <ul>
        {requests.map(request => (
          <li key={request.id}>{request.comments}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home