import './FooterView.css'
import fac from './img/SVG.png'
import inst from './img/SVG2.png'
import Youtube from './img/SVG3.png'
import int from './img/SVG4.png'
import tictoc from './img/Vector5.png'
import NavLinkItem from '../../../NavLinkItem/NavLinkItem'

function FooterView({ email, setEmail, handleSubmit, subscribed }) {
	return (
		<>
			<div className='footer-container'>
				<footer className='footer'>
					<div className='footer-links'>
						<div className='footer-column'>
							<ul>
								<h4>Интересно</h4>
								<NavLinkItem to='/electric-bikes'>
									Электровелосипеды
								</NavLinkItem>
								<NavLinkItem to='/city-bikes'>
									<p>Городские велосипеды</p>
								</NavLinkItem>
								<NavLinkItem to='/kids-bikes'>Детские велосипеды</NavLinkItem>
							</ul>

							<ul>
								<h4>О нас</h4>
								<NavLinkItem to='/about'>О компании</NavLinkItem>
								<NavLinkItem to='/journal'>Журнал</NavLinkItem>
								<NavLinkItem to='/reviews'>Отзывы</NavLinkItem>
								<NavLinkItem to='/press'>Пресса</NavLinkItem>
								<NavLinkItem to='/jobs'>Вакансии</NavLinkItem>
							</ul>
							<ul>
								<h4>Помощь</h4>
								<NavLinkItem to='/#'>Контакты</NavLinkItem>
								<NavLinkItem to='/faq'>Вопросы и ответы</NavLinkItem>
								<NavLinkItem to='/delivery'>Доставка</NavLinkItem>
								<NavLinkItem to='/manuals'>Сборка и инструкции</NavLinkItem>
								<NavLinkItem to='/privacy-policy'>
									Политика конфиденциальности
								</NavLinkItem>
								<NavLinkItem to='/terms'>Условия использования</NavLinkItem>
							</ul>
						</div>
						<div className='email-container'>
							<h1 className='headline'>Присоединяйтесь.</h1>

							{subscribed ? (
								<p className='success-message'>Спасибо за подписку 🚴‍♂️</p>
							) : (
								<form className='email-form' onSubmit={handleSubmit}>
									<input
										type='email'
										placeholder='Введите ваш email'
										className='email-input'
										value={email}
										onChange={e => setEmail(e.target.value)}
										required
									/>
									<button type='submit' className='subscribe-button'>
										Подписаться
									</button>
								</form>
							)}

							<label className='checkbox-container'>
								<input type='checkbox' required />
								Регистрируясь, я соглашаюсь с
								<NavLinkItem to='/privacy-policy' className='privacy-policy'>
									политикой конфиденциальности
								</NavLinkItem>
								Veloretti.
							</label>
							<div className='social-icons'>
								<a href='https://facebook.com'>
									<img src={fac} alt='facebook' />
								</a>
								<a href='https://instagram.com'>
									<img src={inst} alt='instagram' />
								</a>
								<a href='https://youtube.com'>
									<img src={Youtube} alt='Youtube' />
								</a>
								<a href='https://linkedin.com'>
									<img src={int} alt='linkedin' />
								</a>
								<a href='https://tiktok.com'>
									<img src={tictoc} alt='tiktok' />
								</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}

export default FooterView
