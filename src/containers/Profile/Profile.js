import { Ticket } from '../../components/Ticket/Ticket'

import s from './Profile.module.scss'
import { TicketsList } from '../../components/TicketsList/TicketsList'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.tickets}>
        <h3 className={s.title}>Записи на прием</h3>
        <div className={s.listWrap}>
          <TicketsList isHorizontal tickets={[1, 2]} />
          <div className={s.link}>
            <span>Еще 3 записи</span>
            <Link to="/tickets">Подробнее</Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className={s.title}>Электронная карта</h3>
      </div>
    </div>
  )
}
