import { servicesProvidedIcons } from '../data';
import s from '../styles/Home.module.scss';
import Cards from './Cards/Cards';
import Contact from './Contact/Contact';
import NavBar from './NavBar/NavBar';

export default function Home() {
	return (
		<main className={s.appContainer}>
			<NavBar />
			<div className={s.BridgeImageContainer}>
				<div className={s.BridgeImage}>
					<aside>
						<h1>Transformando IT en Servicios</h1>
						<h2>Tecnologías flexibles orientadas a sus objetivos</h2>
					</aside>
				</div>
			</div>
			<Cards />
			<div className={s.SuExitoEsNuestroTrabajoSeccion}>
				<h1>Su éxito es nuestro trabajo</h1>
				<div className={s.ServicesProvidedContainer}>
					{servicesProvidedIcons.map((item, index) => {
						return (
							<section className={s.ServicesProvided} key={index}>
								<i>{item.Icon}</i>
								{item.text}
							</section>
						);
					})}
				</div>
			</div>
			<Contact />
		</main>
	);
}
