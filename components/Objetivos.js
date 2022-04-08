import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import { BsBookmarkStar } from "react-icons/bs";


function Objetivos() {
  const [key, setKey] = useState("diagnostico");

  return (
    <>
    <div className="cajaPrincipal-objetivos">
      <h1 className="title-proyectos">Nuestros objetivos y proyectos</h1>
      <h3 className="title-ejes"><BsBookmarkStar/> Ejes estratégicos:</h3>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tabs-style"
      >
        
        <Tab className="tab-style" eventKey="diagnostico" title="Diagnóstico e Investigación">
          <div className=" pt-3 tab-obj">
            <h5>Realizamos modelos de intervención diagnóstica georeferenciada en prevención de violencia contra niñas, niños y adolescentes, como a las mujeres, el desarrollo sostenible y población en contexto de institucionalización, tales como:</h5>
            <br/>
            <span><BsCheckCircle /> Identificación local y de expansión nacional e internacional de causas e impacto de la violencia en niñas, niños, adolescentes.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Identificación local y de expansión nacional de factores e indicadores de violencia contra mujeres, mujeres adolescentes y niñas.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Valoración y actualización de protocolos de atención a la violencia a niñas, niños y adolescentes.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Diagnóstico de capacidades de gestión operativa, reducción de riesgo y fortalecimiento de impacto en la atención a mujeres víctimas de violencia, procesos de empoderamiento y acceso a la justicia de Centros de Justicia para Mujeres.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Aplicación de herramientas mapeo y evaluación de indicadores de los ODS de Agenda 2030.</span>
          </div>
        </Tab>

        <Tab eventKey="politicas" title="Políticas públicas">
          <div className=" pt-3 tab-obj">
            <h5>Contamos con laboratorio de políticas públicas para el análisis de problemáticas en la violencia y desigualdad que viven niñas, niños, adolescentes y mujeres, el cual opera con perspectiva integral de derechos y género, hacia propuestas de solución, alternativas y nuevas realidades; tales como:</h5>
            <br/>
            <span><BsCheckCircle /> Orientación, incidencia, diseño y evaluación de políticas públicas de la agenda de infancia y adolescencia.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Orientación, incidencia, diseño y evaluación de políticas públicas de violencia contra las mujeres y género.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Orientación, incidencia, diseño y evaluación de políticas públicas sobre desarrollo sostenible.</span>
          </div>
        </Tab>

        <Tab eventKey="fortalecimiento" title="Fortalecimiento">
          <div className=" pt-3 tab-obj"> 
            <h5>Construimos capacidades operativas, de incidencia, normativa y en políticas públicas mediante mecanismos de desarrollo dirigido a organizaciones  de la sociedad civil e instituciones públicas y privadas, como gobiernos estatales y locales; tales como:</h5>
            <br/>
            <span><BsCheckCircle /> Instrumentación de proyectos de planeación estratégica para organizaciones de sociedad civil e instituciones.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Valoración estratégica, organizacional y de procesos a instituciones y organizaciones dedicadas a la prevención de violencia y desigualdad.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Intervenciones en  salud organizacional, riesgos psicosociales y bienestar emocional.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Mecanismos para monitoreo y evaluación de proyectos.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Integración y sistematización de experiencias y elaboración de informes anuales.</span>
          </div>
        </Tab>

        <Tab eventKey="capacitacion" title="Capacitación">
          <div className=" pt-3 tab-obj"> 
            <h5>Motivamos la apropiación del conocimiento con la aplicación de diversas metodologías de vanguardia y personal especializado dirigidas a la transformación institucional y personal a fin eficientar los procesos de atención a niñas, niños, adolescentes y mujeres, como la aplicación de la Agenda de desarrollo sostenible; tales como:</h5>
            <br/>
            <span><BsCheckCircle /> Formación en incidencia,  gobernanza y certificación en normas nacionales ante instancias gubernamentales (STPS, CONAPRED y CONVIM).</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Impartición de talleres y capacitación especializada en materia primera infancia,  prevención de violencia y derechos de niñas, niños y adolescentes.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Impartición de talleres y capacitación especializada en materia de equidad, desigualdad social y perspectiva de género a instituciones públicas y privadas.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Impartición de talleres y capacitación especializada en materia acoso, violencia, acceso a la justicia y derechos de las mujeres.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Impartición de talleres y capacitación especializada en materia la Agenda 2030.</span>
          </div>
        </Tab>

        <Tab eventKey="evaluacion" title="Evaluación">
          <div className=" pt-3 tab-obj"> 
            <h5>Este es un eje transversal a todos los anteriores mediante el cual realizamos valoraciones bajo un enfoque de derechos, equidad y perspectiva de género de todos nuestros proyectos, proyectos institucionales y acciones de intervención; tales como:</h5>
            <br/>
            <span><BsCheckCircle /> Intervenciones basadas en el objeto legal y organizacional de resultados e indicadores de impacto, costo beneficio y desempeño a organizaciones e instituciones públicas y privadas.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Intervenciones basadas en la temporalidad de proyectos en fase previa, intermedia, final y posterior de la agenda de niñas, niños y adolescentes.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Intervenciones basadas en la temporalidad de proyectos en fase previa, intermedia, final y posterior de la agenda de mujeres y género.</span>
            <br/>
            <br/>
            <span><BsCheckCircle /> Intervenciones basadas en la temporalidad de proyectos en fase previa, intermedia, final y posterior de la agenda de población en proceso de egreso de institucionalización.</span>
          </div>
        </Tab>
      </Tabs>
    </div>
    </>
  );
}

export default Objetivos;