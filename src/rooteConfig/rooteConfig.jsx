import AdminPage from '../components/OrdersPage/OrdersPage'
import Reset from '../container/Reset'
import HomePage from '../container/HomePage'
import Products from '../container/Reset'

const routesConfig = [
	{
		path: '/',
		Component: HomePage
	},
	{
		path: '/products',
		Component: Products
	},
	{
		path: '/admin',
		Component: AdminPage
	},
	,
	{
		path: '*', // для 404
		Component: Reset
	}
]

export default routesConfig
