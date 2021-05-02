import * as cs from 'classnames'
import s from './Header.module.scss'
import { SearchIcon } from '../../common/icons/SearchIcon'
import { BellIcon } from '../../common/icons/BellIcon'
import { EyeIcon } from '../../common/icons/EyeIcon'

import photo from '../../img/userPhoto.jpg'
import { OpenIcon } from '../../common/icons/OpenIcon'

export const Header = ({ className }) => {
  return (
    <div className={cs(s.header, className)}>
      <h1 className={s.title}>Мой профиль</h1>
      <div className={s.menuWrapper}>
        <SearchIcon className={s.icon} />
        <BellIcon className={s.icon} />
        <EyeIcon className={s.icon} />
        <div className={s.userMenu}>
          <div className={s.photo}>
            <img src={photo} alt="" />
          </div>
          <OpenIcon className={s.icon} />
        </div>
      </div>
    </div>
  )
}
