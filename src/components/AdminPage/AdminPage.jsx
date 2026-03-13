import { useEffect, useState } from 'react'
import './AdminPage.css'

const AdminPage = () => {
	const [data, setData] = useState([])
	const [view, setView] = useState('orders') // 'orders' или 'contacts'
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const url = view === 'orders' ? '/api/orders' : '/contacts'
				const response = await fetch(`http://localhost:3000${url}`)
				const result = await response.json()
				setData(result)
			} catch (err) {
				console.error('Ошибка загрузки данных:', err)
				setData([]) // Очищаем данные при ошибке
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [view])

	return (
		<div className='admin-container'>
			<header className='admin-header'>
				<h1>Панель управления</h1>
				<div className='admin-tabs'>
					<button
						className={view === 'orders' ? 'active' : ''}
						onClick={() => setView('orders')}
					>
						🛒 Розничные заказы
					</button>
					<button
						className={view === 'contacts' ? 'active' : ''}
						onClick={() => setView('contacts')}
					>
						💼 Бизнес-заявки
					</button>
				</div>
			</header>

			{loading ? (
				<div className='loading-state'>
					<p>Загрузка данных...</p>
				</div>
			) : (
				<div className='table-wrapper'>
					<table className='admin-table'>
						<thead>
							{view === 'orders' ? (
								<tr>
									<th>ID</th>
									<th>Клиент</th>
									<th>Байк</th>
									<th>Цвет</th>
									<th>Цена</th>
									<th>Доставка</th>
									<th>Дата</th>
									<th>Статус</th>
								</tr>
							) : (
								<tr>
									<th>ID</th>
									<th>Компания</th>
									<th>Имя</th>
									<th>Email</th>
									<th>Сообщение</th>
									<th>Дата</th>
									<th>Статус</th>
								</tr>
							)}
						</thead>
						<tbody>
							{data.length > 0 ? (
								data.map(item => (
									<tr key={item.id || item._id}>
										<td>{item.id || item._id}</td>

										{view === 'orders' ? (
											/* Колонки для РОЗНИЧНЫХ ЗАКАЗОВ */
											<>
												<td>
													<strong>{item.user_name}</strong>
													<br />
													<small>{item.user_phone}</small>
												</td>
												<td>{item.bike_name}</td>
												<td>
													<div
														style={{
															display: 'flex',
															alignItems: 'center',
															gap: '8px'
														}}
													>
														<span
															style={{
																width: '12px',
																height: '12px',
																borderRadius: '50%',
																background: item.bike_color || '#ccc',
																border: '1px solid #ddd'
															}}
														></span>
														{item.bike_color}
													</div>
												</td>
												{/* БЕЗОПАСНЫЙ ВЫВОД ЦЕНЫ */}
												<td>
													{item.price
														? `${item.price.toLocaleString()} ₽`
														: '—'}
												</td>
												<td>{item.delivery_method}</td>
											</>
										) : (
											/* Колонки для БИЗНЕС-ЗАЯВОК */
											<>
												<td>{item.company}</td>
												<td>{item.first_name}</td>
												<td>{item.email}</td>
												<td>{item.message}</td>
											</>
										)}

										{/* Общие колонки для обеих вкладок */}
										<td>
											{item.created_at
												? new Date(item.created_at).toLocaleDateString()
												: '—'}
										</td>
										<td>
											<span className={`status-badge ${item.status || 'new'}`}>
												{item.status || 'Новый'}
											</span>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan={view === 'orders' ? 8 : 7}
										style={{ textAlign: 'center', padding: '40px' }}
									>
										Данные отсутствуют
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

export default AdminPage
