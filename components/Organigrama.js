import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

export default function Organigrama () { 
	return (
		<>
		<h1 className="primary-color bg-transparent p-3 text-center p-2">EQUIPO</h1>
		<div className="bg-light mb-5 text-dark p-5 responsive">
			<Tree lineWidth='2px' lineColor='green'lineBorderRadius='10px' className=" container responsive" label={<div>CONSEJO DIRECTIVO</div>} key={index}>
				<TreeNode label="DIRECCIÓN GENERAL">
					<TreeNode label="COORDINACIÓN PROYECTOS DE DIAGNÓSTICO">
						<TreeNode label="PROCESAMIENTO Y ANÁLISIS DE DATOS"/>
						<TreeNode label="INVESTIGADOR Y ENCUESTADORES A,B Y C"/>				
					</TreeNode>
					<TreeNode label="COORDINACIÓN PROYECTOS DE PREVENCIÓN Y POLÍTICAS PÚBLICAS">
						<TreeNode label="AGENDA NIÑAS, NIÑOS Y ADOLESCENTES"/>
						<TreeNode label="AGENDA DE ODS AGENDA 2030"/>	
						<TreeNode label="AGENDA DE VIOLENCIA Y GÉNERO"/>			
					</TreeNode>
					<TreeNode label="COORDINACIÓN PROYECTOS DE FORTALECIMIENTO">
						<TreeNode label="PROCESOS Y PROTOCOLOS"/>
						<TreeNode label="EVALUACIÓN E INFORMES"/>				
					</TreeNode>
					<TreeNode label="COORDINACIÓN PROYECTOS DE CAPACITACIÓN">
						<TreeNode label="INSTRUCTORES Y DOCENTES"/>									
					</TreeNode>		
				</TreeNode>
				<TreeNode label="PRESIDENCIA DEL CONSEJO DIRECTIVO">
					<TreeNode label="TESORERÍA">
						<TreeNode label="ADMINISTRACIÓN"/>
						<TreeNode label="CONTABILIDAD (Subcontratación)"/>
					</TreeNode>
					<TreeNode label="ASUNTOS LEGALES (Pro Bono)"/>
					<TreeNode label="COMUNICACIÓN (Pro Bono)"/>
				</TreeNode>			
			</Tree> 
		</div>
		</>	
	)
}