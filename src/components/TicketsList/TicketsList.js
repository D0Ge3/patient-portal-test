import * as cs from 'classnames'
import { Ticket } from '../Ticket/Ticket'

import s from './TicketsList.module.scss'

export const TicketsList = ({ tickets, isHorizontal }) => {
  const listStyle = cs({
    [s.list]: true,
    [s.list_horizontal]: isHorizontal,
  })
  const itemStyle = cs({
    [s.item]: true,
    [s.item_horizontal]: isHorizontal,
  })
  return (
    <div className={listStyle}>
      {tickets.map((ticket) => (
        <Ticket className={itemStyle} key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
