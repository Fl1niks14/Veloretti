import React, { useState, useEffect } from 'react'

const CityBikeCard = ({ bike, onOrder }) => {
	const [selectedVariant, setSelectedVariant] = useState(
		bike.variants?.[0] || null
	)
	const [isAnimating, setIsAnimating] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	useEffect(() => {
		if (bike.variants?.length > 0) setSelectedVariant(bike.variants[0])
	}, [bike.variants])

	const handleAddClick = () => {
		onOrder(bike, selectedVariant)
		setIsAnimating(true)
		setIsSuccess(true)
		setTimeout(() => {
			setIsAnimating(false)
			setIsSuccess(false)
		}, 1000)
	}

	if (!selectedVariant) return null

	return (
		<article id='city-catalog' className='bike-card fade-in'>
			<div className='bike-card__visual'>
				<img
					key={selectedVariant.image}
					src={selectedVariant.image}
					alt={bike.name}
					className={`bike-card__img ${isSuccess ? 'pulse' : ''}`}
				/>
			</div>

			<div className='bike-card__info'>
				<span className='bike-card__price'>
					{Number(bike.price).toLocaleString()} ₽
				</span>

				<h3 className='bike-card__title'>{bike.name}</h3>

				<div className='bike-card__selected-color'>
					<strong>{selectedVariant.colorName}</strong>
				</div>

				<div className='bike-card__colors'>
					{bike.variants?.map(v => (
						<button
							key={v.colorName}
							type='button'
							className={`color-btn ${selectedVariant.colorName === v.colorName ? 'is-active' : ''}`}
							style={{ backgroundColor: v.hex }}
							onClick={() => setSelectedVariant(v)}
						/>
					))}
				</div>

				<div
					className='btn-wrapper'
					style={{ position: 'relative', width: '100%' }}
				>
					{isAnimating && <span className='plus-one'>+1</span>}
					<button
						className={`bike-card__buy-btn ${isSuccess ? 'is-success' : ''}`}
						onClick={handleAddClick}
					>
						{isSuccess ? 'Добавленно' : 'В КОРЗИНУ'}
					</button>
				</div>
			</div>
		</article>
	)
}

export default CityBikeCard
