import { useState } from 'react'
import './question.css'

function Quest() {
	const [activeIndex, setActiveIndex] = useState(null)

	const toggleAccordion = index => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<>
			<div className='question'>
				<header className='header'>
					<h1>Any questions?</h1>
				</header>

				<main className='faq-section'>
					<div className='faq-item'>
						<h2 onClick={() => toggleAccordion(0)}>
							What about the paperwork?
							<span>{activeIndex === 0 ? '-' : '+'}</span>
						</h2>
						{activeIndex === 0 && (
							<p>
								The bicycle plan is set up so that there will be no
								administrative work on your part as the employer. You can use a
								free online platform that has been created by your leasing
								partner. This provides you with a simple overview of your
								business and your employees, allowing you to arrange everything.
								It also simplifies all the paperwork. Everything is organised
								with just a few clicks.
							</p>
						)}
					</div>

					<div className='faq-item'>
						<h2 onClick={() => toggleAccordion(1)}>
							How does it work with an employee who retires early?
							<span>{activeIndex === 1 ? '-' : '+'}</span>
						</h2>
						{activeIndex === 1 && (
							<p>Details about retiring employees and the plan go here.</p>
						)}
					</div>

					<div className='faq-item'>
						<h2 onClick={() => toggleAccordion(2)}>
							What does a Veloretti Bike Plan cost for an employer?
							<span>{activeIndex === 2 ? '-' : '+'}</span>
						</h2>
						{activeIndex === 2 && (
							<p>Details about costs for the employer go here.</p>
						)}
					</div>

					<div className='faq-item'>
						<h2 onClick={() => toggleAccordion(3)}>
							How is the insurance & maintenance arranged when leasing a
							Veloretti bike?
							<span>{activeIndex === 3 ? '-' : '+'}</span>
						</h2>
						{activeIndex === 3 && (
							<p>Details about insurance and maintenance go here.</p>
						)}
					</div>

					<div className='faq-item'>
						<h2 onClick={() => toggleAccordion(4)}>
							What are the legal requirements for the Veloretti bicycle plan?
							<span>{activeIndex === 4 ? '-' : '+'}</span>
						</h2>
						{activeIndex === 4 && (
							<p>Details about legal requirements go here.</p>
						)}
					</div>
				</main>
			</div>
		</>
	)
}

export default Quest
