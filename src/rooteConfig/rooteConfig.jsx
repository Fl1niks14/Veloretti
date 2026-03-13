import AdminPage from '../components/AdminPage/AdminPage'
import Reset from '../container/Reset/Reset'
import HomePage from '../container/HomePage'
import Еlectric from '../container/Еlectric-bikes'
import CityBikesPage from '../container/CityBikesPage'
import AboutUs from '../container/About-Us'
import PersonalLeasing from '../container/PersonalLeasingPage'
import CorporateLeasingPage from '../container/CorporateLeasingPage'
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
		path: '/corporate-leasing',
		Component: CorporateLeasingPage
	},
	{
		path: '/personal-leasing',
		Component: PersonalLeasing
	},
	{
		path: '/admin',
		Component: AdminPage
	},
	,
	{
		path: '*',
		Component: Reset
	}
]
export default routesConfig
