import Bike from './img/image-1.png'
import './markettrello.css'
function BikeCard() {
	return (
		<div className='bike-card-container'>
			<div className='bike-card'>
				<div className='text'>
					<h2>Electric Ace</h2>
					<p>€69,07 NET/MONTH</p>
				</div>
				<img src={Bike} alt='Velocike' />
				<div className='color-selector'>
					<button className='color-button'></button>
					<button className='color-button-1'></button>
					<button className='color-button-2'></button>
					<button className='color-button-3'></button>
				</div>
			</div>
		</div>
	)
}

export default BikeCard
