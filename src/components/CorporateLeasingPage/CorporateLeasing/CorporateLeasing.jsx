import './CorporateLeasing.css'

const CorporateLeasing = () => {
	const businessPoints = [
		{
			label: 'Налоговая оптимизация',
			value: 'Вычет НДС 20% и уменьшение налога на прибыль.'
		},
		{
			label: 'Операционная аренда',
			value: 'Внебалансовый учет и сохранение кредитной привлекательности.'
		},
		{
			label: 'Полный сервис',
			value: 'Включенное техническое обслуживание и страхование парка.'
		}
	]

	return (
		<section id='corporate__leasing' className='b2b-leasing'>
			<div className='b2b-container'>
				<div className='b2b-grid'>
					<div className='b2b-content'>
						<header className='b2b-header'>
							<span className='b2b-overline'>B2B Solutions</span>
							<h2 className='b2b-title'>
								Корпоративный лизинг для современных компаний
							</h2>
						</header>

						<div className='b2b-list'>
							{businessPoints.map((point, index) => (
								<div key={index} className='b2b-item'>
									<span className='b2b-index'>0{index + 1}</span>
									<div className='b2b-text'>
										<h4 className='b2b-label'>{point.label}</h4>
										<p className='b2b-value'>{point.value}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='b2b-visual'>
						<div className='b2b-image-wrapper'>
							<img
								src='../../../../public/img/ggg.png'
								alt='Business Office'
								className='b2b-img'
							/>
							<div className='b2b-stats-card'>
								<p className='b2b-stats-title'>Эффективность</p>
								<p className='b2b-stats-num'>-25%</p>
								<p className='b2b-stats-sub'>затрат на логистику</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CorporateLeasing
