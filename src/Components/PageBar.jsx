import React from 'react'
import Container from './layers/Container'

const PageBar = ({PageName}) => {
  return (
    <div className='bg-[#F8F8F8] h-[188px] flex items-center'>
      <Container className='rounded-[32px] bg-white font-bold text-[24px] py-8 pl-8'>
        <p>{PageName}</p>
      </Container>
    </div>
  )
}

export default PageBar
