import React, { useState, useEffect } from 'react'
import './ContactForm.css'

const ContactForm = () => {
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

	const [contacts, setContacts] = useState([]) // Добавили состояние для списка контактов

	// Функция загрузки контактов из API
	const fetchContacts = async () => {
		try {
			const response = await fetch('http://localhost:3000/contacts')
			if (!response.ok) throw new Error('Ошибка при получении контактов')

			const data = await response.json()
			setContacts(data) // Обновляем список контактов
		} catch (error) {
			console.error('Ошибка загрузки контактов:', error)
		}
	}

	// Загружаем контакты при первом рендере
	useEffect(() => {
		fetchContacts()
	}, [])

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const response = await fetch('http://localhost:3000/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			})

			if (!response.ok) throw new Error('Ошибка при отправке формы')

			const result = await response.json()

			// 🔥 Перенаправляем пользователя на страницу успеха с его `id`
			window.location.href = `/success/${result.id}`
		} catch (error) {
			console.error('Ошибка:', error)
			alert('Не удалось отправить форму.')
		}
	}
	return (
		<div className='contact-form-container'>
			<h1>Get in touch</h1>
			<form className='contact-form' onSubmit={handleSubmit}>
				<input
					type='text'
					name='firstName'
					placeholder='First name'
					value={formData.firstName}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					name='lastName'
					placeholder='Last name'
					value={formData.lastName}
					onChange={handleChange}
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Email address'
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type='tel'
					name='phone'
					placeholder='Phone number'
					value={formData.phone}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					name='company'
					placeholder='Company name'
					value={formData.company}
					onChange={handleChange}
				/>
				<select
					name='companySize'
					value={formData.companySize}
					onChange={handleChange}
					required
				>
					<option value=''>Company Size</option>
					<option value='1-10'>1-10</option>
					<option value='11-50'>11-50</option>
					<option value='51-200'>51-200</option>
					<option value='201+'>201+</option>
				</select>
				<input
					type='number'
					name='bikes'
					placeholder='Number of bikes'
					value={formData.bikes}
					onChange={handleChange}
					required
				/>
				<textarea
					name='message'
					placeholder='How can we help'
					value={formData.message}
					onChange={handleChange}
					rows='5'
				/>
				<button type='submit' className='submit-button'>
					Send the request
				</button>
			</form>

			<h2>Submitted Contacts</h2>
			<ul className='contact-list'>
				{contacts &&
					contacts.map(contact => (
						<li key={contact._id}>
							<strong>
								{contact.firstName} {contact.lastName}
							</strong>
							{contact.email}
							{contact.company}
							{contact.message}
							{contact.phone}
						</li>
					))}
			</ul>
		</div>
	)
}

export default ContactForm
