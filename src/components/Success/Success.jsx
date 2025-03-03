import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Success.css'
const SuccessPage = () => {
	const { id } = useParams() // Получаем `id` из URL
	const [userData, setUserData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/contacts/${id}`)
				if (!response.ok) throw new Error('Ошибка при загрузке данных')

				const data = await response.json()
				setUserData(data)
			} catch (error) {
				console.error('Ошибка:', error)
			}
		}

		fetchData()
	}, [id])

	return (
		<>
			<div className='success-container'>
				<h1>✅ Ваш заказ успешно отправлен!</h1>
				{userData ? (
					<div className='user-data'>
						<p>
							<strong>Имя:</strong> {userData.firstName} {userData.lastName}
						</p>
						<p>
							<strong>Email:</strong> {userData.email}
						</p>
						<p>
							<strong>Телефон:</strong> {userData.phone}
						</p>
						<p>
							<strong>Компания:</strong> {userData.company}
						</p>
						<p>
							<strong>Размер компании:</strong> {userData.companySize}
						</p>
						<p>
							<strong>Количество велосипедов:</strong> {userData.bikes}
						</p>
						<p>
							<strong>Сообщение:</strong> {userData.message}
						</p>
						<Link to='/' className='back-button'>
							Вернуться на главную
						</Link>
					</div>
				) : (
					<p>Загрузка данных...</p>
				)}
			</div>
		</>
	)
}

export default SuccessPage
