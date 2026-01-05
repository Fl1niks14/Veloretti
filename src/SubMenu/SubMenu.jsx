import NavLinkItem from '../NavLinkItem/NavLinkItem'

function SubMenu({ items }) {
	if (!items) return null

	return (
		<ul className='submenu'>
			{items.map((item, index) => (
				<NavLinkItem key={index} to={item.to}>
					{item.label}
				</NavLinkItem>
			))}
		</ul>
	)
}

export default SubMenu
