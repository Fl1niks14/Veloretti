import React, { useState } from 'react'
import './Header-nav.css'
import image from './img/image.png'
import flag from './img/Frame.png'
import person from './img/3643745-human-man-people-person-profile_113435.png'
import shop from './img/shopping-cart.png'
import logo from './img/photo_2024-12-13_02-02-23.jpg'

function Header() {
	const menuItems = [
		{ name: 'ELECTRIC', items: ['Electric Bikes', 'E-Accessories'] },
		{ name: 'CITY', items: ['City Bikes', 'Urban Gear'] },
		{ name: 'KIDS', items: ['Kids Bikes', 'Kids Accessories'] },
		{ name: 'LEASING', items: ['Corporate Leasing', 'Personal Leasing'] }
	]

	const [activeMenu, setActiveMenu] = useState(null)

	const handleMenuClick = index => {
		setActiveMenu(index === activeMenu ? null : index)
	}

	return (
		<header>
			<div className='container'>
				<div className='navbar'>
					<div className='nav-left'>
						<div className='logo'>
							<img className='nav-logo' src={logo} alt='Logo' />
						</div>
						<nav className='menu'>
							<ul>
								{menuItems.map((menu, index) => (
									<li key={menu.name} className='menu-item'>
										<button
											className='menu-button'
											onClick={() => handleMenuClick(index)}
										>
											{menu.name}
										</button>

										{activeMenu === index && (
											<ul
												className='submenu'
												onMouseLeave={() => setActiveMenu(null)}
											>
												{menu.items.map((item, itemIndex) => (
													<li key={itemIndex} className='submenu-item'>
														<a href='#' className='submenu-link'>
															{item}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
							<div className='menu-link'>
								<a href='#'>Accessories</a>
								<a href='#'>STORES</a>
							</div>
						</nav>
					</div>

					<div className='actions'>
						<span>
							EN <img src={flag} alt='flag' />
						</span>
						<a href='#'>
							<img className='User' src={person} alt='User' />
						</a>
						<a href='#'>
							<img className='Cart' src={shop} alt='Cart' />
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
