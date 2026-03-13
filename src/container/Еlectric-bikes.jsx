import Header from '../container/Header/Header'
import ElectricBikes from '../components/ElectricBicePage/ElectricBikes/ElectricBikes'
import Footer from '../components/PageHome/Footer/FooterView'
import BatteryFeature from '../components/ElectricBicePage/BatteryFeature/BatteryFeature'
import IvyFeature from '../components/ElectricBicePage/IvyFeature/IvyFeature'
import BikeSpecs from '../components/ElectricBicePage/BikeSpecs/BikeSpecs'
const Еlectric = () => {
	return (
		<>
			<Header />
			<IvyFeature />
			<BatteryFeature />
			<ElectricBikes />
			<BikeSpecs />
			<Footer />
		</>
	)
}

export default Еlectric
