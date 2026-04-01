import { createSlice } from '@reduxjs/toolkit'

const savedCart = JSON.parse(localStorage.getItem('cartItems')) || []

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: savedCart,
		isOpen: false
	},
	reducers: {
		addToCart: (state, action) => {
			const { bike, variant } = action.payload
			if (!bike || !variant) return

			const colorName = variant.colorName || variant.color_name
			const imageUrl = variant.image || variant.image_url
			const modelName = bike.name || bike.model

			const cartId = `${bike.id}-${colorName}`
			const existingItem = state.items.find(item => item.cartId === cartId)

			if (existingItem) {
				existingItem.quantity += 1
			} else {
				state.items.push({
					cartId: cartId,
					id: bike.id,
					model: modelName,
					price: Number(bike.price),
					color: colorName,
					image: imageUrl,
					quantity: 1
				})
			}

			state.isOpen = true
			localStorage.setItem('cartItems', JSON.stringify(state.items))
		},

		removeFromCart: (state, action) => {
			state.items = state.items.filter(item => item.cartId !== action.payload)
			localStorage.setItem('cartItems', JSON.stringify(state.items))
		},

		toggleCart: state => {
			state.isOpen = !state.isOpen
		},

		updateQuantity: (state, action) => {
			const { cartId, amount } = action.payload
			const item = state.items.find(item => item.cartId === cartId)
			if (item) {
				const newQty = item.quantity + amount
				if (newQty >= 1) {
					item.quantity = newQty
					localStorage.setItem('cartItems', JSON.stringify(state.items))
				}
			}
		},

		// ДОБАВЛЯЕМ ЭТОТ РЕДЬЮСЕР
		clearCart: state => {
			state.items = [] // Очищаем массив в стейте
			localStorage.removeItem('cartItems') // Удаляем данные из localStorage
		}
	}
})

// ДОБАВЛЯЕМ clearCart В ЭКСПОРТ
export const {
	addToCart,
	removeFromCart,
	toggleCart,
	updateQuantity,
	clearCart
} = cartSlice.actions

export default cartSlice.reducer
