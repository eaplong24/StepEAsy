import { useEffect, useState } from 'react';

const useShoeData = () => {
  const [shoesData, setShoesData] = useState([]);

  
// ------updated API fetching
  // useEffect(() => {
  //   fetch('https://shoes-collections.p.rapidapi.com/shoes', {
  //     headers: {
  //       'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com',
  //       'X-RapidAPI-Key': 'e7731b38a7mshaa11a464dc916acp19f3e2jsnaaf9b81a2f98'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => setShoesData(data))
  //     .catch(error => {
  //       console.log('Error', error);
  //     });
  // }, []);

//  -------- old fetching
    // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://shoes-collections.p.rapidapi.com/shoes', {
  //         headers: {
  //           'X-RapidAPI-Key': '4b5077e521msh0693c94cb4d1983p192ef5jsn7acaf91a5d7a',
  //           'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
  //         }
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setShoesData(data);
  //       } else {
  //         console.log('Request failed with status code:', response.status);
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

// -------local fetchng
  useEffect(() => {
    fetch('http://localhost:8000/shoes')
      .then(res => res.json())
      .then(data => setShoesData(data))
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  return shoesData;
};

export default useShoeData;
