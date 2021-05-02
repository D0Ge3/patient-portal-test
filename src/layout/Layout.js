import s from './Layout.module.scss'
import { Menu } from '../components/Menu/Menu'
import { Header } from '../components/Header/Header'

export const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Menu className={s.menu} />
      <Header className={s.header} />
      <div className={s.content}>{children}</div>
    </div>
  )
}
