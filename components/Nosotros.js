import { Card } from "react-bootstrap";

export default function Nosotros  ()  {	
	return (
	    <div className="container" style={{fontFamily: "Montserrat"}}>		
			<div className="">
				<div className="">
					<div className="mb-3">						
						<div className="container p-3 col-sm-8">      
							<Card className="mt-3">
								<Card.Img variant="top" src="/images/nosotros/nosotros.jpg" style={{borderRadius: "35px", minHeight: "250px"}} alt="Nosotros"/>
								<Card.ImgOverlay className="card-overlay">									
									<Card.Body className="row">
										<div className="container text-center p-2">
											<h2 className="text-white mb-4" >Corresponsabilidad Social Mexicana </h2>																
											<h5 className="text-white" >Es una organización sin fines de lucro creada con la finalidad de atender las demandas en prevención a las diversas formas de violencia social y desigualdad que viven niñas, niños, adolescentes y mujeres.</h5>				
										</div>
									</Card.Body>
								</Card.ImgOverlay>
							</Card>              
   						</div>						
					</div>
					<div className="mb-5 p-5" style={{backgroundColor: "lavender", borderRadius: "100px"}}>
						<div className="row">													
							<h3 className="primary-color bg-transparent mb-3 text-center mt-1 p-2">MISIÓN</h3>						
							<div className="line-deco"></div>																	
							<p className="mb-5 p-5" style={{fontSize: "1rem"}}>“Fomentar la corresponsabilidad social desde nuestra organización hacia el desarrollo sostenible, la prevención y la dignificación de los derechos humanos para las personas en condición vulnerable por desigualdad y violencia, en un ambiente de recíproco bienestar, equidad y promoción de valores de convivencia que permita una proximidad positiva a la cohesión social, dignificación y cierre de brechas de exclusión”.</p>				
						</div>				
						<div className="row">								
							<h3 className="primary-color bg-transparent mb-3 text-center p-2">VISIÓN</h3>
							<div className="line-deco"></div>												
							<p className="mb-5 p-5" style={{fontSize: "1rem"}}>“Ser una Organización de referencia en políticas públicas a favor del desarrollo sostenible, prevención y dignificación de los derechos de niñas, niños, adolescentes, mujeres y sus entornos, en pro de formar individuos que piensen y actúen corresponsablemente en la construcción de paz, bienestar emocional y social”.</p>				
						</div>					
						<div className="row mt-2 mb-5">													
							<h3 className="primary-color bg-transparent mb-3 text-center p-2">PROPÓSITO</h3>
							<div className="line-deco"></div>												
							<p className="p-5" style={{fontSize: "1rem"}}>Nuestro propósito es instrumentar acciones que construyan una cultura dirigida a la corresponsabilidad y la paz, desde el desarrollo, la prevención y dignificación de los derechos de niñas, niños, adolescentes y las mujeres.</p>				
						</div>	
					</div>						
				</div>
			</div>		
	    </div>
	);
};