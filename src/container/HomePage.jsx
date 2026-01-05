import BikeCard from '../components/PageHome/BikeCard/markettrello'
import Footer from '../components/PageHome/Footer/FooterView'
import ContactForm from '../components/PageHome/ContactForm/contact-form'
import Main from '../components/PageHome/main/main-wb'
import Quest from '../components/PageHome/Question/question'
import './HomePage.css'
import Header from './Header/Header'
const HomePage = () => {
	return (
		<>
			<Header />
			<Main />
			<div className='bikeCard'>
				<BikeCard />
				<BikeCard />
			</div>
			<ContactForm />
			<Quest />
			<Footer />
		</>
	)
}

export default HomePage
