import { Link } from 'react-router-dom'
import './HeaderView.css'
import flag from './img/Frame.png'
import person from './img/3643745-human-man-people-person-profile_113435.png'
import shop from './img/shopping-cart.png'
import logo from './img/photo_2024-12-13_02-02-23.jpg'
import NavLinkItem from '../../../NavLinkItem/NavLinkItem'

function HeaderView({ menuItems = [], activeMenu, onMenuClick, onMenuClose }) {
	return (
		<header>
			<div className='container'>
				<div className='navbar'>
					<div className='nav-left'>
						<div className='logo'>
							<Link to='/'>
								<img className='nav-logo' src={logo} alt='Logo' />
							</Link>
						</div>
						<nav className='menu'>
							<ul className='menu'>
								{menuItems.map((menu, index) => (
									<li key={menu.name} className='menu-item'>
										<button
											className='menu-button'
											onClick={() => onMenuClick(index)}
										>
											{menu.name}
										</button>

										{activeMenu === index && (
											<ul className='submenu' onMouseLeave={onMenuClose}>
												{menu.items.map((item, i) => (
													<li key={i} className='submenu-item'>
														<NavLinkItem to={item.to}>{item.label}</NavLinkItem>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</nav>
					</div>

					<div className='actions'>
						<span>
							EN <img src={flag} alt='Flag' />
						</span>
						<Link to='/profile' aria-label='User profile'>
							<img className='User' src={person} alt='User' />
						</Link>
						<Link to='/cart' aria-label='Shopping cart'>
							<img className='Cart' src={shop} alt='Cart' />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderView
