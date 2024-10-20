import React from 'react'
import Banner from '../Components/Banner'
import Button from '../Components/layers/Button'
import PageBar from '../Components/PageBar'
import Text from '../Components/layers/Text'

const Home = () => {
  return (
    <div>
      <Banner className='relative'>
        <Text/>

        <Button className='absolute left-8 bottom-[131px] text-[#F9FAFB]' ButtonContent={'Learn More'}/>
      </Banner>

      <PageBar PageName={'Home Page'}/>
    </div>

  
  )
}

export default Home
