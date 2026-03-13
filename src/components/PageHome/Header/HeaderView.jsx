import { Link } from 'react-router-dom'
import './HeaderView.css'
import person from './img/3643745-human-man-people-person-profile_113435.png'
import NavLinkItem from '../../../NavLinkItem/NavLinkItem'
import logo from './img/image.png'
import velo from './img/velo.png'
function HeaderView({ menuItems = [], activeMenu, onMenuClick, onMenuClose }) {
	return (
		<header>
			<div className='header__container'>
				<div className='navbar'>
					<div className='nav-left'>
						<Link to='/'>
							<h1 className='logotip'>VELORETTI</h1>
						</Link>
						<nav className='menu'>
							<ul className='menu'>
								{menuItems.map((menu, index) => (
									<li
										key={menu.name}
										className='menu-item'
										onMouseEnter={() => onMenuClick(index)}
										onMouseLeave={onMenuClose}
									>
										<button className='menu-button'>
											{menu.name}
											<img className='logo' src={logo} alt='' />
										</button>

										{activeMenu === index && (
											<ul className='submenu'>
												{menu.items.map((item, i) => (
													<li key={i} className='submenu-item'>
														<NavLinkItem
															className='submenu-link--special'
															to={item.to}
														>
															{item.label}
														</NavLinkItem>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</nav>
					</div>
					<img className='velo' src={velo} alt='' />
					<div className='actions'>
						<span>RU</span>
						<Link to='/profile' aria-label='Профиль пользователя'>
							<img className='User' src={person} alt='Профиль' />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderView
