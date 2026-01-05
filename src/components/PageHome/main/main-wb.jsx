import './mainwb.css'
import text from './img-main/image.png'
import textbaik from './img-main/photo_2024-12-13_18-00-18.jpg'
import textvelo from './img-main/photo_2024-12-13_22-20-33.jpg'
import piplevelo from './img-main/div.sizing-small.png'

const Main = () => {
	return (
		<main>
			<section>
				<article>
					<div className='hero-article'>
						<div className='hero-content'>
							<dir className='container'>
								<img className='text-hero' src={text} alt='text' />
							</dir>
						</div>
					</div>
				</article>
				<article>
					<div className='peple-content'>
						<div className='photo-peple'></div>
						<div className='text-peple'>
							<img src={textbaik} alt='textbaik' />
							<h2>
								Veloretti Electrics benefit both the environment and the health
								of your employees. Oh, and they look good too. Cost-free for the
								employer and outside of the WKR.
							</h2>
							<h4>Discover more</h4>
						</div>
					</div>
				</article>
				<article>
					<div className='peple-article-photo'>
						<dir className='container'>
							<div className='text-article'>
								<h1>
									Service,
									<br />
									maintenance and <br />
									insurance
								</h1>
								<h2>
									The lease includes an all-in service package. <br />
									Throughout the entire 36 months, you are <br />
									fully insured against damage, theft and <br />
									maintenance. In addition, you always have <br />
									access to roadside assistance.
								</h2>
							</div>
						</dir>
					</div>
				</article>
				<article>
					<div className='peple-content'>
						<div className='photo-backgraund'></div>
						<div className='text-peple'>
							<img src={textvelo} alt='text-main' />
							<h2>
								The bike plan is totally independent of the WKR and is free for
								you as an employer. The employee pays the lease costs and you,
								as the employer, decide whether you want to contribute to the
								costs.
							</h2>
							<h4>Cost example</h4>
						</div>
					</div>
				</article>
				<article>
					<div className='peple-content-f container'>
						<div className='text-ar'>
							<h1>How it works</h1>

							<div className='step'>
								<h2>Register your company</h2>
								<p>Fill in our registration form with your company details.</p>
							</div>
							<div className='step'>
								<h2>Determine the requirements</h2>
								<p className='none'>You get access to the digital platform.</p>
							</div>
							<div className='step'>
								<h2>Ride your bike!</h2>
								<p>
									Your employees can choose their bikes and they'll be delivered
									straight to their homes.
								</p>
							</div>

							<div className='step'>
								<h2>Administration</h2>
								<p className='none'>
									The digital platform gives you an easy overview of all the
									information for your payroll.
								</p>
							</div>
						</div>

						<div className='peplevelo'>
							<img className='peplevelo-1' src={piplevelo} alt='peplevelo' />
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}

export default Main
