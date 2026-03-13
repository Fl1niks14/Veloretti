// ✅ ПРАВИЛЬНО
import { Link } from 'react-router-dom'

const NavLinkItem = ({ to, children, className }) => {
	return (
		<li className='menu-item-wrapper'>
			<Link to={to} className={className}>
				{children}
			</Link>
		</li>
	)
}

export default NavLinkItem
