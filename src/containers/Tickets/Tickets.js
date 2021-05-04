import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { Loader } from '../../common/Loader/Loader'
import { CustomScrollbars } from '../../common/CustomScrollbars/CustomScrollbars'
import { TicketsList } from '../../components/TicketsList/TicketsList'
import { GoBackIcon } from '../../common/icons/GoBackIcon'
import { Calendar } from '../../components/Calendar/Calendar'

import { getTickets } from '../../redux/ticketsActions'

import s from './Tickets.module.scss'

export const Tickets = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const isLoading = useSelector((state) => state.tickets.isLoading)

  useEffect(() => {
    !tickets.length && dispatch(getTickets())
    // eslint-disable-next-line
  }, [])
  return (
    <div className={s.tickets}>
      <div className={s.listWrap}>
        <div className={s.title}>
          <GoBackIcon onClick={() => history.goBack()} />
          <h3>Мои записи</h3>
        </div>
        <CustomScrollbars style={{ width: '500px' }}>
          {isLoading ? (
            <Loader style={{ marginLeft: 'calc(50% - 75px)' }} />
          ) : (
            <TicketsList tickets={tickets} />
          )}
        </CustomScrollbars>
      </div>
      <Calendar className={s.calendar} tickets={tickets} />
    </div>
  )
}
