import Header from './Header/Header'

import Footer from '../components/PageHome/Footer/FooterView'
import AboutCity from '../components/About-Us/AboutCity/AboutCity'
import AboutValues from '../components/About-Us/AboutValues/AboutValues'
import CityFooterCTA from '../components/About-Us/CityFooterCTA/CityFooterCTA'

const AboutUs = () => {
	return (
		<>
			<Header />
			<AboutCity />
			<AboutValues />
			<CityFooterCTA />
			<Footer />
		</>
	)
}

export default AboutUs
