import React, { useState } from 'react';

import Nosotros from '../components/Nosotros';
import Organigrama from '../components/Organigrama';

export default function Conocenos() {
	const [show, setShow] = useState(true);
	return (
		<div className="container mb-5">
			<Nosotros />
			<div className="pt-5 pb-5 text-center">
				<div  className="text-center">{!show && <Organigrama /> }</div>
				<button				
				className="btn btn-equipo p-4 text-center"
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