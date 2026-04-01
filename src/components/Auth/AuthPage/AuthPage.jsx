import { useState } from 'react'
import Login from '../Login/Login' // Проверь путь
import Register from '../Register/Register' // Проверь путь
import './AuthPage.css'

const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true)

	return (
		<div className='auth-container'>
			<div className='auth-card'>
				<h1>{isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</h1>

				{isLogin ? <Login /> : <Register />}

				<button className='toggle-btn' onClick={() => setIsLogin(!isLogin)}>
					{isLogin ? 'Нет аккаунта? Регистрация' : 'Уже есть аккаунт? Войти'}
				</button>
			</div>
		</div>
	)
}

export default AuthPage
