import s from './Ticket.module.scss'

import user from '../../img/userPhoto.jpg'
import { Button } from '../../common/Button/Button'

export const Ticket = ({ data }) => {
  return (
    <div className={s.ticket}>
      <h3 className={s.datetime}>Понедельник 15.06.20 | 15:30</h3>
      <div className={s.clinic}>
        <p className={s.address}>{'СПБ ГБУЗ "Городская поликлиника №25",'}</p>
        <p className={s.address}>пр. Солидарности, д. 1, к. 1, лит. А</p>
      </div>
      <div className={s.footer}>
        <div className={s.doctor}>
          <img src={user} alt="" width="60" height="60" />
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
