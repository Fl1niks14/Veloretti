import React, { useState, useRef, useEffect } from 'react'
import './Services.css'

const Services = () => {
	const [booked, setBooked] = useState(false)
	const [formData, setFormData] = useState({
		service: '',
		date: '',
		phone: ''
	})

	const formRef = useRef(null)

	useEffect(() => {
		const hash = window.location.hash
		if (hash) {
			const element = document.querySelector(hash)
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' })
				}, 100)
			}
		}
	}, [])

	const handleSelectPlan = planName => {
		setFormData({ ...formData, service: planName })
		setBooked(false)
		formRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	const handleBooking = e => {
		e.preventDefault()
		setBooked(true)
	}

	return (
		<div className='services-page'>
			{/* --- СЕКЦИЯ: ЗИМНЕЕ ХРАНЕНИЕ --- */}
			<section className='service-section' id='storage'>
				<div className='eb-container'>
					<header className='service-header'>
						<h1 className='ebikes-main-title'>ЗИМНЕЕ ХРАНЕНИЕ</h1>
						<p className='lead-text'>
							Ваш электробайк требует особого ухода в холодное время года. Мы
							обеспечим идеальный климат и техническую поддержку, пока вы
							отдыхаете.
						</p>
					</header>

					<div className='storage-grid'>
						<div className='storage-card'>
							<div className='card-content'>
								<h3>Базовый пакет</h3>
								<p className='card-desc'>
									Для тех, чей байк в отличном состоянии и просто ждет сезона.
								</p>
								<ul className='service-features'>
									<li>Теплый охраняемый бокс</li>
									<li>Поддержание заряда АКБ (50-60%)</li>
									<li>Контроль давления в шинах</li>
								</ul>
								<div className='price-tag'>4 900 ₽</div>
								<button
									className='plan-btn'
									onClick={() => handleSelectPlan('Хранение: Базовый')}
								>
									ВЫБРАТЬ
								</button>
							</div>
						</div>

						<div className='storage-card highlighted'>
							<div className='badge'>РЕКОМЕНДУЕМ</div>
							<div className='card-content'>
								<h3>Премиум сервис</h3>
								<p className='card-desc'>
									Полная подготовка к весне. Вы получаете абсолютно новый байк.
								</p>
								<ul className='service-features'>
									<li>Все услуги Базового пакета</li>
									<li>Полная протяжка узлов и чистка</li>
									<li>Обновление ПО и диагностика мотора</li>
									<li>Бесплатная доставка весной</li>
								</ul>
								<div className='price-tag'>8 500 ₽</div>
								<button
									className='plan-btn black'
									onClick={() => handleSelectPlan('Хранение: Премиум')}
								>
									ЗАБРОНИРОВАТЬ
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- СЕКЦИЯ: ПОЧЕМУ VELORETTI SERVICE --- */}
			<section className='trust-section'>
				<div className='eb-container'>
					<div className='trust-grid'>
						<div className='trust-item'>
							<h4>Сертифицированные мастера</h4>
							<p>
								Наши механики обучаются на заводе в Амстердаме и знают каждую
								деталь вашего электробайка.
							</p>
						</div>
						<div className='trust-item'>
							<h4>Оригинальные запчасти</h4>
							<p>
								Используем только фирменные комплектующие Shimano, Bafang и
								Enviolo.
							</p>
						</div>
						<div className='trust-item'>
							<h4>Гарантия на работы</h4>
							<p>
								Даем 6 месяцев гарантии на все виды проведенных сервисных работ
								и замененные детали.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section
				className='service-section test-drive'
				id='test-drive'
				ref={formRef}
			>
				<div className='eb-container'>
					<div className='service-content-split'>
						<div className='service-info-text'>
							<h2 className='ebikes-main-title left'>
								ЗАПИСАТЬСЯ <br />
								НА СЕРВИС
							</h2>
							<div className='info-blocks'>
								<div className='info-block'>
									<span>Где проходит?</span>
									<p>
										Наш флагманский центр: ул. Велосипедная, 12. Или мы можем
										забрать байк от вашего дома.
									</p>
								</div>
								<div className='info-block'>
									<span>Тест-драйв</span>
									<p>
										Хотите попробовать новую модель? Просто выберите
										«Тест-драйв» в списке услуг.
									</p>
								</div>
							</div>
						</div>

						<div className='form-card-wrapper'>
							<div className='form-card-v2'>
								{booked ? (
									<div className='success-msg animate-in'>
										<div className='check-icon'>✓</div>
										<h3>МЫ ВАС ЖДЕМ!</h3>
										<p>
											Менеджер подтвердит время визита звонком в течение 15
											минут.
										</p>
										<button
											className='reset-btn'
											onClick={() => setBooked(false)}
										>
											ИЗМЕНИТЬ ДАННЫЕ
										</button>
									</div>
								) : (
									<form className='order-form-v2' onSubmit={handleBooking}>
										<div className='input-group'>
											<label>Услуга</label>
											<select
												value={formData.service}
												onChange={e =>
													setFormData({ ...formData, service: e.target.value })
												}
												required
											>
												<option value=''>Выберите из списка</option>
												<option value='test-drive'>
													Тест-драйв Electric Ace/Ivy
												</option>
												<option value='storage-base'>
													Зимнее хранение (Базовый)
												</option>
												<option value='storage-pro'>
													Зимнее хранение (Премиум)
												</option>
												<option value='service-full'>
													Полное техническое обслуживание
												</option>
											</select>
										</div>

										<div className='input-group'>
											<label>Желаемая дата</label>
											<input
												type='date'
												required
												value={formData.date}
												onChange={e =>
													setFormData({ ...formData, date: e.target.value })
												}
											/>
										</div>

										<div className='input-group'>
											<label>Контактный телефон</label>
											<input
												type='tel'
												placeholder='+7 (900) 000-00-00'
												required
												value={formData.phone}
												onChange={e =>
													setFormData({ ...formData, phone: e.target.value })
												}
											/>
										</div>

										<button type='submit' className='submit-btn-v2'>
											ПОДТВЕРДИТЬ ЗАПИСЬ
										</button>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Services
