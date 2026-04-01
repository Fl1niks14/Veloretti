import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../Auth/AuthContext' // Проверь путь к контексту
import './HeaderView.css'

import NavLinkItem from '../../../NavLinkItem/NavLinkItem'
import logo from './img/image.png'
import velo from './img/velo.png'
import person from './img/3643745-human-man-people-person-profile_113435.png' // Вернул импорт иконки

function HeaderView({ menuItems = [], activeMenu, onMenuClick, onMenuClose }) {
	const [isMobileOpen, setIsMobileOpen] = useState(false)
	const { user, logout } = useAuth() // Подключаем данные пользователя и выход

	return (
		<header>
			<div className='header__container'>
				<div className='navbar'>
					<button
						className='burger'
						onClick={() => setIsMobileOpen(!isMobileOpen)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>

					<div className='nav-left'>
						<Link to='/'>
							<h1 className='logotip'>VELORETTI</h1>
						</Link>

						<nav className={`menu-wrapper ${isMobileOpen ? 'active' : ''}`}>
							<ul className='menu'>
								{menuItems.map((menu, index) => (
									<li
										key={menu.name}
										className='menu-item'
										onMouseEnter={() =>
											window.innerWidth > 768 && onMenuClick(index)
										}
										onMouseLeave={() =>
											window.innerWidth > 768 && onMenuClose()
										}
										onClick={() =>
											window.innerWidth <= 768 &&
											onMenuClick(activeMenu === index ? null : index)
										}
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
															onClick={() => setIsMobileOpen(false)}
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
						<span className='lang'>RU</span>

						{user ? (
							<div className='user-dropdown'>
								{/* Твой баланс теперь выглядит как "тэг" */}
								<div className='bonus-tag'>
									<span className='dot'>●</span>
									{user.bonuses} BNR
								</div>

								<div className='user-control'>
									<Link to='/profile' className='user-profile-trigger'>
										<div className='user-info-text'>
											<span className='user-name'>
												{user.name.toUpperCase()}
											</span>
											<span className='user-status'>MY ACCOUNT</span>
										</div>
										{/* Круглый аватар с первой буквой имени */}
										<div className='user-avatar'>
											{user.name.charAt(0).toUpperCase()}
										</div>
									</Link>

									{/* Кнопка выхода теперь — минималистичная иконка */}
									<button
										onClick={logout}
										className='logout-icon-btn'
										title='Выйти'
									>
										<svg
											width='14'
											height='14'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
											<polyline points='16 17 21 12 16 7'></polyline>
											<line x1='21' y1='12' x2='9' y2='12'></line>
										</svg>
									</button>
								</div>
							</div>
						) : (
							<Link to='/login' className='login-link'>
								<img className='User' src={person} alt='Войти' />
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderView
