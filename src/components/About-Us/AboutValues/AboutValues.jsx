import './AboutValues.css'

const AboutValues = () => {
	const values = [
		{
			id: '01',
			title: 'Эстетика линий',
			desc: 'Мы верим, что велосипед — это продолжение вашей личности. Чистый дизайн без лишних деталей.'
		},
		{
			id: '02',
			title: 'Инженерия комфорта',
			desc: 'Каждая рама проходит 12 этапов тестирования, чтобы обеспечить идеальный накат по брусчатке.'
		},
		{
			id: '03',
			title: 'Устойчивый город',
			desc: 'Создаем транспорт, который служит десятилетиями, сокращая углеродный след каждой поездкой.'
		}
	]

	return (
		<section className='premium-values'>
			<div className='p-container'>
				<div className='p-grid'>
					{values.map(item => (
						<div key={item.id} className='p-card'>
							<span className='p-number'>{item.id}</span>
							<div className='p-content'>
								<h3 className='p-title'>{item.title}</h3>
								<p className='p-desc'>{item.desc}</p>
							</div>
							<div className='p-line'></div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutValues
