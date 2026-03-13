import { useNavigate } from 'react-router-dom'
import './Reset.css'

const Reset = () => {
	const navigate = useNavigate()

	return (
		<section className='error-page'>
			<div className='error-container'>
				<h1 className='error-code'>404</h1>
				<div className='error-content'>
					<h2 className='error-title'>Цепь слетела!</h2>
					<p className='error-text'>
						Похоже, вы сбились с маршрута. Дорога, по которой вы ехали, ведет в
						тупик. Давайте вернемся на главную трассу.
					</p>
					<button className='back-home-btn' onClick={() => navigate('/')}>
						Вернуться на главную
					</button>
				</div>

				<div className='error-wheel-decor'></div>
			</div>
		</section>
	)
}

export default Reset
