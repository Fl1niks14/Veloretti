import './CityFeature.css'

const CityFeature = () => {
	const scrollToCatalog = () => {
		const catalog = document.getElementById('city-catalog')
		if (catalog) {
			catalog.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section className='city-feature-section'>
			<div className='city-feature-container'>
				<div className='city-feature-content'>
					<div className='city-feature-text-wrapper'>
						<h2 className='city-feature-title'>Классика в движении</h2>
						<p className='city-feature-description'>
							Городские велосипеды Veloretti — это воплощение элегантности и
							практичности. Легкая алюминиевая рама, качественные компоненты и
							минималистичный дизайн делают каждую поездку по городу настоящим
							удовольствием.
							<br />
							<br />
							Будь то утренняя поездка за кофе или неспешный вечерний променад
							по набережной, модели Robyn и Caféracer обеспечат идеальный баланс
							стиля и комфорта. Проверенная временем геометрия и внимание к
							деталям создают велосипед, который не просто едет, а дополняет ваш
							образ жизни.
						</p>
						<button className='city-feature-btn' onClick={scrollToCatalog}>
							Узнать больше
						</button>
					</div>
				</div>

				<div className='city-feature-image-bg'></div>
			</div>
		</section>
	)
}

export default CityFeature
