import Scrollbars from 'react-custom-scrollbars'

export const CustomScrollbars = ({ style, children, ...rest }) => {
  const trackStyle = {
    backgroundColor: '#EBE7FF',
    height: '100%',
    width: '8px',
    borderRadius: '5px',
    right: 0,
  }
  const thumbStyle = {
    backgroundColor: '#003B72',
    width: '8px',
    borderRadius: '5px',
    right: 0,
  }
  return (
    <Scrollbars
      hideTracksWhenNotNeeded
      style={style}
      {...rest}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            ...trackStyle,
          }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            ...thumbStyle,
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  )
}
