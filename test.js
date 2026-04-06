const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDNhM2NmOTc4ZDU0MTUxOTdmNDVmMyIsInJvbGUiOiJ2aWV3ZXIiLCJpYXQiOjE3NzU0Nzc3MjAsImV4cCI6MTc3NTU2NDEyMH0.IDQ3-HWl4n2Qsl0ScxZ9xNJn_jI-EHzW_gtEw7OMU';

axios.get('http://localhost:5000/api/users', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.log('Error:', error.response ? error.response.data : error.message);
});