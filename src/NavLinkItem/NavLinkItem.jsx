import { NavLink } from 'react-router-dom'

function NavLinkItem({ to, children, className = 'submenu-link' }) {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) => `${className} ${isActive ? 'active' : ''}`}
			>
				{children}
			</NavLink>
		</li>
	)
}

export default NavLinkItem
