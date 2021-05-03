import * as cs from 'classnames'

import s from './ReportItem.module.scss'

export const ReportItem = ({
  showBorder,
  title,
  showList,
  text,
  textList,
  icon,
  className,
}) => {
  const itemStyle = cs({
    [s.item]: true,
    [s.item_border]: showBorder,
    [className]: className,
  })
  const iconWrapStyle = cs({
    [s.iconWrap]: true,
    [s.iconWrap_blue]: showBorder,
  })
  const titleStyle = cs({
    [s.title]: true,
    [s.title_grey]: !showBorder,
    [s.title_blue]: showBorder,
  })
  return (
    <div className={itemStyle}>
      <div className={iconWrapStyle}>{icon}</div>
      <div className={s.content}>
        <h3 className={titleStyle}>{title}</h3>
        {showList ? (
          <ul className={s.list}>
            {textList.map((t) => (
              <li key={t}>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={s.text}>{text}</p>
        )}
      </div>
    </div>
  )
}
