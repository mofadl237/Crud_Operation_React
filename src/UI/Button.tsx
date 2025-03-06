import React, { ReactNode } from 'react'
interface IProps{
children:ReactNode;
className?:string;
}
const Button = ({children,className}:IProps) => {
  return (
    <button className={`${className} w-full rounded-md p-2`}>{children}</button>
  )
}

export default Button