import LoadingBar from 'react-top-loading-bar'
import { Toaster } from 'react-hot-toast'
import routesConfig from './rooteConfig/rooteConfig'
import CartDrawer from './Shop/CartDrawer/CartDrawer'
import CartButton from './Shop/CartIcon/CartButton'
import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation
} from 'react-router-dom'

const AppContent = () => {
	const [progress, setProgress] = useState(0)
	const location = useLocation() // Теперь это работает!

	// Логика запуска полоски при смене URL
	useEffect(() => {
		setProgress(40) // Полоска доходит до середины
		const timer = setTimeout(() => setProgress(100), 300) // Завершаем за 300мс
		return () => clearTimeout(timer)
	}, [location.pathname])

	return (
		<>
	
			<LoadingBar
				color='#222324' // Твой золотой цвет (--color-gold)
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
				height={3}
				shadow={true}
			/>

			<Toaster position='bottom-right' />

			<Routes>
				{routesConfig.map((route, index) => {
					const Component = route.Component
					return <Route key={index} path={route.path} element={<Component />} />
				})}
			</Routes>

			<CartDrawer />
			<CartButton />
		</>
	)
}
export default AppContent
