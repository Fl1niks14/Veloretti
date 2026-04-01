import React, { useState } from 'react'
import './OfficeOrder.css'

const OfficeOrder = () => {
	const [sent, setSent] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setSent(true)
	}

	return (
		<section className='corporate-page' id='order'>
			<div className='eb-container'>
				<header className='corporate-header'>
					<h1 className='ebikes-main-title'>VELORETTI ДЛЯ БИЗНЕСА</h1>
					<p className='lead-text'>
						Экологичный транспорт для вашей команды. Повышайте лояльность
						сотрудников и сокращайте углеродный след компании.
					</p>
				</header>

				<div className='corporate-grid'>
					<div className='info-side'>
						<div className='benefit-item'>
							<h3>Корпоративный стиль</h3>
							<p>
								Мы нанесем логотип вашей компании на раму и подберем аксессуары
								в фирменных цветах. Ваш бренд будет заметен на улицах города.
							</p>
						</div>

						<div className='benefit-item'>
							<h3>HR-бренд и здоровье</h3>
							<p>
								Сотрудники, выбирающие велосипед, на 15% продуктивнее и реже
								берут больничные. Сделайте путь до офиса приятным фитнесом.
							</p>
						</div>

						<div className='benefit-item'>
							<h3>Нулевой углеродный след</h3>
							<p>
								Внедрение велосипедов в корпоративную культуру — это реальный
								вклад в экологию. Снижайте уровень шума и выбросов CO2 в вашем
								городе вместе с нами.
							</p>
						</div>

						<div className='benefit-item'>
							<h3>Выездное обслуживание</h3>
							<p>
								Вам не нужно никуда ехать. Наши механики проводят плановое ТО и
								настройку всей техники прямо на территории вашего офиса или
								склада.
							</p>
						</div>

						<ul className='feature-tags'>
							<li>#ЗеленыйОфис</li>
							<li>#ESG</li>
							<li>#КорпоративныйСпорт</li>
							<li>#Экономия</li>
						</ul>
					</div>

					<div className='form-side'>
						<div className='form-card'>
							{sent ? (
								<div className='success-msg animate-in'>
									<div className='check-icon'>✓</div>
									<h3>Заявка получена</h3>
									<p>
										Наш корпоративный менеджер подготовит PDF-презентацию и
										расчет стоимости в течение пары часов.
									</p>
									<button className='reset-btn' onClick={() => setSent(false)}>
										Отправить еще один запрос
									</button>
								</div>
							) : (
								<form className='order-form' onSubmit={handleSubmit}>
									<div className='form-header'>
										<h3>Запрос предложения</h3>
										<p>Заполните форму, и мы свяжемся с вами</p>
									</div>
									<div className='form-grid'>
										<div className='input-group'>
											<label>Компания</label>
											<input
												type='text'
												name='company'
												placeholder='ООО "Велореtti"'
												required
											/>
										</div>
										<div className='input-group'>
											<label>Контактный Email</label>
											<input
												type='email'
												name='email'
												placeholder='manager@company.com'
												required
											/>
										</div>
										<div className='input-group'>
											<label>Ваш запрос</label>
											<textarea
												name='message'
												placeholder='Например: Нам нужно 10 электровелосипедов Ace для курьерского отдела.'
												rows='4'
											></textarea>
										</div>
									</div>
									<button type='submit' className='submit-btn'>
										УЗНАТЬ УСЛОВИЯ
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OfficeOrder
