import React, { useState } from 'react'
import './CheckoutForm.css'

const SDEK_POINTS = [
	'ПВЗ: ул. Ленина, 10',
	'ПВЗ: пр. Мира, 45, оф. 12',
	'ПВЗ: ул. Пушкина, 5'
]

const CheckoutForm = ({ totalPrice, onBack, onSubmit }) => {
	const [method, setMethod] = useState('КУРЬЕР')
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		address: '',
		pvz: SDEK_POINTS[0]
	})

	// Маска телефона +7 (___) ...
	const handlePhone = e => {
		let val = e.target.value.replace(/\D/g, '')
		let res = ''
		if (val.length > 0) {
			res = '+7 '
			if (val.length > 1) res += '(' + val.substring(1, 4)
			if (val.length >= 5) res += ') ' + val.substring(4, 7)
			if (val.length >= 8) res += '-' + val.substring(7, 9)
			if (val.length >= 10) res += '-' + val.substring(9, 11)
		}
		e.target.value = res.substring(0, 18)
		setFormData({ ...formData, phone: e.target.value })
	}

	const handleConfirm = e => {
		e.preventDefault()
		onSubmit({ ...formData, deliveryMethod: method })
	}

	return (
		<div className='checkout-view'>
			<button className='back-to-cart' onClick={onBack}>
				← Назад в корзину
			</button>
			<h1 className='checkout-main-title'>ОФОРМЛЕНИЕ</h1>

			<form onSubmit={handleConfirm} className='checkout-main-form'>
				{/* Контакты */}
				<div className='form-group'>
					<p className='group-label'>КОНТАКТНЫЕ ДАННЫЕ</p>
					<input
						type='text'
						placeholder='Имя'
						required
						onChange={e => setFormData({ ...formData, name: e.target.value })}
					/>
					<input
						type='tel'
						placeholder='+7 (___) ___-__-__'
						required
						onChange={handlePhone}
					/>
				</div>

				{/* Доставка */}
				<div className='form-group'>
					<p className='group-label'>СПОСОБ ДОСТАВКИ</p>
					<div className='delivery-selector'>
						{['КУРЬЕР', 'СДЭК', 'САМОВЫВОЗ'].map(m => (
							<button
								key={m}
								type='button'
								className={`select-btn ${method === m ? 'active' : ''}`}
								onClick={() => setMethod(m)}
							>
								{m}
							</button>
						))}
					</div>
				</div>

				{/* Адрес */}
				<div className='form-group'>
					<p className='group-label'>
						{method === 'СДЭК' ? 'ПУНКТ ВЫДАЧИ' : 'АДРЕС ДОСТАВКИ'}
					</p>
					{method === 'СДЭК' ? (
						<select
							className='custom-select'
							onChange={e => setFormData({ ...formData, pvz: e.target.value })}
						>
							{SDEK_POINTS.map((p, i) => (
								<option key={i} value={p}>
									{p}
								</option>
							))}
						</select>
					) : (
						<input
							type='text'
							placeholder={
								method === 'САМОВЫВОЗ'
									? 'Шоурум: ул. Велосипедная, 1'
									: 'Город, улица, дом, кв'
							}
							disabled={method === 'САМОВЫВОЗ'}
							onChange={e =>
								setFormData({ ...formData, address: e.target.value })
							}
						/>
					)}
				</div>

				{/* ИТОГИ (КАК НА СКРИНШОТЕ) */}
				<div className='total-summary-card-final'>
					{/* ЛЕВАЯ ЧАСТЬ (Бонусы) */}
					<div className='summary-left'>
						<span className='label-top'>Итого к оплате:</span>
						<div className='cashback-main'>
							<p className='cashback-text'>
								ВАМ
								<br />
								ВЕРНЕТСЯ
							</p>
							<span className='cashback-value'>
								{Math.floor(totalPrice * 0.05)}
							</span>
							<span className='cashback-currency'>BNR</span>
						</div>
					</div>

					{/* ПРАВАЯ ЧАСТЬ (Цена) */}
					<div className='summary-right'>
						<div className='final-price-big'>
							{totalPrice.toLocaleString()} <span>₽</span>
						</div>
					</div>
				</div>

				<button type='submit' className='final-confirm-btn'>
					ПОДТВЕРДИТЬ ЗАКАЗ
				</button>
			</form>
		</div>
	)
}

export default CheckoutForm
