import * as cs from 'classnames'
import user from '../../img/userPhoto.jpg'
import { Button } from '../../common/Button/Button'

import s from './Ticket.module.scss'

export const Ticket = ({ data, className, ind }) => {
  const ticketStyle = cs({
    [s.ticket]: true,
    [className]: className,
  })
  return (
    <div className={ticketStyle}>
      <h3 className={s.datetime}>Понедельник 15.06.20 | 15:30</h3>
      <div className={s.clinic}>
        <p className={s.address}>{'СПБ ГБУЗ "Городская поликлиника №25",'}</p>
        <p className={s.address}>пр. Солидарности, д. 1, к. 1, лит. А</p>
      </div>
      <div className={s.footer}>
        <div className={s.doctor}>
          <img
            src={`https://thispersondoesnotexist.com/image?v=${ind}`}
            alt=""
            width="60"
            height="60"
          />
          <div>
            <span className={s.name}>Малушко Т. Н.</span>
            <span className={s.specialty}>Хирургия</span>
          </div>
        </div>
        <Button>Отменить</Button>
      </div>
    </div>
  )
}
