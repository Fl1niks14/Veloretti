import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import pkg from 'pg'
const { Pool } = pkg

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT
})
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// 📨 Сохранение формы
app.post('/submit', async (req, res) => {
	const {
		firstName,
		lastName,
		email,
		phone,
		company,
		companySize,
		bikes,
		message
	} = req.body

	try {
		const result = await pool.query(
			`INSERT INTO contacts 
      (first_name, last_name, email, phone, company, company_size, bikes, message)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
			[firstName, lastName, email, phone, company, companySize, bikes, message]
		)
		res.json({
			success: true,
			message: '✅ Форма сохранена',
			contact: result.rows[0]
		})
	} catch (error) {
		console.error('❌ Ошибка сохранения:', error)
		res
			.status(500)
			.json({ success: false, message: 'Ошибка сервера', error: error.message })
	}
})

// 📄 Получение одного контакта
app.get('/contacts/:id', async (req, res) => {
	const { id } = req.params
	try {
		const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [
			id
		])
		if (result.rows.length === 0)
			return res.status(404).json({ message: 'Контакт не найден' })
		res.json(result.rows[0])
	} catch (error) {
		console.error('❌ Ошибка получения:', error)
		res.status(500).json({ message: 'Ошибка сервера', error: error.message })
	}
})

// 📋 Все контакты
app.get('/contacts', async (req, res) => {
	try {
		const result = await pool.query(
			'SELECT * FROM contacts ORDER BY created_at DESC'
		)
		res.json(result.rows)
	} catch (error) {
		console.error('❌ Ошибка получения всех контактов:', error)
		res.status(500).json({ message: 'Ошибка сервера', error: error.message })
	}
})

// 🔄 Обновление статуса
app.patch('/contacts/:id/status', async (req, res) => {
	const { id } = req.params
	const { status } = req.body

	const allowedStatuses = ['new', 'in_progress', 'done']
	if (!allowedStatuses.includes(status)) {
		return res.status(400).json({ message: '❌ Некорректный статус' })
	}

	try {
		const result = await pool.query(
			'UPDATE contacts SET status = $1 WHERE id = $2 RETURNING *',
			[status, id]
		)
		if (result.rows.length === 0)
			return res.status(404).json({ message: 'Контакт не найден' })

		res.json({ message: '✅ Статус обновлён', contact: result.rows[0] })
	} catch (error) {
		console.error('❌ Ошибка обновления статуса:', error)
		res.status(500).json({ message: 'Ошибка сервера', error: error.message })
	}
})

app.listen(PORT, () => {
	console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
})
