import './Header.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  const menuList = [
    { title: 'Archive', path: 'archive' },
    { title: 'About Us', path: 'about_us' },
  ]
  return (
    <nav>
      <div className="logo">
        <NavLink to="" key="main">
          Main
        </NavLink>
      </div>
      <ul className="menu">
        {menuList.map((point) => (
          <NavLink to={point.path} key={point.path}>
            {point.title}
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </nav>
  )
}
