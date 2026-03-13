import './PrivateLeasing.css'

const PrivateLeasing = () => {
	return (
		<section className='lease-premium'>
			<div className='lease-wrapper'>
				{/* Фоновый заголовок для глубины */}
				<div className='lease-bg-text'>FREEDOM</div>

				<div className='lease-main-grid'>
					<div className='lease-visual-part'>
						<div className='lease-image-stack'>
							<img
								src='../../../../public/img/hhh.png'
								alt='Lifestyle'
								className='lease-img-main'
							/>
							<div className='lease-floating-price'>
								<span className='price-currency'>₽</span>
								<span className='price-value'>125</span>
								<span className='price-day'>/ день</span>
							</div>
						</div>
					</div>

					<div className='lease-info-part'>
						<header className='lease-header'>
							<p className='lease-category'>Private Lease</p>
							<h2 className='lease-title'>
								Ваш личный <br />
								городской спутник
							</h2>
						</header>

						<div className='lease-feature-list'>
							<div className='lease-feature'>
								<span className='feature-dot'></span>
								<div className='feature-text'>
									<h4>Никаких вложений</h4>
									<p>
										Начните поездку без первоначального взноса. Полная
										прозрачность платежей.
									</p>
								</div>
							</div>
							<div className='lease-feature'>
								<span className='feature-dot'></span>
								<div className='feature-text'>
									<h4>Сервис 24/7</h4>
									<p>
										Мы заменим велосипед в течение 24 часов, если что-то пойдет
										не так.
									</p>
								</div>
							</div>
						</div>

						<div className='lease-cta-group'>
							<p className='lease-small-print'>
								Включает страховку от кражи и ежегодное ТО.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PrivateLeasing
