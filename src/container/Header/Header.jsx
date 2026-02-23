import { useState } from 'react'
import HeaderView from '../../components/PageHome/Header/HeaderView'

function Header() {
	const menuItems = [
		{
			name: 'Электровелосипеды',
			items: [{ label: 'Электровелосипеды', to: '/electric-bikes' }]
		},
		{
			name: 'Городские велосипеды',
			items: [{ label: 'Городские велосипеды', to: '/city-bikes' }]
		},
		{
			name: 'О нас',
			items: [{ label: 'Перейти', to: '/kids-bikes' }]
		},
		{
			name: 'Лизинг',
			items: [
				{ label: 'Корпоративный лизинг', to: '/corporate-leasing' },
				{ label: 'Личный лизинг', to: '/personal-leasing' }
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
