import './BikeSpecs.css'

const BikeSpecs = () => {
	return (
		<section className='specs-section'>
			<div className='specs-container'>
				<h2 className='specs-main-title'>Все дело в деталях.</h2>

				<div className='specs-grid'>
					{/* Колонка: Рама */}
					<div className='specs-column'>
						<h3 className='column-title'>Рама</h3>
						<div className='spec-group'>
							<span className='spec-name'>Рама</span>
							<p className='spec-value'>
								Алюминий с порошковым покрытием и встроенным отсеком для
								аккумулятора
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Краска</span>
							<p className='spec-value'>Порошковое покрытие PPG 2K</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Вес</span>
							<p className='spec-value'>Рама 21 кг / Аккумулятор 3 кг</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Рост райдера</span>
							<p className='spec-value'>164 см - 184 см</p>
						</div>
					</div>

					<div className='specs-column'>
						<h3 className='column-title'>Компоненты</h3>
						<div className='spec-group'>
							<span className='spec-name'>Мотор</span>
							<p className='spec-value'>
								Bafang 36v 250W / Датчик крутящего момента с макс. моментом 65
								Нм
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Аккумулятор</span>
							<p className='spec-value'>
								Съемный Smart Battery / 36Vdc 540 Вт·ч / запас хода до 120 км
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Трансмиссия</span>
							<p className='spec-value'>
								Enviolo TR / Pro Stepless Automatic Shifting / Соотношение 310%
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Тормоза</span>
							<p className='spec-value'>
								Гидравлические дисковые тормоза Shimano MT200
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Ремень</span>
							<p className='spec-value'>Gates Carbon Beltdrive / 122T CDN</p>
						</div>
					</div>

					{/* Колонка: Аксессуары */}
					<div className='specs-column'>
						<h3 className='column-title'>Аксессуары</h3>
						<div className='spec-group'>
							<span className='spec-name'>Замок</span>
							<p className='spec-value'>Цепной замок Abus plug-in 140 см</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Передний багажник</span>
							<p className='spec-value'>
								AVS front carrier 450г / Грузоподъемность 10 кг
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Корзина</span>
							<p className='spec-value'>
								Алюминиевая корзина AVS 1.35кг / Грузоподъемность 10 кг
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Освещение</span>
							<p className='spec-value'>
								Передний свет Osram Precision LED / Задний COB Hyperbolic LED
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BikeSpecs
