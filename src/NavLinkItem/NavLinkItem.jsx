import { Link } from 'react-router-dom'

const NavLinkItem = ({ to, children, className }) => {
	return (
		<Link to={to} className={className}>
			{children}
		</Link>
	)
}

export default NavLinkItem
