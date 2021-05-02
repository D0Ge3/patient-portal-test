import * as cs from 'classnames'
import { Link } from 'react-router-dom'
import s from './Menu.module.scss'

export const Menu = ({ className }) => {
  return (
    <div className={cs(s.container, className)}>
      <span>Логотип</span>
      <Link>Профиль</Link>
      <Link>Врачи и клиники</Link>
      <Link>Сообщения</Link>
      <Link>Тестирование</Link>
      <Link>Полезно знать</Link>
    </div>
  )
}
