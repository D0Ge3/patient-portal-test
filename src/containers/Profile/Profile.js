import { Ticket } from '../../components/Ticket/Ticket'

import s from './Profile.module.scss'

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <p>tickesList</p>
        <Ticket />
      </div>
      <div>
        <p>Электронная карта</p>
      </div>
    </div>
  )
}
