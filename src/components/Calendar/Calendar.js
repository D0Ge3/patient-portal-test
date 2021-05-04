import 'moment/locale/ru'
import { useState, useEffect } from 'react'
import moment from 'moment'
import * as cs from 'classnames'

import { Arrow } from '../../common/icons/Arrow/Arrow'

import s from './Calendar.module.scss'

export const Calendar = () => {
  const [date, setDate] = useState(moment())

  const dateStyle = (isWhite, isGrey) =>
    cs({
      [s.date]: true,
      [s.date_white]: isWhite,
      [s.date_grey]: isGrey,
    })
  const ucFirst = (str) => {
    if (!str) return str

    return str[0].toUpperCase() + str.slice(1)
  }

  const renderDatesArr = () => {
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
    return days.map((day, index) => (
      <div
        key={day ? day.format('x') : index}
        className={dateStyle(
          day !== null,
          day !== null && moment(day).diff(moment(), 'days') < 0
        )}
      >
        <span className={s.day}>{day ? day.format('D') : null}</span>
        {index === 10 && (
          <div className={s.event}>
            <span>2</span>
          </div>
        )}
      </div>
    ))
  }

  return (
    <div className={s.calendar}>
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
        <div className={s.dates}>{renderDatesArr()}</div>
      </div>
    </div>
  )
}
