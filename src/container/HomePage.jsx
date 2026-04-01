import Footer from '../components/PageHome/Footer/FooterView'
import ContactForm from '../components/PageHome/ContactForm/contact-form'
import Main from '../components/PageHome/main/main-wb'
import Quest from '../components/PageHome/Question/question'
import Header from '../container/Header/Header'

const HomePage = () => {
	return (
		<>
			<Header />
			<Main />
			<ContactForm />
			<Quest />
			<Footer />
		</>
	)
}

export default HomePage
