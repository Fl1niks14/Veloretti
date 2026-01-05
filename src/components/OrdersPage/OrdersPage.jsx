import { useEffect, useState } from 'react'
import './OrdersPage.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const AdminPage = () => {
	const [orders, setOrders] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [updatingId, setUpdatingId] = useState(null)

	// 📦 Загрузка заказов
	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await fetch(`${API_URL}/contacts`)
				if (!response.ok) throw new Error('Ошибка загрузки заказов')
				const data = await response.json()
				setOrders(data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchOrders()
	}, [])

	// 🕓 Состояние загрузки
	if (loading) return <p className='admin-empty'>⏳ Загрузка заказов...</p>

	// ❌ Ошибка
	if (error) return <p className='admin-error'>❌ {error}</p>

	// 🔄 Изменение статуса
	const handleStatusChange = async (orderId, newStatus) => {
		setUpdatingId(orderId)
		try {
			const res = await fetch(`${API_URL}/contacts/${orderId}/status`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ status: newStatus })
			})

			if (!res.ok) throw new Error('Ошибка обновления статуса')

			// Обновляем локально без ожидания данных с сервера
			setOrders(prev =>
				prev.map(o => (o.id === orderId ? { ...o, status: newStatus } : o))
			)
		} catch (err) {
			alert(err.message)
		} finally {
			setUpdatingId(null)
		}
	}

	// 📋 Разметка
	return (
		<div className='admin-container'>
			<h1>📋 Все заказы</h1>

			{orders.length === 0 ? (
				<p className='admin-empty'>Заказов пока нет</p>
			) : (
				<table className='admin-table'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Имя</th>
							<th>Email</th>
							<th>Телефон</th>
							<th>Компания</th>
							<th>Размер</th>
							<th>Велосипеды</th>
							<th>Сообщение</th>
							<th>Дата</th>
							<th>Статус</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => (
							<tr key={order.id}>
								<td>{order.id}</td>
								<td>
									{order.first_name} {order.last_name}
								</td>
								<td>{order.email}</td>
								<td>{order.phone}</td>
								<td>{order.company || '—'}</td>
								<td>{order.company_size || '—'}</td>
								<td>{order.bikes || '—'}</td>
								<td>{order.message || '—'}</td>
								<td>
									{order.created_at
										? new Date(order.created_at).toLocaleString()
										: '—'}
								</td>
								<td>
									<select
										value={order.status}
										disabled={updatingId === order.id}
										onChange={e => handleStatusChange(order.id, e.target.value)}
									>
										<option value='new'>new</option>
										<option value='in_progress'>in_progress</option>
										<option value='done'>done</option>
									</select>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default AdminPage
