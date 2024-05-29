import axios from 'axios';

// Function to fetch data from your API
async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3000/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export { fetchData };