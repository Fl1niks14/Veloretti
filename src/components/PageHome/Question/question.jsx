import { useState } from 'react'
import './question.css'

const faqData = [
	{
		id: 0,
		question: 'Чем электровелосипеды Veloretti отличаются от обычных?',
		answer:
			'Наши электробайки сочетают в себе классический голландский дизайн и скрытые высокие технологии. Мотор активируется мгновенно, помогая вам на подъемах, а бесступенчатая трансмиссия Enviolo сама подбирает идеальную передачу. Вы просто крутите педали, а велосипед делает всё остальное.'
	},
	{
		id: 1,
		question: 'На сколько хватает одного заряда аккумулятора?',
		answer:
			'В зависимости от режима поддержки и рельефа местности, запас хода составляет от 60 до 120 километров. Съемный аккумулятор емкостью 540 Вт·ч полностью заряжается за 4–5 часов от обычной домашней розетки.'
	},
	{
		id: 2,
		question: 'Нужно ли специальное обслуживание для мотора и электроники?',
		answer:
			'Система практически не требует обслуживания. Мы используем тихие карбоновые ремни Gates вместо цепей — они не ржавеют, не требуют смазки и служат до 30 000 км. Обновления ПО приходят по воздуху через наше мобильное приложение.'
	},
	{
		id: 3,
		question: 'Безопасно ли оставлять велосипед на улице?',
		answer:
			'Каждый байк оснащен встроенным GPS-трекером и Bluetooth-замком. В случае кражи вы можете отследить местоположение через приложение Veloretti. Также мы предлагаем расширенную страховку, которая покрывает 100% стоимости при любых инцидентах.'
	},
	{
		id: 4,
		question: 'Как работает доставка и сборка при онлайн-заказе?',
		answer:
			'Мы доставляем велосипед в специальной защитной коробке. Он собран на 98%: вам нужно лишь прикрутить педали и выровнять руль с помощью инструментов, которые уже идут в комплекте. Это займет не более 15 минут.'
	}
]

function Quest() {
	const [activeIndex, setActiveIndex] = useState(null)

	const toggleAccordion = index => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<div className='question-container'>
			<header className='faq-header'>
				<h1>Остались вопросы?</h1>
			</header>

			<div className='faq-list'>
				{faqData.map(item => (
					<div
						key={item.id}
						className={`faq-item ${activeIndex === item.id ? 'active' : ''}`}
					>
						<div
							className='faq-question'
							onClick={() => toggleAccordion(item.id)}
						>
							<h2>{item.question}</h2>
							<span className='faq-icon'>
								{activeIndex === item.id ? '−' : '+'}
							</span>
						</div>

						{activeIndex === item.id && (
							<div className='faq-answer'>
								<p>{item.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Quest
