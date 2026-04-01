import './mainwb.css'
import piplevelo from './img-main/div.sizing-small.png'

const Main = () => {
	return (
		<main>
			<section>
				<article>
					<div className='peple-content'>
						<div className='photo-peple'>
							{/* Твое фото с велосипедистом */}
						</div>
						<div className='text-people'>
							<h1 className='text-top'>
								VELORETTI: <br />
								ГОРОДСКАЯ КЛАССИКА.
							</h1>
							<p className='hero-description'>
								Veloretti — это сочетание вневременного дизайна и современных
								технологий. Наши велосипеды созданы для тех, кто ценит комфорт,
								надежность и эстетику в каждой поездке.
							</p>

							<div className='benefits-section'>
								<h3>ОСОБЕННОСТИ:</h3>
								<ul
									className='benefits-list'
									style={{
										display: 'flex',
										gap: '20px',
										listStyle: 'none',
										padding: 0
									}}
								>
									<li>
										<strong>Легкость и прочность:</strong> <br />
										Алюминиевые рамы ручной сборки обеспечивают идеальный баланс
										веса.
									</li>
									<li>
										<strong>Безупречный стиль:</strong>
										<br /> Минималистичный дизайн, который остается актуальным
										годами.
									</li>
									<li>
										<strong>Комфорт в деталях:</strong> Анатомические седла и
										эргономичные ручки для длительных поездок.
									</li>
								</ul>
							</div>

							<button
								className='btn-primary'
								onClick={() =>
									(window.location.href = '/Veloretti/еlectric-bikes')
								}
							>
								ПЕРЕЙТИ В КАТАЛОГ
							</button>
						</div>
					</div>
				</article>

				<article>
					<div className='peple-article-photo'>
						<div className='container'>
							<div className='text-article'>
								<h1>
									Качество и <br />
									внимание к деталям.
								</h1>
								<h2>
									Каждый Veloretti проходит строгий контроль качества. <br />
									Мы используем только проверенные компоненты, <br />
									чтобы ваша поездка была плавной и безопасной <br />в любую
									погоду и на любом покрытии.
								</h2>
							</div>
						</div>
					</div>
				</article>

				<article>
					<div className='peple-content'>
						<div className='photo-backgraund'></div>
						<div className='text-peple'>
							<div className='business-text'>
								<h1>Твой байк — твое отражение</h1>
								<p className='lead'>
									Найди модель, которая идеально подходит твоему ритму жизни.
								</p>
								<p>
									От быстрых шоссейников до элегантных городских круизеров —
									наша линейка охватывает все потребности современного
									горожанина. Доступны как механические, так и электрические
									версии.
								</p>
								<div className='price-example'>
									<h3>Гарантия производителя</h3>
									<p>На все рамы действует официальная гарантия 5 лет.</p>
								</div>
								<button
									className='btn-dark'
									onClick={() =>
										(window.location.href = '/Veloretti/еlectric-bikes')
									}
								>
									Смотреть модели
								</button>
							</div>
						</div>
					</div>
				</article>

				<article>
					<div className='peple-content-f container'>
						<div className='text-content'>
							<h2 className='section-title'>КАК ВЫБРАТЬ СВОЙ VELORETTI</h2>

							<dl className='steps-list'>
								<div className='step'>
									<dt>Определитесь с типом</dt>
									<dd>
										Выберите между классической механикой для спорта или
										электроприводом для комфортных поездок без усилий.
									</dd>
								</div>

								<div className='step'>
									<dt>Определите свой стиль катания</dt>
									<dd>
										Для неспешных прогулок по паркам подойдут классические
										ситибайки, а если вам нужно быстро преодолевать большие
										расстояния — обратите внимание на нашу линейку
										электровелосипедов.
									</dd>
								</div>

								<div className='step'>
									<dt>Персонализируйте</dt>
									<dd>
										Добавьте аксессуары: багажники, корзины или фирменные
										звонки, чтобы сделать байк уникальным.
									</dd>
								</div>

								<div className='step'>
									<dt>Получите и наслаждайтесь</dt>
									<dd>
										Мы доставляем велосипеды в надежной упаковке. Минимальная
										сборка займет не более 15 минут.
									</dd>
								</div>
							</dl>
						</div>

						<div className='peplevelo'>
							<img className='peplevelo-1' src={piplevelo} alt='велосипедист' />
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}

export default Main
