import s from './Layout.module.scss'

export const Layout = ({ children }) => {
  return (
    <div>
      <p>Menu</p>
      <p>Header</p>
      <div>{children}</div>
    </div>
  )
}
