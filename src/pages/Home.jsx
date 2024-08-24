import React from 'react'
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import LatestPost from '../components/LatestPost';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeAbout/>
      <HomeServices/>
      <LatestPost/>
    </div>
  )
}

export default Home;