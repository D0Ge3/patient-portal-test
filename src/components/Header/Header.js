import * as cs from 'classnames'
import s from './Header.module.scss'

export const Header = ({ className }) => {
  return (
    <div className={cs(s.header, className)}>
      <h1>Мой профиль</h1>
    </div>
  )
}
