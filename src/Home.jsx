import React from 'react'
import Carousel from './components/Carousel'
import TopPicksCollection from './components/TopPicksCollection'
import NewArrivalMen from './components/NewArrivalMen'
import NewArrivalUnisex from './components/NewArrivalUnisex'
import Features from './components/Features'


const Home = () => {
  return (
    <>
    <Carousel />
    <TopPicksCollection />
    < Features/>
    <NewArrivalMen />
    <NewArrivalUnisex />
    </>
  )
}

export default Home