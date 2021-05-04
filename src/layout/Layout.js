import s from './Layout.module.scss'
import { Menu } from '../components/Menu/Menu'
import { Header } from '../components/Header/Header'
import { Scrollbars } from 'react-custom-scrollbars'

export const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Menu className={s.menu} />
      <Header className={s.header} />
      <div className={s.content}>
        <Scrollbars style={{ minHeight: 'calc(100vh - 55px)' }}>
          {children}
        </Scrollbars>
      </div>
    </div>
  )
}
