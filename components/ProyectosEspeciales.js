import { BsStar } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import Image from "next/image";


function ProyectosEspeciales() {

  return (
    <>
        <div className="cajaPrincipal-especiales">
            <h3 className="title-especiales"><BsStar/> Proyectos Especiales:</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 pb-4 contenedor-tarjeta">
                <div className="col">
                    <div className="card h-100">
                        <div>
                        <Image 
                            src="/images/proyectos/embarazo.png" 
                            className="card-img-top" 
                            alt="embarazo"
                            width={150}
                            height={110}
                        ></Image>
                        </div>
                    <div className="card-body tarj-espec">
                        <h5 className="card-title text-proyectos">Embarazo en adolescentes</h5>
                        <span><BsFillArrowDownCircleFill fontSize={20} /></span><br/><br/>
                        <p className="card-text card-espec">
                            <span><BsPinAngleFill/> Campaña: &quot;Antes de dar vida, mi proyecto de vida&quot;.</span><br/><br/>
                            <span><BsPinAngleFill/> Fortalecimiento a Grupos Estatales de prevención del Embarazo en Adolescentes.</span><br/><br/>
                            <span><BsPinAngleFill/> Incidencia y evaluación de políticas públicas en prevención de embarazo en niñas y adolescentes.</span><br/><br/>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div>
                        <Image 
                            src="/images/proyectos/niños.png" 
                            className="card-img-top" 
                            alt="niños"
                            width={150}
                            height={110}
                        ></Image>
                        </div>
                    <div className="card-body tarj-espec">
                        <h5 className="card-title text-proyectos">Primera Infancia</h5>
                        <span><BsFillArrowDownCircleFill fontSize={20} /></span><br/><br/>
                        <p className="card-text card-espec">
                            <span><BsPinAngleFill/> Estrategias del Pacto por la Primera Infancia.</span><br/><br/>
                            <span><BsPinAngleFill/> Fortalecimiento y apoyo en implementación de la Estrategia Nacional de Primera Infancia (ENAPI).</span><br/><br/>
                            <span><BsPinAngleFill/> Incidencia y evaluación de políticas públicas en Primera Infancia.</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div>
                            <Image 
                                src="/images/proyectos/engrajes.png" 
                                className="card-img-top" 
                                alt="equipo"
                                width={150}
                                height={110}
                            ></Image>
                        </div>
                    <div className="card-body tarj-espec">
                        <h5 className="card-title text-proyectos">Trabajo Infantil</h5>
                        <span><BsFillArrowDownCircleFill fontSize={20} /></span><br/><br/>
                        <p className="card-text card-espec">
                            <span><BsPinAngleFill/> Campaña: &quot;Di no a la explotación laboral de niñas, niños y adolescentes&quot;.</span><br/><br/>
                            <span><BsPinAngleFill/> Seguimiento en la Comisión Intersecretarial para Prevención y Erradicación del Trabajo Infantil y la Protección de Adolescentes Trabajadores en Edad Permitida (CITI).</span><br/><br/>
                            <span><BsPinAngleFill/> Apoyo en la implantación de estándares y códigos de trabajo infantil exigibles por mercados globales y consumidores.</span><br/><br/>
                            <span><BsPinAngleFill/> Incidencia y evaluación de políticas públicas para erradicar el Trabajo Infantil.</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div>
                        <Image 
                            src="/images/proyectos/mujer.png" 
                            className="card-img-top" 
                            alt="mujer"
                            width={150}
                            height={110}
                        ></Image>
                        </div>
                    <div className="card-body tarj-espec">
                    <h5 className="card-title text-proyectos">Poner fin a la violencia contra la niñez y mujeres</h5>
                        <span><BsFillArrowDownCircleFill fontSize={20} /></span><br/><br/>
                        <p className="card-text card-espec">
                            <span><BsPinAngleFill/> Campaña: Together to #ENDviolence (global campaign and Solutions Summit Series).</span><br/><br/>
                            <span><BsPinAngleFill/> Alianza Global para poner fin a la violencia contra la niñez:  Contribución al Plan de Acción 2019-2024 de México y en la Ciudad de México (COMPREVNNA).</span><br/><br/>
                            <span><BsPinAngleFill/> Incidencia y evaluación de políticas públicas para poner fin a la violencia contra la niñez.</span><br/><br/>
                            <span><BsPinAngleFill/> Incorporación de la perspectiva de género: una estrategia global para lograr la igualdad de género y el empoderamiento de las mujeres y las niñas.</span><br/><br/>
                            <span><BsPinAngleFill/> Incidencia y evaluación de políticas públicas para poner fin a la violencia contra las mujeres.</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div>   
                        <Image 
                            src="/images/proyectos/agenda.png" 
                            className="card-img-top" 
                            alt="agenda"
                            width={150}
                            height={110}
                        ></Image>
                        </div>
                    <div className="card-body tarj-espec">
                        <h5 className="card-title text-proyectos">Agenda 2030</h5>
                        <span><BsFillArrowDownCircleFill fontSize={20} /></span><br/><br/>
                        <p className="card-text card-espec">
                            <span><BsPinAngleFill/> Incidencia y evaluación de políticas públicas para los ODS 1,4 8, 16 y 1.</span><br/><br/>
                            <span><BsPinAngleFill/> Participación en la Red Iberoamericana de Seguimiento a la Agenda 2030.</span><br/><br/>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div>
                        <Image 
                            src="/images/proyectos/manos.png" 
                            className="card-img-top" 
                            alt="manos"
                            width={150}
                            height={110}
                        ></Image>
                        </div>
                    <div className="card-body tarj-espec">
                        <h5 className="card-title text-proyectos">Integración social de población en contexto de institucionalización</h5>
                        <span><BsFillArrowDownCircleFill fontSize={20} /></span><br/><br/>
                        <p className="card-text card-espec">
                            <span><BsPinAngleFill/> Proceso de egreso de adolescentes que viven en casa hogar o centros de asistencia social.</span><br/><br/>
                            <span><BsPinAngleFill/> Integración social de adolescentes en contexto de internamiento o reclusión.</span><br/><br/>
                            <span><BsPinAngleFill/> Incidencia y evaluación de políticas públicas para población adolescente o mujeres en contexto de institucionalización.</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  );
}

export default ProyectosEspeciales;