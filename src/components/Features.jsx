import React from 'react'
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className='features' >
            <div className='card-container'>
                <Link className='card' to="/men">
                    <img src="./src/assets/img/men.jpg" alt=""/>
                </Link>
                <div className='card'>
                    <img src="./src/assets/img/women.jpg" alt=""/>
                </div>
                <Link className='card' to='/unisex'>
                    <img src="./src/assets/img/unisex.jpg" alt=""/>
                </Link>
                <div className='card'>
                    <img src="./src/assets/img/kids.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Features