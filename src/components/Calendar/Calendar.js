import { useState } from 'react'
import moment from 'moment'
import * as cs from 'classnames'

import { ucFirst } from '../../utils/ucFirst'

import { Arrow } from '../../common/icons/Arrow/Arrow'

import s from './Calendar.module.scss'

export const Calendar = ({ className, tickets }) => {
  const [date, setDate] = useState(moment())
  const calendarStyle = cs({
    [s.calendar]: true,
    [className]: className,
  })
  const dateStyle = (isWhite, isGrey) =>
    cs({
      [s.date]: true,
      [s.date_white]: isWhite,
      [s.date_grey]: isGrey,
    })
  const getTicketsCountByDate = (date) => {
    const inpDate = moment(date).format('DD.MM.YY')
    let count = 0
    tickets.forEach((ticket) => {
      if (moment.unix(ticket.date).format('DD.MM.YY') === inpDate) {
        count++
      }
    })

    return count ? count : null
  }
  const renderDates = () => {
    let days = []
    let startOfMonth = moment(date).startOf('month')
    let endOfMonth = moment(date).endOf('month')

    for (let i = 0; i < +endOfMonth.format('D'); i++) {
      days.push(moment(startOfMonth).add(i, 'd'))
    }

    if (days[0].weekday() !== 0) {
      days = [...Array(days[0].weekday()).fill(null), ...days]
    }
    if (days[days.length - 1].weekday() !== 6) {
      days = [...days, ...Array(6 - days[days.length - 1].weekday()).fill(null)]
    }
    return days.map((day, index) => {
      const countTickets = day ? getTicketsCountByDate(day) : null
      return (
        <div
          key={day ? day.format('x') : index}
          className={dateStyle(
            day !== null,
            day !== null && moment(day).diff(moment(), 'days') < 0
          )}
        >
          <span className={s.day}>{day ? day.format('D') : null}</span>
          {countTickets && (
            <div className={s.event}>
              <span>{countTickets}</span>
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className={calendarStyle}>
      <div className={s.header}>
        <Arrow
          mode="back"
          onClick={() => setDate(moment(date).subtract(1, 'month'))}
        />
        <span>
          {ucFirst(moment(date).format('MMMM'))}, {moment(date).year()}
        </span>
        <Arrow
          mode="forward"
          onClick={() => setDate(moment(date).add(1, 'month'))}
        />
      </div>
      <div className={s.gridWrap}>
        <div className={s.gridLegend}>
          <span>Пн</span>
          <span>Вт</span>
          <span>Ср</span>
          <span>Чт</span>
          <span>Пт</span>
          <span>Сб</span>
          <span>Вс</span>
        </div>
        <div className={s.dates}>{renderDates()}</div>
      </div>
    </div>
  )
}
