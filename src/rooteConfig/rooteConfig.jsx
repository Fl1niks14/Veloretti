import AdminPage from '../components/AdminPage/AdminPage'
import Reset from '../container/Reset/Reset'
import HomePage from '../container/HomePage'
import Еlectric from '../container/Еlectric-bikes'
import CityBikesPage from '../container/CityBikesPage'
import AboutUs from '../container/About-Us'
import ServicePage from '../container/ServicePage'
import AuthPages from '../container/AuthPages'
import ProfilePage from '../container/ProfilePage'

const routesConfig = [
	{
		path: '/',
		Component: HomePage
	},
	{
		path: '/еlectric-bikes',
		Component: Еlectric
	},
	{
		path: '/city-bikes',
		Component: CityBikesPage
	},
	{
		path: '/about-us',
		Component: AboutUs
	},
	{
		path: '/service',
		Component: ServicePage
	},
	{
		path: '/admin',
		Component: AdminPage
	},
	{
		path: '/login',
		Component: AuthPages
	},
	{
		path: '/profile',
		Component: ProfilePage
	},
	{
		path: '*',
		Component: Reset
	}
]
export default routesConfig
