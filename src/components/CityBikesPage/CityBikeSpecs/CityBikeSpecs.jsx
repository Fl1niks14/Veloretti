import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CityBikeSpecs = () => {
	const { hash } = useLocation()

	useEffect(() => {
		if (hash) {
			const element = document.getElementById(hash.replace('#', ''))
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' })
				}, 100)
			}
		}
	}, [hash])

	return (
		<section id='detail-city' className='specs-section'>
			<div className='specs-container'>
				<h2 className='specs-main-title'>Технические характеристики.</h2>

				<div className='specs-grid'>
					{/* Колонка: Рама и Дизайн */}
					<div className='specs-column'>
						<h3 className='column-title'>Рама и кузов</h3>
						<div className='spec-group'>
							<span className='spec-name'>Материал рамы</span>
							<p className='spec-value'>
								Облегченный алюминий 6061 с антикоррозийным покрытием
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Покрытие</span>
							<p className='spec-value'>
								Трехслойная порошковая краска с защитой от царапин
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Вес</span>
							<p className='spec-value'>Всего 13 кг (без аксессуаров)</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Рост райдера</span>
							<p className='spec-value'>155 см — 190 см (зависит от модели)</p>
						</div>
					</div>

					{/* Колонка: Трансмиссия и Тормоза */}
					<div className='specs-column'>
						<h3 className='column-title'>Механика</h3>
						<div className='spec-group'>
							<span className='spec-name'>Втулка</span>
							<p className='spec-value'>
								Shimano Nexus 3-speed / Планетарная система переключения
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Тормозная система</span>
							<p className='spec-value'>
								Передний ободной (V-brake) и классический ножной тормоз
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Цепь</span>
							<p className='spec-value'>
								KMC Anti-rust (нержавеющая сталь) с защитным кожухом
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Седло и ручки</span>
							<p className='spec-value'>
								Эко-кожа премиум-класса с эргономичной поддержкой
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Шины</span>
							<p className='spec-value'>
								CST Classic 28" с защитой от проколов
							</p>
						</div>
					</div>

					{/* Колонка: Детали */}
					<div className='specs-column'>
						<h3 className='column-title'>Комплектация</h3>
						<div className='spec-group'>
							<span className='spec-name'>Крылья</span>
							<p className='spec-value'>
								Полноразмерные алюминиевые крылья в цвет рамы
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Подножка</span>
							<p className='spec-value'>
								Центральная односторонняя подножка (алюминий)
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Звонок</span>
							<p className='spec-value'>
								Классический алюминиевый звонок Veloretti
							</p>
						</div>
						<div className='spec-group'>
							<span className='spec-name'>Педали</span>
							<p className='spec-value'>
								Алюминиевые платформенные педали с противоскользящим покрытием
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CityBikeSpecs
