import { BsPinAngle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { BsFillDropletFill } from "react-icons/bs";

function ProyectosPob() {
  return (
    <>
      <div className="cajaPrincipal-pob">
      <h1 className="title-proyectos">Nuestros objetivos y proyectos</h1>
          <h3 className="title-proyectosPob"><BsPinAngle/> Proyectos</h3>
          <div className="caja-pob box-kids" id="niños">
              <h3 className="title-pob"><BsFillDropletFill/> NIÑAS Y NIÑOS</h3>
              <div>
              <p><BsCheckCircle /> Identificación local, nacional e internacional de causas y efectos de la violencia en niñas y niños.</p>
              <p><BsCheckCircle /> Valoración y actualización de protocolos de atención a la violencia a niñas y niños.</p>
              <p><BsCheckCircle /> Orientación, incidencia, diseño y evaluación de políticas públicas para la agenda de infancia.</p>
              <p><BsCheckCircle /> Intervenciones a favor de la prevención de la violencia contra niñas y niños.</p>
              <p><BsCheckCircle /> Primera infancia.</p>
              <p><BsCheckCircle /> Promoción de los derechos de niñas, niños y adolescentes.</p>
              <p><BsCheckCircle /> Trabajo y explotación infantil.</p>
              <p><BsCheckCircle /> Impartición de talleres y capacitación especializada en derechos de infancia, Agenda 2030, trabajo infantil y prevención de violencia.</p>
              <p><BsCheckCircle /> Intervenciones basadas en la temporalidad de proyectos en fase previa, intermedia, final y posterior de la agenda de niñas, niños y primera infancia.</p>
              </div>
          </div>

          <div className="caja-pob" id="adolescentes">
              <h3 className="title-pob"><BsFillDropletFill/> ADOLESCENTES</h3>
              <p><BsCheckCircle /> Identificación local, nacional e internacional de causas y efectos de la violencia en adolescentes.</p>
              <p><BsCheckCircle /> Valoración y actualización de protocolos de atención a la violencia en y contra adolescentes 
              Orientación, incidencia, diseño y evaluación de políticas públicas de la agenda de adolescencia.</p>
              <p><BsCheckCircle /> Embarazo en adolescentes.</p>
              <p><BsCheckCircle /> Proyectos de desarrollo de competencias, bienestar emocional y empleabilidad de adolescentes en contexto de institucionalización o internamiento.</p>
              <p><BsCheckCircle /> Impartición de talleres y capacitación especializada en derechos de adolescentes, Agenda 2030, orientación vocacional, prevención de violencia, salud sexual y reproductiva.</p>
              <p><BsCheckCircle /> Prevención de violencia en el noviazgo y trata de personas.</p>
              <p><BsCheckCircle /> Intervenciones basadas en la temporalidad de proyectos en fase previa, intermedia, final y posterior de la agenda de adolescentes.</p>
          </div>

          <div className="caja-pob" id="mujeres">
              <h3 className="title-pob"><BsFillDropletFill/> MUJERES</h3>
              <p><BsCheckCircle /> Identificación local, nacional e internacional de factores e indicadores de violencia contra mujeres, mujeres adolescentes y niñas.</p>
              <p><BsCheckCircle /> Valoración y actualización de protocolos de atención a la violencia a mujeres, mujeres adolescentes y niñas.</p>
              <p><BsCheckCircle /> Orientación, incidencia, diseño y evaluación de políticas públicas de violencia contra las mujeres y género.</p>
              <p><BsCheckCircle /> Intervenciones en prevención de violencia, salud sexual y reproductiva, y bienestar emocional de las mujeres.</p>
              <p><BsCheckCircle /> Impartición de talleres y capacitación especializada en materia acoso, violencia, acceso a la justicia y derechos de las mujeres.</p>
              <p><BsCheckCircle /> Intervenciones basadas en la temporalidad de proyectos en fase previa, intermedia, final y posterior de la agenda de mujeres y género.</p>
          </div>

          <div className="caja-pob" id="instituciones">
              <h3 className="title-pob"><BsFillDropletFill/> INSTITUCIONES</h3>
              <p><BsCheckCircle /> Diagnósticos georreferenciados en desigualdad y prevención de violencia contra niñas, niños, adolescentes, mujeres y población en contexto de institucionalización.</p>
              <p><BsCheckCircle /> Laboratorio de Políticas Públicas: Orientación, incidencia, diseño y evaluación.</p>
              <p><BsCheckCircle /> Instrumentación de proyectos de planeación estratégica para organizaciones de sociedad civil e instituciones.</p>
              <p><BsCheckCircle /> Valoración organizacional y de procesos a instituciones y organizaciones enfocadas a la prevención de violencia y desigualdad.</p>
              <p><BsCheckCircle /> Intervenciones en salud organizacional, riesgos psicosociales y bienestar emociona.</p>
              <p><BsCheckCircle /> Monitoreo y evaluación de proyectos, como para la integración y sistematización de experiencias e informes anuales.</p>
              <p><BsCheckCircle /> Formación en incidencia, gobernanza y certificación en normas nacionales.</p>
              <p><BsCheckCircle /> Capacitación especializada en materia de equidad, inclusión, desigualdad social y perspectiva de género a instituciones públicas y privadas.</p>
              <p><BsCheckCircle /> Impartición de talleres en materia la Agenda 2030.</p>
              <p><BsCheckCircle /> Intervenciones a organizaciones e instituciones basadas en su objeto legal y organizacional, y la valoración de resultados e indicadores de impacto y desempeño.</p>
          </div>
      </div>
    </>
  )
}

export default ProyectosPob;