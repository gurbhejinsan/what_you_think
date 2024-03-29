import { PropsWithChildren } from 'react'
import '../Style/Button.css'
import { IButtonProps } from '../../interface/comman'


const Button = ({children,color="" ,className="",onClick,...props}:PropsWithChildren<IButtonProps>) => {
  return (
    <button className={'hover__btn ' + className} {...props} onClick={onClick}>
    <div>
      <span className={color}>
        <p>{children}</p><p>:)</p>
      </span>
    </div>
    <div>
      <span>
        <p>Thanks</p><p>:D</p>
      </span>
    </div>
  </button>
  )
}

export default Button
