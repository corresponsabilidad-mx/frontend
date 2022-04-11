import React, { useState } from 'react';

import Nosotros from '../components/Nosotros';
import Organigrama from '../components/Organigrama';

export default function Conocenos() {
	const [show, setShow] = useState(true);
	return (
		<div className="container mb-5">
			<Nosotros />
			<div className="pt-5 pb-5 navbar-nav flex-fill justify-content-between align-items-center">
				<div  className="text-center">{!show && <Organigrama /> }</div>
				<button				
				className="btn btn-lg btn-equipo p-4"
				type="button"
				onClick={() => {
				setShow(!show);
				}}
				>
				{show ? "CONOCE NUESTRO EQUIPO DE TRABAJO  👇🏻 " : " ✖️ "}
				</button>	
			</div>				
	    	</div>	  
	)
}