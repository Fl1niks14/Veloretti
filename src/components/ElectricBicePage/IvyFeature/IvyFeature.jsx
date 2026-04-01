import './IvyFeature.css'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../../Store/CartSlice/CartSlice' // проверьте пути

const IvyFeature = () => {
	const dispatch = useDispatch()

	const handleAddToCartAndOpen = () => {
		dispatch(toggleCart())
	}
	return (
		<section className='ivy-section'>
			<div className='ivy-container'>
				<div className='ivy-content'>
					<div className='ivy-text-wrapper'>
						<h2 className='ivy-title'>Veloretti Ivy Two</h2>
						<p className='ivy-description'>
							Электровелосипед, который меняет представление о городских
							поездках. Благодаря сверхлегкой раме и умной системе
							ассистирования, Ivy Two обеспечивает мгновенный подхват и комфорт
							на любом маршруте. Встроенная GPS-навигация, LED-оптика нового
							поколения и система безопасности делают каждую поездку уверенной.
						</p>
						<p className='ivy-extra-info'>
							Доступен для индивидуального заказа и <br />
							<b>тест-драйва в вашем офисе</b>. В комплекте — гарантия 2 года и
							бесплатная сборка.
						</p>
						<div className='ivy-actions'>
							<button
								className='btn btn-primary'
								onClick={handleAddToCartAndOpen}
							>
								В корзину
							</button>
							<button
								className='btn-secondary'
								onClick={() =>
									(window.location.href = '/Veloretti/service#test-drive')
								}
							>
								Заказать тест-драйв
							</button>
						</div>
					</div>
				</div>

				<div className='ivy-image-bg'></div>
			</div>
		</section>
	)
}

export default IvyFeature
