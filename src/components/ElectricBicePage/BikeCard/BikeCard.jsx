import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../Store/CartSlice/CartSlice'
import './CommonBikes.css'
const BikeCard = ({ bike }) => {
	const dispatch = useDispatch()
	const [selectedVariant, setSelectedVariant] = useState(
		bike?.variants?.[0] || null
	)

	// СОСТОЯНИЯ ДЛЯ АНИМАЦИИ
	const [isSuccess, setIsSuccess] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		if (bike?.variants?.length > 0) {
			setSelectedVariant(bike.variants[0])
		}
	}, [bike])

	const handleAddToCart = () => {
		if (!selectedVariant) return

		// 1. Отправка в Redux
		dispatch(
			addToCart({
				bike: {
					id: bike.id,
					name: `${bike.brand} ${bike.model}`,
					price: bike.price
				},
				variant: {
					colorName: selectedVariant.color_name || selectedVariant.colorName,
					image: selectedVariant.image_url || selectedVariant.image
				}
			})
		)

		// 2. ЗАПУСК АНИМАЦИЙ
		setIsSuccess(true)
		setIsAnimating(true)

		// 3. Сброс состояний через 1.5 секунды
		setTimeout(() => {
			setIsSuccess(false)
			setIsAnimating(false)
		}, 1500)
	}

	if (!bike) return null

	return (
		<div className='bike-card'>
			<div className='bike-card__visual'>
				{selectedVariant && (
					<img
						key={selectedVariant?.id}
						src={selectedVariant?.image_url}
						alt={bike.model}
						// Добавляем класс pulse при успехе
						className={`bike-card__img ${isSuccess ? 'pulse' : ''}`}
					/>
				)}
			</div>

			<div className='bike-card__info'>
				<h3 className='bike-card__title'>
					{bike.brand} {bike.model}
				</h3>
				<p className='bike-card__price'>
					{Number(bike.price).toLocaleString()} ₽
				</p>

				{/* Название текущего цвета */}
				<p className='bike-card__color-name'>
					<strong>
						{selectedVariant?.color_name || selectedVariant?.colorName}
					</strong>
				</p>

				<div className='bike-card__colors'>
					{bike.variants?.map(v => (
						<button
							key={v.id}
							type='button'
							className={`color-btn ${selectedVariant?.id === v.id ? 'is-active' : ''}`}
							style={{ backgroundColor: v.hex_code || v.hex }}
							onClick={() => setSelectedVariant(v)}
						/>
					))}
				</div>

				{/* ОБЕРТКА ДЛЯ КНОПКИ И АНИМАЦИИ +1 */}
				<div
					className='btn-wrapper'
					style={{ position: 'relative', width: '100%' }}
				>
					{isAnimating && <span className='plus-one'>+1</span>}
					<button
						className={`bike-card__buy-btn ${isSuccess ? 'is-success' : ''}`}
						onClick={handleAddToCart}
						disabled={isSuccess}
					>
						{isSuccess ? 'Добавленно ' : 'В КОРЗИНУ'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default BikeCard
