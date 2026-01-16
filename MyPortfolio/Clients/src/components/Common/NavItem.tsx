import { Link, useLocation } from 'react-router-dom'

type NavItemProps = {
  to: string
  label: string
}

const NavItem = ({ to, label }: NavItemProps) => {
  const { pathname } = useLocation()
  const isActive = pathname === to

  return (
    <Link
      to={to}
      className={`
        transition-colors
        hover:text-blue-700 dark:hover:text-blue-400
        ${isActive ? 'text-blue-700 dark:text-blue-400 font-semibold' : ''}
      `}
    >
      {label}
    </Link>
  )
}

export default NavItem
