import './ContactForm.css'
import { useContactForm } from '../../../hooks/useContactForm'

const ContactForm = () => {
	const { formData, handleChange, handleSubmit, loading, error, success } =
		useContactForm()

	return (
		<div className='contact-form-container'>
			<h1>Связаться с нами</h1>

			<form className='contact-form' onSubmit={handleSubmit}>
				<input
					type='text'
					name='firstName'
					placeholder='Имя'
					value={formData.firstName}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					name='lastName'
					placeholder='Фамилия'
					value={formData.lastName}
					onChange={handleChange}
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Электронная почта'
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type='tel'
					name='phone'
					placeholder='Номер телефона'
					value={formData.phone}
					onChange={handleChange}
					pattern='[0-9+\s()-]{6,}'
					title='Введите корректный номер телефона'
					required
				/>
				<input
					type='text'
					name='company'
					placeholder='Название компании'
					value={formData.company}
					onChange={handleChange}
				/>
				<select
					name='companySize'
					value={formData.companySize}
					onChange={handleChange}
					required
				>
					<option value=''>Размер компании</option>
					<option value='1-10'>1-10 сотрудников</option>
					<option value='11-50'>11-50 сотрудников</option>
					<option value='51-200'>51-200 сотрудников</option>
					<option value='201+'>Более 200 сотрудников</option>
				</select>
				<input
					type='number'
					name='bikes'
					placeholder='Количество велосипедов'
					value={formData.bikes}
					onChange={handleChange}
					min='1'
					required
				/>
				<textarea
					name='message'
					placeholder='Чем мы можем вам помочь?'
					value={formData.message}
					onChange={handleChange}
					rows='5'
				/>
				<button type='submit' className='submit-button' disabled={loading}>
					{loading ? 'Отправка...' : 'Отправить запрос'}
				</button>

				{success && (
					<p className='form-success'>✅ Запрос успешно отправлен!</p>
				)}
				{error && <p className='form-error'>❌ Произошла ошибка: {error}</p>}
			</form>
		</div>
	)
}

export default ContactForm
