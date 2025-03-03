import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Используем Routes вместо Switch
import HomePage from './Home/HomePage.jsx'
import SuccessPage from '../../components/Success/Success.jsx'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/success/:id' element={<SuccessPage />} />
			</Routes>
		</Router>
	)
}

export default App
