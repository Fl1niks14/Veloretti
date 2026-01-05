import { useEffect, useState } from 'react'

export const useContactDetails = id => {
	const [userData, setUserData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/contacts/${id}`)
				if (!response.ok) throw new Error('Ошибка при загрузке данных')

				const data = await response.json()
				setUserData(data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		if (id) fetchData()
	}, [id])

	return { userData, loading, error }
}
