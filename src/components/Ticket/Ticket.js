import * as cs from 'classnames'
import moment from 'moment'

import { Button } from '../../common/Button/Button'

import { ucFirst } from '../../utils/ucFirst'

import s from './Ticket.module.scss'

export const Ticket = ({ className, ticket }) => {
  const ticketStyle = cs({
    [s.ticket]: true,
    [className]: className,
  })
  const datetime = `${ucFirst(
    moment.unix(ticket.date).format('dddd')
  )} ${moment.unix(ticket.date).format('DD.MM.YY')} | ${moment
    .unix(ticket.date)
    .format('HH:mm')}`
  return (
    <div className={ticketStyle}>
      <h3 className={s.datetime}>{datetime}</h3>
      <div className={s.clinic}>
        <p className={s.address}>{ticket.clinic}</p>
        <p className={s.address}>{ticket.address}</p>
      </div>
      <div className={s.footer}>
        <div className={s.doctor}>
          <img src={ticket.photo} alt="" width="60" height="60" />
          <div>
            <span className={s.name}>{ticket.name}</span>
            <span className={s.specialty}>{ticket.specialty}</span>
          </div>
        </div>
        <Button>Отменить</Button>
      </div>
    </div>
  )
}
