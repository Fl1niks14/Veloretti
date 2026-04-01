import OfficeOrder from '../components/ServicePage/OfficeOrder/OfficeOrder'

import Header from './Header/Header'
import Footer from '../components/PageHome/Footer/FooterView'
import Services from '../components/ServicePage/Services/Services'
const ServicePage = () => {
	return (
		<>
			<Header />
			<OfficeOrder />
			<Services />
			<Footer />
		</>
	)
}

export default ServicePage
