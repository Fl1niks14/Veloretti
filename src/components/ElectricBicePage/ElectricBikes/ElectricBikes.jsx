import { useState, useEffect } from 'react'
import BikeCard from '../BikeCard/BikeCard'
import OrderModal from '../../OrderModal/OrderModal'
import './ElectricBikes.css'

const ElectricBikes = () => {
	const [bikes, setBikes] = useState([])
	const [loading, setLoading] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [orderData, setOrderData] = useState(null)

	useEffect(() => {
		fetch('http://localhost:3000/bikes')
			.then(res => res.json())
			.then(data => {
				setBikes(data.bikes)
				setLoading(false)
			})
			.catch(err => console.error('Ошибка:', err))
	}, [])

	// Функция открытия модалки
	const openModal = (bike, variant) => {
		setOrderData({ ...bike, selectedVariant: variant })
		setIsModalOpen(true)
	}

	if (loading) {
		return <section className='ebikes-section'></section>
	}

	return (
		<section className='ebikes-section'>
			<div className='eb-container'>
				<h2 className='ebikes-main-title'>Электрическая серия</h2>
				<div className='ebikes-grid'>
					{bikes.map(bike => (
						<BikeCard key={bike.id} bike={bike} onOrder={openModal} />
					))}
				</div>
			</div>

			<OrderModal
				isOpen={isModalOpen}
				bike={orderData}
				onClose={() => setIsModalOpen(false)}
			/>
		</section>
	)
}

export default ElectricBikes
