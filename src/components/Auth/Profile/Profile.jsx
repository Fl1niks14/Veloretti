import { useAuth } from '../AuthContext'
import './Profile.css'

const Profile = () => {
	const { user } = useAuth()
	if (!user) return <div className='p-100'>ВОЙДИТЕ В АККАУНТ</div>

	return (
		<div className='profile-container'>
			<div className='profile-inner'>
				<header>
					<h1>MY ACCOUNT</h1>
					<p>{user.email}</p>
				</header>

				<div className='loyalty-card-black'>
					<span className='label'>LOYALTY STATUS</span>
					<h3>{user.level}</h3>
					<div className='bonus-display'>
						<span className='label'>BONUSES</span>
						<h2>{user.bonuses}</h2>
					</div>
					<div className='progress-bar'>
						<div style={{ width: '40%' }}></div>
					</div>
				</div>

				<div className='history-section'>
					<h4>HISTORY</h4>
					{user.history?.map((item, i) => (
						<div key={i} className='history-item'>
							<span>{item.date}</span>
							<strong>{item.type}</strong>
							<span className={item.amount > 0 ? 'plus' : 'minus'}>
								{item.amount > 0 ? `+${item.amount}` : item.amount} BNR
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Profile
