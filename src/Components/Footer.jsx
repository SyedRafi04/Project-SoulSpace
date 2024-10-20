import React from 'react'
import logo from '/assets/logo.png'
import FBLogo from '/assets/FBLogo.png'
import IGLogo from '/assets/IGLogo.png'
import YTLogo from '/assets/YTLogo.png'
import Li from './layers/Li'
import Image from './layers/Image'
import Button from './layers/Button'



const scrollToTop = () => {
  window.scrollTo({
    top: 0, 
    behavior: "smooth" // This makes the scroll smooth
  });
};



const Footer = () => {
  return (
    <div className='h-[395px] pt-16'>
      <div className='w-[1312px] bg-[#F8F8F8] mx-auto flex items-center rounded-[32px] gap-[598px] p-16 mb-[10px]'>
        <Image href={'/'} src={logo} alt={logo} />

        <ul className='flex items-center gap-8 whitespace-nowrap'>
          <Li href={'/home'} LiContent={'Home'} />
          <Li href={'/services'} LiContent={'Services'} />
          <Li href={'/faq'} LiContent={'FAQ'} />
          <Li href={'/about'} LiContent={'About Us'} />
          <Li href={'/contact'} LiContent={'Contact Us'} />
        </ul>
      </div>

      <div className='w-[1312px] bg-[#F8F8F8] mx-auto flex px-16 items-center rounded-[32px] py-[20.5px] relative'>
        <div className="Image flex gap-4">
          <Image href={'/facebook'} src={FBLogo} alt={FBLogo} />
          <Image href={'/facebook'} src={IGLogo} alt={IGLogo} />
          <Image href={'/facebook'} src={YTLogo} alt={YTLogo} />
        </div>

        <p className='text-[#6B7280] text-[16px] font-inter ml-[275px]'>© 2024 Pigment Agency. All rights reserved.</p>

        <Button onClick={scrollToTop} className='border-[1px] bg-transparent border-[#3089AB] text-[#15355E] absolute right-16' ButtonContent={'BACK TO TOP'} />
      </div>
    </div>
  )
}

export default Footer
