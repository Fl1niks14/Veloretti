import React from 'react'
import './BonusGuide.css'

const BonusGuide = () => {
	const steps = [
		{
			id: '01',
			title: 'ПОКУПКИ',
			description:
				'Получайте 5% кешбэка с каждого заказа на ваш бонусный счет.',
			reward: '+5% BNR'
		},
		{
			id: '02',
			title: 'ДРУЗЬЯ',
			description:
				'Пригласите друга по вашему реферальному коду и получите бонусы.',
			reward: '+300 BNR'
		},
		{
			id: '03',
			title: 'ОТЗЫВЫ',
			description:
				'Оставьте отзыв с фото вашего велосипеда в социальных сетях.',
			reward: '+150 BNR'
		}
	]

	return (
		<div className='bonus-guide'>
			<h3 className='guide-title'>КАК ПОЛУЧИТЬ БОНУСЫ</h3>
			<div className='guide-grid'>
				{steps.map(step => (
					<div key={step.id} className='guide-item'>
						<span className='step-num'>{step.id}</span>
						<div className='step-content'>
							<h4>{step.title}</h4>
							<p>{step.description}</p>
							<span className='step-reward'>{step.reward}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default BonusGuide
