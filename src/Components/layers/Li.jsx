import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({href, LiContent, className}) => {
  return (
    <Link to={href}>
      <li className={`font-roboto text-[18px] font-normal text-[#1F2A37] hover:text-black transition-all duration-300 ${className}`}>
        {LiContent}
      </li>
    </Link>
  )
}

export default Li
