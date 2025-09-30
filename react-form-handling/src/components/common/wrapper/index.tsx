import { type ReactNode } from 'react'
import "../wrapper/style.css"

type CustomWrapperTypes = {
    children: ReactNode;
    className: string;
}

const CustomWrapper = ({children,className}:CustomWrapperTypes) => {
  return (
      <div className={` ${className}`}>
          {children}
    </div>
  )
}

export default CustomWrapper