import React, { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const savedUser = localStorage.getItem('currentUser')
		if (savedUser) setUser(JSON.parse(savedUser))
		setLoading(false)
	}, [])

	const register = userData => {
		const users = JSON.parse(localStorage.getItem('users') || '[]')
		if (users.find(u => u.email === userData.email))
			return { success: false, message: 'EMAIL ЗАНЯТ' }

		const newUser = {
			...userData,
			bonuses: 500,
			level: 'BRONZE',
			history: [
				{
					date: new Date().toLocaleDateString(),
					type: 'WELCOME BONUS',
					amount: 500
				}
			]
		}
		users.push(newUser)
		saveUser(newUser, users)
		return { success: true }
	}

	const applyPromo = code => {
		if (!user) return { success: false }
		let amount = code === 'VELO2026' ? 1000 : code.startsWith('REF-') ? 300 : 0
		if (amount === 0) return { success: false, message: 'НЕВЕРНЫЙ КОД' }

		updateUserData(amount, `PROMO: ${code}`)
		return { success: true, message: `ЗАЧИСЛЕНО ${amount} BNR` }
	}

	// ФУНКЦИЯ СПИСАНИЯ (Для корзины)
	const spendBonuses = (amount, reason) => {
		if (!user || user.bonuses < amount) return { success: false }
		updateUserData(-amount, reason)
		return { success: true }
	}

	// ФУНКЦИЯ НАЧИСЛЕНИЯ (Для кешбэка)
	const addBonuses = (amount, reason) => {
		if (!user) return
		updateUserData(Math.floor(amount), reason)
	}

	const updateUserData = (amount, type) => {
		const newEntry = { date: new Date().toLocaleDateString(), type, amount }
		const updatedUser = {
			...user,
			bonuses: (user.bonuses || 0) + amount,
			history: [newEntry, ...(user.history || [])]
		}
		const users = JSON.parse(localStorage.getItem('users') || '[]')
		saveUser(
			updatedUser,
			users.map(u => (u.email === user.email ? updatedUser : u))
		)
	}

	const saveUser = (currentUser, allUsers) => {
		localStorage.setItem('currentUser', JSON.stringify(currentUser))
		localStorage.setItem('users', JSON.stringify(allUsers))
		setUser(currentUser)
	}

	const login = (email, password) => {
		const users = JSON.parse(localStorage.getItem('users') || '[]')
		const found = users.find(u => u.email === email && u.password === password)
		if (found) {
			setUser(found)
			localStorage.setItem('currentUser', JSON.stringify(found))
			return { success: true }
		}
		return { success: false }
	}

	const logout = () => {
		localStorage.removeItem('currentUser')
		setUser(null)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				register,
				logout,
				applyPromo,
				spendBonuses,
				addBonuses,
				loading
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
