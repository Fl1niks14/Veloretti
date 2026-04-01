import { useState } from 'react'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const res = login(email, password)
		if (res.success) {
			navigate('/profile')
		} else {
			alert(res.message)
		}
	}

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			<input
				type='email'
				placeholder='EMAIL'
				required
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='ПАРОЛЬ'
				required
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit' className='auth-btn'>
				ВОЙТИ
			</button>
		</form>
	)
}
export default Login
