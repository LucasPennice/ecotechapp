import s from '../../styles/Home.module.scss';
import { BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
	return (
		<div className={s.ContactSectionContainer}>
			<section className={s.ContactInformation}>
				<h1>Puntos de Contacto</h1>
				<div>
					<a href="">
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
			</section>
			<form
				className={s.EmailForm}
				onSubmit={(e) => {
					e.preventDefault();
					console.log('yeah');
				}}
			>
				<input type="text" placeholder="Name" required={true} name="UserName" />
				<input
					type="email"
					placeholder="Email"
					required={true}
					name="UserEmail"
				/>
				<textarea name="EmailContent" required={true} />
				<button>Enviar</button>
			</form>
		</div>
	);
};

export default Contact;
