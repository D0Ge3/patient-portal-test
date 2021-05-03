import { Link } from 'react-router-dom'
import { TicketsList } from '../../components/TicketsList/TicketsList'

import s from './Profile.module.scss'
import { ReportItem } from '../../components/ReportItem/ReportItem'
import { MedReport } from '../../common/icons/MedReport'
import { LabIcon } from '../../common/icons/LabIcon'
import { AddIcon } from '../../common/icons/AddIcon'
import { HistoryIcon } from '../../common/icons/HistoryIcon'

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.tickets}>
        <h3 className={s.title}>Записи на прием</h3>
        <div className={s.listWrap}>
          <TicketsList isHorizontal tickets={[1, 2]} />
          <div className={s.link}>
            <span>Еще 3 записи</span>
            <Link to="/tickets">Подробнее</Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className={s.title}>Электронная карта</h3>
        <div className={s.cards}>
          <ReportItem
            className={s.card}
            icon={<MedReport active />}
            showBorder
            title={'Информация о пациенте'}
            showList
            textList={[
              'Ваши личные данные',
              'Рекомендации врачей',
              'История болезней',
            ]}
          />
          <ReportItem
            className={s.card}
            title="Результаты анализов"
            text="Вы можете узнать здесь результаты своих анализов"
            icon={<LabIcon />}
          />
          <ReportItem
            className={s.card}
            title="Добавить  информацию"
            text="Добавляйте в свою электронную медицинскую карту новые данные"
            icon={<AddIcon />}
          />
          <ReportItem
            className={s.card}
            title="История приемов"
            text="Вся информация о полученных услугах за все время хранится здесь"
            icon={<HistoryIcon />}
          />
        </div>
      </div>
    </div>
  )
}
