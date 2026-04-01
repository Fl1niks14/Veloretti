import { useSelector, useDispatch } from 'react-redux'
import { toggleCart, removeFromCart, clearCart } from './store/cartSlice'

const Shop = () => {
	const { items, isOpen } = useSelector(state => state.cart)
	const dispatch = useDispatch()

	return (
		<>
			<CartDrawer
				isOpen={isOpen}
				cartItems={items}
				onClose={() => dispatch(toggleCart())}
				onRemove={id => dispatch(removeFromCart(id))}
				onSuccess={() => dispatch(clearCart())}
			/>
		</>
	)
}
export default Shop
