import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsBookmarkStar } from "react-icons/bs";


function Objetivos() {
  const [key, setKey] = useState("diagnostico");

  return (
    <>
    <div className="cajaPrincipal-objetivos">
      <h3 className="title-ejes"><BsBookmarkStar/> Ejes estratégicos:</h3>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tabs-style"
      >
        <Tab className="tab-style" eventKey="diagnostico" title="Diagnóstico e Investigación">
          <div className=" pt-3 tab-obj">
            <p>Realizamos modelos de intervención diagnóstica georeferenciada en prevención de violencia contra niñas, niños y adolescentes, como a las mujeres, el desarrollo sostenible y población en contexto de institucionalización.</p>
          </div> 
        </Tab>

        <Tab eventKey="politicas" title="Políticas públicas">
          <div className=" pt-3 tab-obj">
            <p>Contamos con laboratorio de políticas públicas para el análisis de problemáticas en la violencia y desigualdad que viven niñas, niños, adolescentes y mujeres, el cual opera con perspectiva integral de derechos y género, hacia propuestas de solución, alternativas y nuevas realidades.</p>
          </div> 
        </Tab>

        <Tab eventKey="fortalecimiento" title="Fortalecimiento">
          <div className=" pt-3 tab-obj"> 
            <p>Construimos capacidades operativas, de incidencia, normativa y en políticas públicas mediante mecanismos de desarrollo dirigido a organizaciones de la sociedad civil e instituciones públicas y privadas, como gobiernos estatales y locales.</p>
          </div>
        </Tab>

        <Tab eventKey="capacitacion" title="Capacitación">
          <div className=" pt-3 tab-obj"> 
            <p>Motivamos la apropiación del conocimiento con la aplicación de diversas metodologías de vanguardia y personal especializado dirigidas a la transformación institucional y personal a fin mejorar los procesos de atención a niñas, niños, adolescentes y mujeres, como la aplicación de la Agenda de desarrollo sostenible.</p>
          </div>
        </Tab>

        <Tab eventKey="evaluacion" title="Evaluación">
          <div className=" pt-3 tab-obj"> 
            <p>Este es un eje transversal a todos los anteriores mediante el cual realizamos valoraciones bajo un enfoque de derechos, equidad y perspectiva de género de todos nuestros proyectos, proyectos institucionales y acciones de intervención.</p>
          </div>
        </Tab>
      </Tabs>
    </div>
    </>
  );
}

export default Objetivos;