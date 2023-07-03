import React from 'react'
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className='features' >
            <div className='card-container'>
                <Link className='card' to="/men">
                    <img src="./img/men.jpg" alt=""/>
                </Link>
                <div className='card'>
                    <img src="./img/women.jpg" alt=""/>
                </div>
                <Link className='card' to='/unisex'>
                    <img src="./img/unisex.jpg" alt=""/>
                </Link>
                <div className='card'>
                    <img src="./img/kids.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Features