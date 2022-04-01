import React, { useState } from 'react';

import Nosotros from '../components/Nosotros';
import Organigrama from '../components/Organigrama';

export default function Conocenos() {
	const [show, setShow] = useState(true);
	return (
		<div className="container mb-5">
			<Nosotros />
			<div className="pt-5 pb-5 secondary-color navbar-nav flex-fill justify-content-between align-items-center responsive">
			<div  className="text-center responsive">{!show && <Organigrama /> }</div>
                        <button
                            className="btn btn-lg text-white btn-outline-secondary responsive"
                            type="button"
                            onClick={() => {
                            setShow(!show);
                            }}
                            >
                            {show ? "EQUIPO AQUÍ  👇🏻 " : " ✖️ "}
                        </button>	
			</div>				
	    	</div>	  
	)
}