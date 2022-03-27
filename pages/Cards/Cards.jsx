import s from '../../styles/Home.module.scss';
import { AiFillCloud } from 'react-icons/ai';
const Cards = () => {
	return (
		<div className={s.CardsComponentContainer}>
			<div>
				<section className={s.CardContainer}>
					<main>
						<i>
							{' '}
							<AiFillCloud />
						</i>
						Infraestructure Tecnológica & DataCenter
					</main>
					<aside>
						Flexibilice su Negocio adoptando Tecnologías Híbridas optimizadas
						para evolucionar al ritmo de sus objetivos
					</aside>
				</section>
				<section className={s.CardContainer}>
					<main>
						<i>
							{' '}
							<AiFillCloud />
						</i>
						Infraestructure Tecnológica & DataCenter
					</main>
					<aside>
						Flexibilice su Negocio adoptando Tecnologías Híbridas optimizadas
						para evolucionar al ritmo de sus objetivos
					</aside>
				</section>
				<section className={s.CardContainer}>
					<main>
						<i>
							{' '}
							<AiFillCloud />
						</i>
						Infraestructure Tecnológica & DataCenter
					</main>
					<aside>
						Flexibilice su Negocio adoptando Tecnologías Híbridas optimizadas
						para evolucionar al ritmo de sus objetivos
					</aside>
				</section>
				<section className={s.CardContainer}>
					<main>
						<i>
							{' '}
							<AiFillCloud />
						</i>
						Infraestructure Tecnológica & DataCenter
					</main>
					<aside>
						Flexibilice su Negocio adoptando Tecnologías Híbridas optimizadas
						para evolucionar al ritmo de sus objetivos
					</aside>
				</section>
			</div>
		</div>
	);
};

export default Cards;
