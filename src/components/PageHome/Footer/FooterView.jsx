import './FooterView.css'
import fac from './img/SVG.png'
import inst from './img/SVG2.png'
import Youtube from './img/SVG3.png'
import int from './img/SVG4.png'
import tictoc from './img/Vector5.png'
import NavLinkItem from '../../../NavLinkItem/NavLinkItem'

function FooterView({
	isVisible,
	handleClick,
	email,
	setEmail,
	handleSubmit,
	subscribed
}) {
	console.log('FooterView props:', isVisible)
	return (
		<>
			<div className='footer-container'>
				<footer className='footer'>
					{isVisible && (
						<div className='footer-top'>
							<p>
								Ready to take the Electric Ivy or Ace for a spin? Electric test
								rides are now available in <br />
								Amsterdam, Amstelveen, Apeldoorn, Bussum, Den Haag, Nijmegen,
								Weesp, Wormerveer, Berlin, Hamburg and Munich. Schedule your
								test ride now and we’ll see you there.
							</p>
							<button onClick={handleClick} className='book-now'>
								BOOK NOW
							</button>
						</div>
					)}

					<div className='footer-links'>
						<div className='footer-column'>
							<h4>Explorer</h4>
							<ul>
								<NavLinkItem to='/electric-bikes'>Electric bikes</NavLinkItem>
								<NavLinkItem to='/city-bikes'>City bikes</NavLinkItem>
								<NavLinkItem to='/kids-bikes'>Kids' bikes</NavLinkItem>
								<NavLinkItem to='/accessories'>Accessories</NavLinkItem>
								<NavLinkItem to='/outlet'>Outlet</NavLinkItem>
								<NavLinkItem to='/business'>Business</NavLinkItem>
								<NavLinkItem to='/insurance'>Insurance Electric</NavLinkItem>
								<NavLinkItem to='/size-guide'>Size guide</NavLinkItem>
							</ul>

							<h4>About</h4>
							<ul>
								<NavLinkItem to='/about'>About us</NavLinkItem>
								<NavLinkItem to='/journal'>Journal</NavLinkItem>
								<NavLinkItem to='/reviews'>Reviews</NavLinkItem>
								<NavLinkItem to='/press'>Press</NavLinkItem>
								<NavLinkItem to='/jobs'>Jobs</NavLinkItem>
							</ul>

							<h4>Help</h4>
							<ul>
								<NavLinkItem to='/#'>Contact</NavLinkItem>
								<NavLinkItem to='/faq'>FAQ</NavLinkItem>
								<NavLinkItem to='/delivery'>Delivery</NavLinkItem>
								<NavLinkItem to='/manuals'>Assembly & manuals</NavLinkItem>
								<NavLinkItem to='/payment'>Payment options</NavLinkItem>
								<NavLinkItem to='/privacy-policy'>Privacy policy</NavLinkItem>
								<NavLinkItem to='/terms'>Terms & conditions</NavLinkItem>
							</ul>
						</div>
						<div className='email-container'>
							<h1 className='headline'>Join the ride.</h1>
							<p className='subtext'>Sign up for our newsletter.</p>

							{subscribed ? (
								<p className='success-message'>Thanks for subscribing 🚴‍♂️</p>
							) : (
								<form className='email-form' onSubmit={handleSubmit}>
									<input
										type='email'
										placeholder='Enter your email address here'
										className='email-input'
										value={email}
										onChange={e => setEmail(e.target.value)}
										required
									/>
									<button type='submit' className='subscribe-button'>
										Subscribe
									</button>
								</form>
							)}

							<label className='checkbox-container'>
								<input type='checkbox' required />
								By signing up, I agree to the
								<NavLinkItem to='/privacy-policy' className='privacy-policy'>
									privacy policy
								</NavLinkItem>
								of Veloretti.
							</label>
							<div className='social-icons'>
								<a href='https://facebook.com'>
									<img src={fac} alt='facebook' />
								</a>
								<a href='https://instagram.com'>
									<img src={inst} alt='instagram' />
								</a>
								<a href='https://youtube.com'>
									<img src={Youtube} alt='Youtube' />
								</a>
								<a href='https://linkedin.com'>
									<img src={int} alt='linkedin' />
								</a>
								<a href='https://tiktok.com'>
									<img src={tictoc} alt='tiktok' />
								</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}

export default FooterView
