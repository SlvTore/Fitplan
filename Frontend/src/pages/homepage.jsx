import React from 'react'
import Header from '../../src/components/homepage/header/header'
import Main from '../components/homepage/main/main'
import Section from '../components/homepage/section/section'
import Footer from '../components/homepage/footer/footer'
import Favworkout from '../components/homepage/content/favworkout'


const Homepage = () => {
  return (
    <div>
      <Header/>
	    <Main/>
      <Favworkout/>
	    <Section/>
      <Footer/>
    </div>
  )
}

export default Homepage;