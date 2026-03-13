import './AboutCity.css'

const AboutCity = () => {
	return (
		<section className='about-section'>
			<div className='about-container'>
				{/* Левая часть: Текст и история */}
				<div className='about-info'>
					<span className='about-subtitle'>Наша история</span>
					<h2 className='about-title'>Переосмысляя городское движение</h2>

					<div className='about-text-content'>
						<p>
							Veloretti родился в Тольятти с простой миссией: создавать
							велосипеды, которые превращают каждую поездку в эстетическое
							удовольствие. Мы верим, что городской транспорт должен быть не
							только функциональным, но и вдохновляющим.
						</p>
						<p>
							Каждая деталь наших городских моделей спроектирована вручную. Мы
							объединяем классические голландские традиции с современными
							технологиями и чистым скандинавским дизайном.
						</p>
					</div>

					<div className='about-stats'>
						<div className='stat-item'>
							<span className='stat-number'>20к+</span>
							<span className='stat-label'>Счастливых райдеров</span>
						</div>
						<div className='stat-item'>
							<span className='stat-number'>44</span>
							<span className='stat-label'>Городов присутствия</span>
						</div>
					</div>
				</div>

				<div className='about-visual'>
					<div className='about-image-wrapper'>
						<img
							src='../../../../public/img/Aboutus.jpg'
							alt='Мастерская Veloretti'
							className='about-main-img'
						/>
						<div className='about-floating-card'>
							<p>
								"Дизайн — это не просто внешний вид, это то, как это работает в
								ритме города."
							</p>
							<strong>— Команда Veloretti</strong>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutCity
