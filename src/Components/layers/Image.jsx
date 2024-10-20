import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({imgClassName, liClassName, src, alt, href}) => {
  return (
    <Link to={href} className={`${liClassName}`}>
      <picture>
        <img src={src} alt={alt} className={`block ${imgClassName}`} />
      </picture>
    </Link>
  )
}

export default Image
