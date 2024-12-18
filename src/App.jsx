import './App.css'
import Header from './components/Header/HeaderNav'
import Main from './components/main/main-wb.jsx'
import BikeCard from './components/BikeCard/markettrello.jsx'
import ContactForm from './components/Form/contact-form.jsx'
import Footer from './components/Footer/Footer.jsx'
import Quest from './components/Question/question.jsx'

function App() {


  return (
    <>
		<Header />
		<Main />
		<div className='BikeCard'>
		<BikeCard />
		<BikeCard />
		</div>
		<ContactForm />
		<Quest />
		<Footer />
    </>
  )
}

export default App
