import * as cs from 'classnames'

import { Arrow } from '../../common/icons/Arrow'

import s from './Calendar.module.scss'

export const Calendar = () => {
  const dateStyle = (isWhite) =>
    cs({
      [s.date]: true,
      [s.date_white]: isWhite,
    })
  return (
    <div className={s.calendar}>
      <div className={s.header}>
        <Arrow mode="back" />
        <span>Июнь, 2020</span>
        <Arrow mode="forward" />
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
        <div className={s.dates}>
          {Array(42)
            .fill(null)
            .map((item, index) => (
              <div key={index} className={dateStyle(index > 0 && index < 32)}>
                <span>{index}</span>
                {index === 10 && (
                  <div className={s.event}>
                    <span>2</span>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
