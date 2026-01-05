import { useState } from 'react'
import FooterView from '../../components/PageHome/Footer/FooterView'

function FooterContainer() {
	const [isVisible, setIsVisible] = useState(true)
	const [email, setEmail] = useState('')
	const [subscribed, setSubscribed] = useState(false)

	const handleClick = () => {
		setIsVisible(false)
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Subscribed email:', email)
		setSubscribed(true)
	}

	return (
		<FooterView
			isVisible={isVisible}
			handleClick={handleClick}
			email={email}
			setEmail={setEmail}
			handleSubmit={handleSubmit}
			subscribed={subscribed}
		/>
	)
}

export default FooterContainer
