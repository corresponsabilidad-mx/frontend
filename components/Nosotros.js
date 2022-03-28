import Image from "next/image";

export default function Nosotros  ()  {	
	return (
	    <div className="container">		
			<div className="mt-10">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<Image
							className="pb-2 ml-3"
							src="/images/carousel/carousel3.jpg"
							width={500}
							height={300}
							alt="Nosotros"
							></Image>
						</div>
						<div className="col-12 col-md-8">
							<div className="row  mt-2">							
							<h1 className="mb-5 text-center">¿Quiénes somos?</h1>
							<h2 className="primary-color bg-transparent mb-5 text-center">Corresponsabilidad Social Mexicana </h2>						
							<h4 className="mb-5 text-center">Somos una organización sin fines de lucro creada con la finalidad de atender las demandas en prevención a las diversas formas de violencia social y desigualdad que viven niñas, niños, adolescentes y mujeres.</h4>				
							</div>
						</div>
					</div>
					<div className="row  mt-2">								
						<h2 className="primary-color bg-transparent mb-3 text-center">Misión</h2>						
						<p className="mb-5 text-center">“Fomentar la corresponsabilidad social desde nuestra organización hacia el desarrollo sostenible, la prevención y la dignificación de los derechos humanos para las personas en condición vulnerable por desigualdad y violencia, en un ambiente de recíproco bienestar, equidad y promoción de valores de convivencia que permita una proximidad positiva a la cohesión social, dignificación y cierre de brechas de exclusión”.</p>				
					</div>
					<div className="row  mt-2">								
						<h2 className="primary-color bg-transparent mb-3 text-center">Visión</h2>						
						<p className="mb-5 text-center">“Ser una Organización de referencia en políticas públicas a favor del desarrollo sostenible, prevención y dignificación de los derechos de niñas, niños, adolescentes, mujeres y sus entornos, en pro de formar individuos que piensen y actúen corresponsablemente en la construcción de paz, bienestar emocional y social”.</p>				
					</div>
					<div className="row  mt-2">								
						<h2 className="primary-color bg-transparent mb-3 text-center">Objetivo general</h2>						
						<p className="mb-5 text-center">Instrumentar acciones que construyan a una cultura de la corresponsabilidad y paz desde el desarrollo, prevención y dignificación de los derechos de  las niñas, niños, adolescentes y mujeres a fin de promover cambios en su realidad y condición a razón de la desigualdad y violencia, en una proximidad positiva a la cohesión social y cierre de brechas de exclusión.</p>				
					</div>
							
				</div>
			</div>		
	    </div>
	);
};