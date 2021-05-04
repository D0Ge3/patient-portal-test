import * as cs from 'classnames'

import s from './Button.module.scss'

export const Button = ({ className, ...rest }) => {
  return (
    <button className={cs(s.button, className)} {...rest}>
      {rest.children}
    </button>
  )
}
