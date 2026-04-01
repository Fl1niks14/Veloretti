import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../../Store/CartSlice/CartSlice'
import './CartButton.css'

const CartButton = () => {
	const dispatch = useDispatch()
	// Достаем и товары, и статус открытия
	const { items, isOpen } = useSelector(state => state.cart)
	const count = items.reduce((acc, item) => acc + (item.quantity || 1), 0)

	return (
		<button
			className={`cart-fixed ${isOpen ? 'is-hidden' : ''}`}
			onClick={() => dispatch(toggleCart())}
		>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
			>
				<path d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z' />
				<path d='M3 6h18M16 10a4 4 0 01-8 0' />
			</svg>

			{count > 0 && (
				<span key={count} className='cart-fixed__badge'>
					{count}
				</span>
			)}
		</button>
	)
}

export default CartButton
