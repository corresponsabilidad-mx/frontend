import { Card } from "react-bootstrap";
import Image from "next/image";

export default function Nosotros  ()  {	
	return (
	    <div className="container" style={{fontFamily: "Montserrat"}}>		
			<div className="mt-10">
				<div className="container">
					<div className="mb-5">						
						<div className="m-5">      
							<Card className="card col-sm-6">
								<Card.Img variant="top" src="/images/carousel/carousel3.jpg" />
								<Card.ImgOverlay className="card-overlay">
									<Card.Body>
										<div className="">											
											<h1 className="primary-color bg-transparent mb-5 text-center">Corresponsabilidad Social Mexicana </h1>						
											<h4 className="text-start text-white">Somos una organización sin fines de lucro creada con la finalidad de atender las demandas en prevención a las diversas formas de violencia social y desigualdad que viven niñas, niños, adolescentes y mujeres.</h4>				
										</div>
									</Card.Body>
								</Card.ImgOverlay>
							</Card>              
   						</div>						
					</div>
					<div className="mb-5 p-5" style={{backgroundColor: "lavender"}}>
						<div className="row">													
							<h2 className="primary-color bg-transparent mb-3 text-start mt-3 p-2">Misión</h2>						
							<div className="line-deco"></div>																	
							<p className="mb-5 p-5">“Fomentar la corresponsabilidad social desde nuestra organización hacia el desarrollo sostenible, la prevención y la dignificación de los derechos humanos para las personas en condición vulnerable por desigualdad y violencia, en un ambiente de recíproco bienestar, equidad y promoción de valores de convivencia que permita una proximidad positiva a la cohesión social, dignificación y cierre de brechas de exclusión”.</p>				
						</div>				
						<div className="row">								
							<h2 className="primary-color bg-transparent mb-3 text-start p-2">Visión</h2>
							<div className="line-deco"></div>												
							<p className="mb-5 p-5">“Ser una Organización de referencia en políticas públicas a favor del desarrollo sostenible, prevención y dignificación de los derechos de niñas, niños, adolescentes, mujeres y sus entornos, en pro de formar individuos que piensen y actúen corresponsablemente en la construcción de paz, bienestar emocional y social”.</p>				
						</div>					
						<div className="row mt-2 mb-5">													
							<h2 className="primary-color bg-transparent mb-3 text-start p-2">Objetivo general</h2>
							<div className="line-deco"></div>												
							<p className="mb-5 p-5">Instrumentar acciones que construyan a una cultura de la corresponsabilidad y paz desde el desarrollo, prevención y dignificación de los derechos de  las niñas, niños, adolescentes y mujeres a fin de promover cambios en su realidad y condición a razón de la desigualdad y violencia, en una proximidad positiva a la cohesión social y cierre de brechas de exclusión.</p>				
						</div>	
					</div>						
				</div>
			</div>		
	    </div>
	);
};