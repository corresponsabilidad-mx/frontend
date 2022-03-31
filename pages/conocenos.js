import React, { useState } from 'react';

import Nosotros from '../components/Nosotros';
import Organigrama from '../components/Organigrama';

export default function Conocenos() {
	const [show, setShow] = useState(true);
	return (
		<div className="container">
			<Nosotros />
			<div className="mb-5 secondary-color navbar-nav flex-fill justify-content-between align-items-center">
			<div  className="mb-5 text-center">{!show && <Organigrama /> }</div>
                        <button
                            className="btn text-white mb-5"
                            type="button"
                            onClick={() => {
                            setShow(!show);
                            }}
                            >
                            {show ? "EQUIPO" : "Cerrar"}
                        </button>	
			</div>				
	    	</div>	  
	)
}