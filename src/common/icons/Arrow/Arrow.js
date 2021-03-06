import s from './Arrow.module.scss'

export const Arrow = ({ mode = 'back', onClick, ...rest }) => (
  <div className={s.arrow} onClick={onClick}>
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: mode === 'forward' ? 'rotate(180deg)' : '',
      }}
      {...rest}
    >
      <path
        d="M1.52934 7.00324L7.61312 0.91946C7.82345 0.709107 7.82345 0.368071 7.61312 0.157718C7.40274 -0.0525726 7.06173 -0.0525726 6.85138 0.157718L0.386722 6.62236C0.176431 6.83272 0.176431 7.17375 0.386722 7.38411L6.85138 13.8488C7.06539 14.0554 7.40643 14.0495 7.61312 13.8355C7.81473 13.6267 7.81473 13.2958 7.61312 13.087L1.52934 7.00324Z"
        fill="white"
      />
    </svg>
  </div>
)
