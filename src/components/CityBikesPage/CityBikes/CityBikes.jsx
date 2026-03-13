import React, { useState, useEffect } from 'react'
import './CityBikes.css'
import OrderModal from '../../OrderModal/OrderModal'

const CityBikes = () => {
	const [bikes, setBikes] = useState([])
	const [loading, setLoading] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedBike, setSelectedBike] = useState(null)

	useEffect(() => {
		fetch('http://localhost:3000/api/city-bikes')
			.then(res => res.json())
			.then(data => {
				setBikes(data)
				setLoading(false)
			})
			.catch(err => console.error(err))
	}, [])

	const openModal = (bike, variant) => {
		setSelectedBike({ ...bike, selectedVariant: variant })
		setIsModalOpen(true)
	}

	if (loading) {
		return (
			<section className='ebikes-section'>
				<div className='eb-container'>
					<div className='skeleton-title'></div>
					<div className='ebikes-grid'>
						{[1, 2].map(n => (
							<div key={n} className='bike-card skeleton'>
								<div className='skeleton-image'></div>
								<div className='skeleton-info'>
									<div className='skeleton-line short'></div>
									<div className='skeleton-line medium'></div>
									<div className='skeleton-button'></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className='ebikes-section'>
			<div className='eb-container'>
				<h2 className='ebikes-main-title'>Городские велосипеды</h2>
				<div className='ebikes-grid'>
					{bikes.map(bike => (
						<CityBikeCard key={bike.id} bike={bike} onOrder={openModal} />
					))}
				</div>
			</div>

			<OrderModal
				isOpen={isModalOpen}
				bike={selectedBike}
				onClose={() => setIsModalOpen(false)}
			/>
		</section>
	)
}

const CityBikeCard = ({ bike, onOrder }) => {
	const [selectedVariant, setSelectedVariant] = useState(bike.variants[0])

	return (
		<article id='city-catalog' className='bike-card fade-in'>
			<div className='bike-card__visual'>
				<img
					src={selectedVariant.image}
					alt={bike.name}
					className='bike-card__img'
				/>
			</div>

			<div className='bike-card__info'>
				<div className='bike-card__header'>
					<div>
						<p className='bike-card__brand'>Veloretti Город</p>
						<h3 className='bike-card__title'>{bike.name}</h3>
					</div>
					<span className='bike-card__price'>
						{Number(bike.price * 100).toLocaleString()} ₽
					</span>
				</div>
				<div className='bike-card__colors'>
					{bike.variants.map(v => (
						<button
							key={v.colorName}
							className={`color-btn ${selectedVariant.colorName === v.colorName ? 'is-active' : ''}`}
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
					Оформить заказ
				</button>
			</div>
		</article>
	)
}

export default CityBikes
