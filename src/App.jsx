import { BrowserRouter as Router } from 'react-router-dom'
import AppContent from './AppContent'
import { AuthProvider } from './components/Auth/AuthContext' // Проверь правильность пути до файла!

const App = () => {
	return (
		<Router basename='/Veloretti'>
			<AuthProvider>
				<AppContent />
			</AuthProvider>
		</Router>
	)
}

export default App
