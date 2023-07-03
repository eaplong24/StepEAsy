import React from 'react';
import useShoeData from './useShoeData';

const ShoeCollection = () => {
  const shoesData = useShoeData();

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

  return (
    <div className='shoeCollection'>
      <h1>Shoes Collection</h1>
      <div className='row d-flex'>
        {shoesData.map((shoe, index) => (
          <div className='col-4' key={index}>
            <img src={shoe.image} alt={shoe.name} />
            <span>{shoe.name}</span>
          </div>
        ))}
      </div>
    </div>
    // <div className='shoeCollection'>
    //   <h1>Shoes Collection</h1>
    //   <div>
    //     <div className='row d-flex'>
    //       {shoesData.map((shoe, index) => (
    //         <div className='col-4' key={index}>
    //           <img src={shoe.image} alt={shoe.name} />
    //           <span>{shoe.name}</span>
    //         </div>
    //       ))}
    //     </div>
    //     {/* {shoesData.length > 0 && <TopPicksCollection shoesData={shoesData} />} */}
    //   </div>
    // </div>
    );
};

export default ShoeCollection;