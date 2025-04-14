const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/product', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export default fetchData;