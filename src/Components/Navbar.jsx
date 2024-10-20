import React from 'react'
import Container from './layers/Container'
import Image from './layers/Image'
import logo from '/assets/logo.png'
import Li from './layers/Li'
import Button from './layers/Button'

const Navbar = () => {
  return (
    <nav>
      <Container className='flex items-center py-8 relative'>
        <Image href={'/'} src={logo} alt={logo}/>

        <ul className='flex items-center gap-8 ml-20'>
            <Li href={'/home'}  LiContent={'Home'}/>
            <Li href={'/services'}  LiContent={'Services'}/>
            <Li href={'/faq'}  LiContent={'FAQ'}/>
            <Li href={'/about'}  LiContent={'About Us'}/>
            <Li href={'/contact'}  LiContent={'Contact Us'}/>
        </ul>

        <Button ButtonContent={'Login'} className='absolute right-0 text-[#F9FAFB]' />

      </Container>
    </nav>
  )
}

export default Navbar
