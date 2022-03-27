import React, { useState } from 'react';
import s from '../../styles/Home.module.scss';
import { AiFillCaretDown } from 'react-icons/ai';
const NavBar = () => {
	const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

	const calculateHeight = (qty) => {
		const heightOfAnchors = qty * 52;
		const spaceBetween = (qty - 3) * 16;
		return heightOfAnchors + spaceBetween + 60;
	};

	return (
		<nav className={s.NavBarContainer}>
			<img src="/logo.png" alt="Ecotech" />
			<section className={s.NavBarLinksContainer}>
				<div
					onMouseEnter={() => setIsServiceMenuOpen(true)}
					onMouseLeave={() => setIsServiceMenuOpen(false)}
				>
					SERVICIOS{' '}
					<i>
						<AiFillCaretDown />
					</i>
					<aside
						style={{
							height: isServiceMenuOpen ? `${calculateHeight(4)}px` : '0px',
						}}
						className={
							isServiceMenuOpen
								? s.serviceMenuContainer
								: s.serviceMenuContainerClosed
						}
					>
						<a href="">Infraestructura tecnológica & Consultoría</a>
						<a href="">IaaS - Infraestructura como servicio</a>
						<a href="">Migración de DataCenters & Servicios Financieros</a>
						<a href="">Tecnología & Responsabilidad Social</a>
					</aside>
				</div>
				<div>HOME</div>
				<div>HOME</div>
			</section>
		</nav>
	);
};

export default NavBar;
