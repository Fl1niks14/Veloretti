import { useState } from 'react'
import HeaderView from '../../components/PageHome/Header/HeaderView'

function Header() {
	const menuItems = [
		{
			name: 'ELECTRIC',
			items: [
				{ label: 'Electric Bikes', to: '/electric-bikes' },
				{ label: 'E-Accessories', to: '/e-accessories' }
			]
		},
		{
			name: 'CITY',
			items: [
				{ label: 'City Bikes', to: '/city-bikes' },
				{ label: 'Urban Gear', to: '/urban-gear' }
			]
		},
		{
			name: 'KIDS',
			items: [
				{ label: 'Kids Bikes', to: '/kids-bikes' },
				{ label: 'Kids Accessories', to: '/kids-accessories' }
			]
		},
		{
			name: 'LEASING',
			items: [
				{ label: 'Corporate Leasing', to: '/corporate-leasing' },
				{ label: 'Personal Leasing', to: '/personal-leasing' }
			]
		}
	]

	const [activeMenu, setActiveMenu] = useState(null)

	const handleMenuClick = index => {
		setActiveMenu(index === activeMenu ? null : index)
	}

	const handleMenuClose = () => setActiveMenu(null)
	return (
		<HeaderView
			menuItems={menuItems}
			activeMenu={activeMenu}
			onMenuClick={handleMenuClick}
			onMenuClose={handleMenuClose}
		/>
	)
}

export default Header
