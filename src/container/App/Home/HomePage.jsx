import React from 'react' // Добавьте React, если его еще нет
import Header from '../../../components/Header/HeaderNav' // Добавлен импорт Header
import BikeCard from '../../../components/BikeCard/markettrello'
import Footer from '../../../components/Footer/Footer'
import ContactForm from '../../../components/Form/contact-form'
import Main from '../../../components/main/main-wb'
import Quest from '../../../components/Question/question'
import './HomePage.css'
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
