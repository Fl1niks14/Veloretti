import './CityFooterCTA.css'

const CityFooterCTA = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<section className='cta-section light-theme'>
			<div className='cta-container'>
				<div className='cta-content'>
					<span className='cta-tagline'>Начните свое путешествие</span>
					<h2 className='cta-main-title'>
						Готовы изменить <br /> свой маршрут?
					</h2>
					<p className='cta-description'>
						Присоединяйтесь к сообществу райдеров Veloretti. Выберите свою
						идеальную модель и откройте новые горизонты городского стиля.
					</p>

					<div className='cta-actions'>
						<button
							className='cta-btn-primary'
							onClick={() =>
								(window.location.href = '/Veloretti/еlectric-bikes')
							}
						>
							В каталог
						</button>
						<button
							className='cta-btn-secondary'
							onClick={() => (window.location.href = '/')}
						>
							На главную
						</button>
					</div>
				</div>

				<button className='scroll-top-btn' onClick={scrollToTop}>
					Наверх ↑
				</button>
			</div>
		</section>
	)
}

export default CityFooterCTA
