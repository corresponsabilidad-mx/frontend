import React from 'react';
import Image from "next/image";

export default function Organigrama () { 
	return (
		<>
		<h1 className="p-3 text-center p-2 primary-color bg-transparent mb-5">NUESTRO EQUIPO DE TRABAJO</h1>
		<div className="line-deco mb-2"></div>
		<Image
                        className="mb-2 p-5"
                        src="/images/organigrama/organigramaCSM.png"
                        width={1500}
                        height={800}
                        alt="organigrama"
                        ></Image>			
		</>	
	)
}