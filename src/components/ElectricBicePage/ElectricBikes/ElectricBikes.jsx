import { useState, useEffect } from 'react'
import BikeCard from '../BikeCard/BikeCard'
import './ElectricBikes.css'
import black from '../../../../public/img/black.png'
import mintbike from '../../../../public/img/my-bike.png'
import white from '../../../../public/img/white.png'
import mybike from '../../../../public/img/my-bike.png'
// ФЕЙКОВЫЕ ДАННЫЕ (Имитация ответа от http://localhost:3000/api/bikes)
const MOCK_ELECTRIC_BIKES = [
	{
		id: 201,
		brand: 'Veloretti',
		model: 'Electric Ace Two',
		price: 189000,
		variants: [
			{
				id: 'v1',
				color_name: 'Graphite',
				hex_code: '#3d3d3d',
				image_url: black
			},
			{
				id: 'v2',
				color_name: 'Sand',
				hex_code: '#d2b48c',
				image_url: mintbike
			}
		]
	},
	{
		id: 202,
		brand: 'Veloretti',
		model: 'Electric Ivy Two',
		price: 189000,
		variants: [
			{
				id: 'v3',
				color_name: 'Pebble',
				hex_code: '#dcdcdc',
				image_url: white
			},
			{
				id: 'v4',
				color_name: 'Jet Black',
				hex_code: '#1a1a1a',
				image_url: mybike
			}
		]
	}
]

const ElectricBikes = () => {
	// Устанавливаем фейковые данные сразу, чтобы сервер отдыхал
	const [bikes, setBikes] = useState(MOCK_ELECTRIC_BIKES)
	const [loading, setLoading] = useState(false) // Ставим false для тестов

	/* --- СВЯЗЬ С СЕРВЕРОМ ЗАКОММЕНТИРОВАНА ---
	useEffect(() => {
		setLoading(true)
		fetch('http://localhost:3000/api/bikes')
			.then(res => res.json())
			.then(data => {
				setBikes(data)
				setLoading(false)
			})
			.catch(err => {
				console.error('Ошибка:', err)
				setLoading(false)
			})
	}, [])
	------------------------------------------ */

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
				<h2 className='ebikes-main-title'>Электрическая серия</h2>
				<div className='ebikes-grid'>
					{bikes.map(bike => (
						<BikeCard key={bike.id} bike={bike} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ElectricBikes
