import React from 'react'

const Button = ({onClick, className, ButtonContent}) => {
  return (
    <button onClick={onClick} className={`font-medium text-[18px]  bg-[#15355E] px-8 py-2 rounded-[60px] transition-all duration-300 ${className}`}>
      {ButtonContent}
    </button>
  )
}

export default Button
