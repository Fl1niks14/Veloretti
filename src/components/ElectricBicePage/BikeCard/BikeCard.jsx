import { useState, useEffect } from 'react'
import './BikeCard.css'

const BikeCard = ({ bike, onOrder }) => {
	const [selectedVariant, setSelectedVariant] = useState(
		bike.variants && bike.variants.length > 0 ? bike.variants[0] : null
	)

	useEffect(() => {
		if (bike.variants && bike.variants.length > 0) {
			setSelectedVariant(bike.variants[0])
		}
	}, [bike.variants])

	if (!selectedVariant) return null

	return (
		<article className='bike-card'>
			<div className='bike-card__visual'>
				<img
					key={selectedVariant.image}
					src={selectedVariant.image}
					alt={`${bike.brand} ${bike.model}`}
					className='bike-card__img bike-card__img--fade'
				/>
			</div>

			<div className='bike-card__content'>
				<div className='bike-card__header'>
					<h3 className='bike-card__title'>
						{bike.brand} {bike.model}
					</h3>
					<span className='bike-card__price'>
						{bike.price?.toLocaleString()} ₽
					</span>
				</div>

				<div className='bike-card__footer'>
					<div className='bike-card__colors'>
						{bike.variants.map((v, i) => (
							<button
								key={i}
								className={`color-btn ${
									selectedVariant.colorName === v.colorName ? 'is-active' : ''
								}`}
								style={{ '--color-hex': v.hex }}
								onClick={() => setSelectedVariant(v)}
								title={v.colorName}
							/>
						))}
					</div>

					<button
						className='bike-card__buy-btn'
						onClick={() => onOrder(bike, selectedVariant)}
					>
						Оформить
					</button>
				</div>
			</div>
		</article>
	)
}

export default BikeCard
