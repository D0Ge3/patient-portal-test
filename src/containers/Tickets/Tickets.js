import { useHistory } from 'react-router'

import { CustomScrollbars } from '../../common/CustomScrollbars/CustomScrollbars'
import { TicketsList } from '../../components/TicketsList/TicketsList'
import { GoBackIcon } from '../../common/icons/GoBackIcon'
import s from './Tickets.module.scss'
import { Calendar } from '../../components/Calendar/Calendar'

export const Tickets = () => {
  const history = useHistory()
  return (
    <div className={s.tickets}>
      <div className={s.listWrap}>
        <div className={s.title}>
          <GoBackIcon onClick={() => history.goBack()} />
          <h3>Мои записи</h3>
        </div>
        <CustomScrollbars style={{ width: '500px' }}>
          <TicketsList tickets={[1, 2, 3, 4, 5]} />
        </CustomScrollbars>
      </div>
      <Calendar />
    </div>
  )
}
