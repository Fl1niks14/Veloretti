import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../Store/CartSlice/CartSlice'
import CityBikeCard from '../CityBikeCard/CityBikeCard'
import './CityBikes.css'
import './CommonBikes.css'
import gorod3 from '../../../../public/img/gorod3.png'
import gorod4 from '../../../../public/img/gorod4.png'
import gorod2 from '../../../../public/img/gorod2.png'
import gorod1 from '../../../../public/img/gorod1.png'
const MOCK_DATA = [
	{
		id: 1,
		name: 'Berlin Classic',
		price: 45900,
		variants: [
			{
				colorName: 'Desert Moss',
				hex: '#556B2F',
				image: gorod3
			},
			{
				colorName: 'Jet Black',
				hex: '#e9c13f',
				image: gorod4
			}
		]
	},
	{
		id: 2,
		name: 'Amsterdam Deluxe',
		price: 52000,
		variants: [
			{
				colorName: 'Sky Blue',
				hex: '#f0efee',
				image: gorod2
			},
			{
				colorName: 'Dusty Rose',
				hex: '#ffffff',
				image: gorod1
			}
		]
	}
]

const CityBikes = () => {
	const dispatch = useDispatch()

	const [bikes, setBikes] = useState(MOCK_DATA)
	const [loading, setLoading] = useState(false) // Сразу false для тестов

	/* --- РАБОТА С СЕРВЕРОМ (ЗАКОММЕНТИРОВАНО) ---
	useEffect(() => {
		setLoading(true)
		fetch('http://localhost:3000/api/city-bikes')
			.then(res => res.json())
			.then(data => {
				setBikes(data)
				setLoading(false)
			})
			.catch(err => {
				console.error('Ошибка загрузки:', err)
				setLoading(false)
			})
	}, [])
	--------------------------------------------- */

	const handleAddToCart = (bike, variant) => {
		dispatch(
			addToCart({
				bike: {
					id: bike.id,
					name: bike.name,
					price: bike.price
				},
				variant: {
					colorName: variant.colorName,
					image: variant.image
				}
			})
		)
	}

	if (loading) return <div className='skeleton'>Загрузка...</div>

	return (
		<section className='ebikes-section'>
			<div className='eb-container'>
				<h2 className='ebikes-main-title'>Городские велосипеды</h2>
				<div className='ebikes-grid'>
					{bikes.map(bike => (
						<CityBikeCard key={bike.id} bike={bike} onOrder={handleAddToCart} />
					))}
				</div>
			</div>
		</section>
	)
}

export default CityBikes
