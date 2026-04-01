import { useState } from 'react'
import HeaderView from '../../components/PageHome/Header/HeaderView'

function Header() {
	const menuItems = [
		{
			name: 'Электровелосипеды',
			items: [
				{ label: 'Все модели', to: '/еlectric-bikes' },
				{ label: 'Детали', to: '/еlectric-bikes#detail-Electro' }
			]
		},
		{
			name: 'Городские велосипеды',
			items: [
				{ label: 'Классические модели', to: '/city-bikes' },
				{ label: 'Детали', to: '/city-bikes#detail-city' }
			]
		},
		{
			name: 'Для компаний',
			items: [
				{ label: 'Заказать в офис', to: '/service' },
				{ label: 'Бесплатный тест-драйв', to: '/service#test-drive' },
				{ label: 'Хранение зимой', to: '/service#storage' }
			]
		},
		{
			name: 'О проекте',
			items: [{ label: 'Наша история', to: '/about-us' }]
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
