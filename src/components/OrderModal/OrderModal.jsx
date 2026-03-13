import React, { useEffect } from 'react'
import './OrderModal.css'

const OrderModal = ({ isOpen, bike, onClose }) => {
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'unset'
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	if (!isOpen || !bike) return null

	const handleSubmit = async e => {
		e.preventDefault()
		const formData = new FormData(e.target)

		const payload = {
			userName: formData.get('userName'),
			email: formData.get('userEmail'),
			phone: formData.get('userPhone'),
			bikeName: bike.name || bike.model,
			bikeColor: bike.selectedVariant?.colorName,
			price: bike.price,
			delivery: formData.get('delivery')
		}

		try {
			const res = await fetch('http://localhost:3000/api/orders', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			})
			if (res.ok) {
				alert('✅ Заказ оформлен!')
				onClose()
			}
		} catch (err) {
			alert('❌ Ошибка связи с сервером')
		}
	}

	return (
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={e => e.stopPropagation()}>
				<button className='modal-close' onClick={onClose}>
					&times;
				</button>

				<div className='modal-container'>
					<div className='modal-visual'>
						<img
							src={bike.selectedVariant?.image}
							alt={bike.name}
							className='modal-bike-img'
						/>
					</div>

					<div className='modal-form-container'>
						<span className='modal-brand'>Specialized</span>
						<h2 className='modal-title'>{bike.name || bike.model}</h2>
						<p className='modal-variant'>
							{bike.selectedVariant?.colorName || 'Стандартная комплектация'}
						</p>

						<form onSubmit={handleSubmit}>
							<div className='input-group'>
								<label>Ваше имя</label>
								<input
									name='userName'
									type='text'
									placeholder='Иван Иванов'
									required
								/>
							</div>

							<div className='input-group'>
								<label>Телефон</label>
								<input
									name='userPhone'
									type='tel'
									placeholder='+7 (___) ___-__-__'
									required
								/>
							</div>

							<div className='input-group'>
								<label>Электронная почта</label>
								<input
									name='userEmail'
									type='email'
									placeholder='Veloretti.com'
									required
								/>
							</div>

							<div className='input-group'>
								<label>Способ доставки</label>
								<select name='delivery' className='modal-select'>
									<option value='Курьер'>Доставка курьером</option>
									<option value='Самовывоз'>Самовывоз из магазина</option>
								</select>
							</div>

							<div className='modal-price-box'>
								<span className='modal-price'>
									{bike.price?.toLocaleString() || '0'} ₽
								</span>
							</div>

							<button type='submit' className='modal-submit-btn'>
								Оформить заказ
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderModal
