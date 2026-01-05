import { useState } from 'react'

export const useContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		company: '',
		companySize: '',
		bikes: '',
		message: ''
	})

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		setError(null)
		setSuccess(false)

		try {
			const res = await fetch(
				`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/submit`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
				}
			)

			if (!res.ok) throw new Error('Ошибка отправки формы')

			const data = await res.json()
			console.log('✅ Ответ сервера:', data)

			setSuccess(true)
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				company: '',
				companySize: '',
				bikes: '',
				message: ''
			})
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	return { formData, handleChange, handleSubmit, loading, error, success }
}
