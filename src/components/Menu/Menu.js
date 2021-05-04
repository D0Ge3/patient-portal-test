import { useState } from 'react'
import * as cs from 'classnames'

import { MenuItem } from '../MenuItem/MenuItem'
import { HeartIcon } from '../../common/icons/HeartIcon'
import { StethoscopeIcon } from '../../common/icons/StethoscopeIcon'
import { MessagesIcon } from '../../common/icons/MessagesIcon'
import { ToDoIcon } from '../../common/icons/ToDoIcon'
import { BookIcon } from '../../common/icons/BookIcon'
import { HelpIcon } from '../../common/icons/HelpIcon'
import { Button } from '../../common/Button/Button'

import s from './Menu.module.scss'

import logo from '../../img/companyLogo.png'

export const Menu = ({ className }) => {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <div className={cs(s.container, className)}>
      <div>
        <div className={s.header}>
          <span className={s.headerLogo}>Логотип</span>
        </div>
        <div className={s.menu}>
          <MenuItem
            to="/profile"
            text="Профиль"
            selected={selectedItem === 0}
            icon={<HeartIcon active={selectedItem === 0} />}
            onClick={() => setSelectedItem(0)}
            className={s.menuItem}
          />
          <MenuItem
            to="/404"
            text="Врачи и клиники"
            icon={<StethoscopeIcon active={selectedItem === 1} />}
            selected={selectedItem === 1}
            onClick={() => setSelectedItem(1)}
            className={s.menuItem}
          />
          <MenuItem
            to="/404"
            text="Сообщения"
            icon={<MessagesIcon active={selectedItem === 2} />}
            selected={selectedItem === 2}
            onClick={() => setSelectedItem(2)}
            className={s.menuItem}
          />
          <MenuItem
            to="/404"
            text="Тестирование"
            icon={<ToDoIcon active={selectedItem === 3} />}
            selected={selectedItem === 3}
            onClick={() => setSelectedItem(3)}
            className={s.menuItem}
          />
          <MenuItem
            to="/404"
            text="Полезно знать"
            icon={<BookIcon active={selectedItem === 4} />}
            selected={selectedItem === 4}
            onClick={() => setSelectedItem(4)}
            className={s.menuItem}
          />
        </div>
        <Button className={s.button}>Подать заявку</Button>
      </div>
      <div className={s.menuFooter}>
        <MenuItem to="/404" text="Помощь" icon={<HelpIcon />} />
        <img src={logo} alt="Лого" className={s.footerLogo} />
      </div>
    </div>
  )
}
