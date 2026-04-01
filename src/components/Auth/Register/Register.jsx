import { useState } from 'react'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	})
	const { register } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const res = register(formData)
		if (res.success) {
			navigate('/profile')
		} else {
			alert(res.message)
		}
	}

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='ИМЯ'
				required
				onChange={e => setFormData({ ...formData, name: e.target.value })}
			/>
			<input
				type='email'
				placeholder='EMAIL'
				required
				onChange={e => setFormData({ ...formData, email: e.target.value })}
			/>
			<input
				type='password'
				placeholder='ПАРОЛЬ'
				required
				onChange={e => setFormData({ ...formData, password: e.target.value })}
			/>
			<button type='submit' className='auth-btn'>
				СОЗДАТЬ АККАУНТ
			</button>
		</form>
	)
}
export default Register
