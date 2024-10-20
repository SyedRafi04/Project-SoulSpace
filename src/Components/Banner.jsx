import React from 'react'
import Banner1 from '/assets/Banner.png'

const Banner = ({className, children}) => {
  return (
    <section className={`w-full h-[535px] bg-cover bg-center ${className}`} style={{backgroundImage: `url(${Banner1})`}}>
      {children}
    </section>
  )
}

export default Banner
