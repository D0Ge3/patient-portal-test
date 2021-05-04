import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TicketsList } from '../../components/TicketsList/TicketsList'

import { ReportItem } from '../../components/ReportItem/ReportItem'
import { MedReport } from '../../common/icons/MedReport'
import { LabIcon } from '../../common/icons/LabIcon'
import { AddIcon } from '../../common/icons/AddIcon'
import { HistoryIcon } from '../../common/icons/HistoryIcon'

import { getTickets } from '../../redux/ticketsActions'

import s from './Profile.module.scss'
import { Loader } from '../../common/Loader/Loader'

export const Profile = () => {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const isLoading = useSelector((state) => state.tickets.isLoading)
  useEffect(() => {
    dispatch(getTickets())
    // eslint-disable-next-line
  }, [])
  return (
    <div className={s.profile}>
      <div className={s.tickets}>
        <h3 className={s.title}>Записи на прием</h3>
        {isLoading ? (
          <Loader style={{ marginLeft: 'calc(50% - 75px)' }} />
        ) : (
          <div className={s.listWrap}>
            <TicketsList
              isHorizontal
              tickets={tickets.length ? [tickets[0], tickets[1]] : []}
            />
            <div className={s.link}>
              <span>Еще {tickets.length - 2} записи</span>
              <Link to="/tickets">Подробнее</Link>
            </div>
          </div>
        )}
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
