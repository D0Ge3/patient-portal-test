import * as cs from 'classnames'
import { Link } from 'react-router-dom'

import s from './MenuItem.module.scss'

export const MenuItem = ({ selected, to, text, icon, onClick, className }) => {
  const itemStyle = cs({
    [s.item]: true,
    [s.item_active]: selected,
    [className]: true,
  })
  const textStyle = cs({
    [s.text]: true,
    [s.text_active]: selected,
  })
  return (
    <Link to={to} className={itemStyle} onClick={onClick}>
      {icon}
      <span className={textStyle}>{text}</span>
    </Link>
  )
}
