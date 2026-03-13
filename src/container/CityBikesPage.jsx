import Header from '../container/Header/Header'
import Footer from '../components/PageHome/Footer/FooterView'
import CityBikes from '../components/CityBikesPage/CityBikes/CityBikes'
import CityFeature from '../components/CityBikesPage/CityFeature/CityFeature'
import CityBikeSpecs from '../components/CityBikesPage/CityBikeSpecs/CityBikeSpecs'

const CityBikesPage = () => {
	return (
		<>
			<Header />
			<CityFeature />
			<CityBikes />
			<CityBikeSpecs />
			<Footer />
		</>
	)
}

export default CityBikesPage
