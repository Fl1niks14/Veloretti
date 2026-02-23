import './mainwb.css'
import text from './img-main/HeroSection.png'
import textbaik from './img-main/photo_2024-12-13_18-00-18.jpg'
import textvelo from './img-main/photo_2024-12-13_22-20-33.jpg'
import piplevelo from './img-main/div.sizing-small.png'

const Main = () => {
	return (
		<main>
			<section>
				<article></article>
				<article>
					<div className='peple-content'>
						<div className='photo-peple'></div>
						<div className='text-people'>
							<h1 className='text-top'>
								Пересадите свою команду на будущее. Сегодня.
							</h1>
							<p className='hero-description'>
								Veloretti Business — это не просто транспорт. Это экологичная
								альтернатива служебным автомобилям, которая повышает
								продуктивность и снижает углеродный след вашей компании.
							</p>

							<div className='benefits-section'>
								<h3>Преимущества:</h3>
								<ul className='benefits-list'>
									<li>
										<strong>0% налогов:</strong> Программа лизинга позволяет
										списывать расходы на велосипеды из налогооблагаемой базы.
									</li>
									<li>
										<strong>Здоровье команды:</strong> Сотрудники, выбирающие
										велосипед, на 15% реже берут больничные и работают
										эффективнее.
									</li>
									<li>
										<strong>Стиль и бренд:</strong> Минималистичный дизайн
										Veloretti подчеркнет современный статус вашего бренда.
									</li>
								</ul>
							</div>

							<button className='btn-primary'>Узнать условия лизинга</button>
						</div>
					</div>
				</article>
				<article>
					<div className='peple-article-photo'>
						<div className='container'>
							<div className='text-article'>
								<h1>
									Сервис,
									<br />
									обслуживание и <br />
									страхование
								</h1>
								<h2>
									Лизинг включает в себя полный пакет услуг. <br />
									В течение всех 36 месяцев вы <br />
									полностью застрахованы от повреждений, кражи и <br />
									износа. Кроме того, у вас всегда есть <br />
									доступ к помощи на дорогах.
								</h2>
							</div>
						</div>
					</div>
				</article>
				<article>
					<div className='peple-content'>
						<div className='photo-backgraund'></div>
						<div className='text-peple'>
							<div className='business-text'>
								<h1>Плата для работодателей</h1>
								<p className='lead'>
									Велосипедная программа полностью независима от налоговых
									вычетов и бесплатна для вас как для работодателя.
								</p>
								<p>
									Сотрудник сам оплачивает стоимость лизинга, а вы решаете,
									хотите ли вы участвовать в расходах. Это позволяет внедрить
									систему мобильности без нагрузки на бюджет компании.
								</p>
								<div className='price-example'>
									<h3>Пример стоимости</h3>
									<p>
										Инвестиция в здоровье и продуктивность вашей команды от 60 €
										в месяц.
									</p>
								</div>
								<button className='btn-dark'>Узнать больше о лизинге</button>
							</div>
						</div>
					</div>
				</article>
				<article>
					<div className='peple-content-f container'>
						<div className='text-content'>
							<h2 className='section-title'>КАК ЭТО РАБОТАЕТ</h2>

							<dl className='steps-list'>
								<div className='step'>
									<dt>Зарегистрируйте компанию</dt>
									<dd>
										Заполните форму регистрации, указав данные вашей компании
										для создания корпоративного аккаунта.
									</dd>
								</div>

								<div className='step'>
									<dt>Определите требования</dt>
									<dd>
										Вы получите доступ к персональной цифровой платформе для
										управления парком и выбора моделей.
									</dd>
								</div>

								<div className='step'>
									<dt>Пора кататься!</dt>
									<dd>
										Ваши сотрудники выбирают велосипеды, а мы доставляем их
										полностью собранными прямо к ним домой.
									</dd>
								</div>

								<div className='step'>
									<dt>Администрирование</dt>
									<dd>
										Цифровая платформа предоставляет удобный обзор всей
										информации для начисления заработной платы.
									</dd>
								</div>
							</dl>
						</div>

						<div className='peplevelo'>
							<img className='peplevelo-1' src={piplevelo} alt='велосипедист' />
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}

export default Main
