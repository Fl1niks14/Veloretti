import React from 'react'
import './mainwb.css' // Подключим CSS для стилей
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
							<img className='text-hero' src={text} alt='text' />
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
					<div className='peple-content-f'>
						<div className='text-ar'>
							<h1>How it works</h1>
							<h2>Register your compan</h2>
							<p>
								Fill in our registration form with your company details. After{' '}
								<br />
								your registration, our leasing partner will do a credit check.
								You
								<br />
								will hear whether your application has been approved within 24
								<br />
								hours.
							</p>
							<h2>Determine the requirements</h2>
							<p className='none'>
								You get acces to the digital platform. Set the requirements for{' '}
								<br />
								your employees and share the registration link.
							</p>
							<h2>Ride your bike!</h2>
							<p>
								Let's go! Your employees can choose their bikes and they'll be{' '}
								<br />
								delivered straight to their homes.
							</p>
							<h2>Administration</h2>
							<p className='none'>
								Everything in one place. The digital platform gives you an easy{' '}
								<br />
								overview of all the information for your payroll.
							</p>
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
