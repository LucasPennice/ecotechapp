import s from '../../styles/Home.module.scss';
import { BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
	return (
		<div className={s.ContactSectionContainer}>
			{/* <h1>Puntos de Contacto</h1> */}
			<div>
				<a href=''>
					<i>
						<BsWhatsapp />
					</i>
					Contacto por WhatsApp
				</a>
				<a>
					<i>
						<BsFillTelephoneFill />
					</i>
					+54 9(341) 358-4836
				</a>
				<a>
					<i>
						<SiGmail />
					</i>
					contacto@ecotechweb.com.ar
				</a>
			</div>
			<h3>© 2099 Ecotech SRL - Santa Fe, Argentina</h3>
		</div>
	);
};

export default Contact;
