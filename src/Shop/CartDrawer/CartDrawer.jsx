import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth } from '../../components/Auth/AuthContext'
import {
	toggleCart,
	clearCart,
	updateQuantity,
	removeFromCart
} from '../../Store/CartSlice/CartSlice'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import './CartDrawer.css'

const CartDrawer = () => {
	const dispatch = useDispatch()
	const { items, isOpen } = useSelector(state => state.cart)
	const { user } = useAuth()

	const [isCheckout, setIsCheckout] = useState(false)
	const [useBonuses, setUseBonuses] = useState(false)
	const [orderSuccess, setOrderSuccess] = useState(null)

	// Сброс стейтов при закрытии шторки
	useEffect(() => {
		if (!isOpen) {
			const timer = setTimeout(() => {
				setIsCheckout(false)
				setUseBonuses(false)
				setOrderSuccess(null)
			}, 300)
			return () => clearTimeout(timer)
		}
	}, [isOpen])

	// Расчеты
	const rawPrice = items.reduce(
		(sum, item) => sum + item.price * (item.quantity || 1),
		0
	)
	const maxDiscount = Math.floor(rawPrice * 0.3)
	const bonusesToApply =
		useBonuses && user ? Math.min(user.bonuses, maxDiscount) : 0
	const totalPrice = rawPrice - bonusesToApply

	// Функция, которая вызывается из CheckoutForm при нажатии "Подтвердить"
	const handleFinalSubmit = finalData => {
		setOrderSuccess({
			id: Math.floor(Math.random() * 9000) + 1000,
			spent: finalData.bonusesSpent,
			earned: finalData.cashbackEarned,
			total: finalData.finalPrice
		})
		dispatch(clearCart()) // Очищаем корзину после успеха
	}

	const handleClose = () => dispatch(toggleCart())

	if (!isOpen) return null

	return (
		<div className='cart-overlay is-open' onClick={handleClose}>
			<div className='cart-drawer' onClick={e => e.stopPropagation()}>
				<div className='cart-header'>
					<h2>
						{orderSuccess ? 'УСПЕХ' : isCheckout ? 'ОФОРМЛЕНИЕ' : 'КОРЗИНА'}
					</h2>
					<button className='close-btn' onClick={handleClose}>
						×
					</button>
				</div>

				<div className='cart-content'>
					{orderSuccess ? (
						<div className='order-success-node'>
							<div className='success-circle'>✓</div>
							<h2>ЗАКАЗ ПРИНЯТ</h2>
							<p className='order-id'>НОМЕР ЗАКАЗА: #{orderSuccess.id}</p>
							<div className='order-receipt'>
								<div className='receipt-row'>
									<span>ИТОГО К ОПЛАТЕ:</span>
									<strong>{orderSuccess.total.toLocaleString()} ₽</strong>
								</div>
								<div className='receipt-row'>
									<span className='minus'>БОНУСОВ СПИСАНО:</span>
									<strong className='minus'>-{orderSuccess.spent} BNR</strong>
								</div>
								<div className='receipt-row'>
									<span className='plus'>БОНУСОВ НАЧИСЛЕНО:</span>
									<strong className='plus'>+{orderSuccess.earned} BNR</strong>
								</div>
							</div>
							<p className='success-note'>
								КЕШБЭК УЖЕ ЗАЧИСЛЕН В ВАШ ЛИЧНЫЙ КАБИНЕТ
							</p>
							<button className='checkout-btn' onClick={handleClose}>
								ОТЛИЧНО
							</button>
						</div>
					) : isCheckout ? (
						<CheckoutForm
							totalPrice={totalPrice}
							bonusesToSpend={bonusesToApply}
							onBack={() => setIsCheckout(false)}
							onSubmit={handleFinalSubmit}
						/>
					) : (
						<>
							<div className='items-list'>
								{items.length > 0 ? (
									items.map(item => (
										<div key={item.cartId} className='cart-item'>
											<img src={item.image} alt='' className='item-img' />
											<div className='item-info'>
												<h4>{item.model}</h4>
												<span className='item-price'>
													{(item.price * item.quantity).toLocaleString()} ₽
												</span>
												<div className='quantity-controls'>
													<button
														onClick={() =>
															dispatch(
																updateQuantity({
																	cartId: item.cartId,
																	amount: -1
																})
															)
														}
													>
														-
													</button>
													<span>{item.quantity}</span>
													<button
														onClick={() =>
															dispatch(
																updateQuantity({
																	cartId: item.cartId,
																	amount: 1
																})
															)
														}
													>
														+
													</button>
												</div>
											</div>
											<button
												className='remove-btn'
												onClick={() => dispatch(removeFromCart(item.cartId))}
											>
												✕
											</button>
										</div>
									))
								) : (
									<div className='empty-msg'>Ваша корзина пуста</div>
								)}
							</div>

							{user && items.length > 0 && (
								<div className='bonus-system-block'>
									<p className='bonus-avail'>
										ДОСТУПНО: <strong>{user.bonuses} BNR</strong>
									</p>
									<label className='bonus-check'>
										<input
											type='checkbox'
											checked={useBonuses}
											onChange={() => setUseBonuses(!useBonuses)}
										/>
										<span>ИСПОЛЬЗОВАТЬ БОНУСЫ ДЛЯ СКИДКИ</span>
									</label>
								</div>
							)}
						</>
					)}
				</div>

				{!isCheckout && !orderSuccess && items.length > 0 && (
					<div className='cart-footer'>
						<div className='total-details'>
							<div className='row'>
								<span>Сумма:</span>
								<span>{rawPrice.toLocaleString()} ₽</span>
							</div>
							{useBonuses && (
								<div className='row bonus'>
									<span>Бонусы:</span>
									<span>-{bonusesToApply.toLocaleString()} ₽</span>
								</div>
							)}
							<div className='row final'>
								<span>Итого:</span>
								<strong>{totalPrice.toLocaleString()} ₽</strong>
							</div>
							<p className='cashback-notice'>
								+ ВАМ ВЕРНЕТСЯ {Math.floor(totalPrice * 0.05)} BNR КЕШБЭКА
							</p>
						</div>
						<button
							className='checkout-btn'
							onClick={() => setIsCheckout(true)}
						>
							ОФОРМИТЬ ЗАКАЗ
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default CartDrawer
