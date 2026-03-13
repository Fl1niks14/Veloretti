import React from 'react'
import './BatteryFeature.css'

const BatteryFeature = () => {
	return (
		<section className='battery-section'>
			<div className='battery-container'>
				<div className='battery-content'>
					<h2 className='battery-title'>
						Съемный аккумулятор <br />
						большой емкости
					</h2>
					<p className='battery-text'>
						Заряжайте в любое время и в любом месте. Наша собственная разработка
						— аккумулятор, созданный для долгих поездок. С мощностью 540 Вт·ч и
						впечатляющим запасом хода до 120 км, у вас будет полная свобода
						исследований, не беспокоясь о заряде. А если нужно подзарядиться,
						просто отсоедините наш умный аккумулятор и подключите его к любой
						розетке.
					</p>
				</div>
			</div>
		</section>
	)
}

export default BatteryFeature
