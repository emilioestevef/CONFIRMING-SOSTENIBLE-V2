import { Contract, ESGStatus, Request, Supplier, QuestionnaireBlock } from '../types';
export const GLS_CLIENT_ID = 'CLIENT_GLS_001';
export const INCARLOPSA_CLIENT_ID = 'CLIENT_INCARLOPSA_001';

// Helper to determine status based on score
export const getESGStatus = (score: number): ESGStatus => {
  if (score > 65) return ESGStatus.LEADER;
  if (score >= 50) return ESGStatus.AVERAGE;
  if (score >= 40) return ESGStatus.TRANSITION;
  return ESGStatus.DEVELOPING;
};

// --- CUESTIONARIO ESG GENÉRICO (GLS / DEFAULT) ---
export const ESG_QUESTIONNAIRE: QuestionnaireBlock[] = [
  {
    id: 'environmental',
    title: 'Ambiental',
    weight: 50,
    color: 'green',
    questions: [
      {
        id: 'E1', areaCode: 'E_MEAS', areaName: 'Medición Ambiental', level: 'Básico',
        question: '¿Mide su empresa algún aspecto de su huella ambiental?',
        options: [{text: 'No', points: 0}, {text: 'Parcial', points: 1.5}, {text: 'Sistemática', points: 3}]
      },
      {
        id: 'E2', areaCode: 'E_MEAS', areaName: 'Objetivos Ambientales', level: 'Avanzado',
        question: '¿Tiene metas u objetivos para reducir su huella ambiental?',
        options: [{text: 'No', points: 0}, {text: 'No cuantificados', points: 2}, {text: 'Cuantificados', points: 4}]
      },
      {
        id: 'E3', areaCode: 'E_MGMT', areaName: 'Gestión Ambiental', level: 'Avanzado',
        question: '¿Implementa acciones para reducir su huella ambiental?',
        options: [{text: 'No', points: 0}, {text: 'Puntuales', points: 2}, {text: 'Estructurales', points: 4}]
      },
      {
        id: 'E4', areaCode: 'E_MGMT', areaName: 'Sistemas Gestión', level: 'Avanzado',
        question: '¿Cuenta con un Sistema de Gestión Ambiental?',
        options: [{text: 'No', points: 0}, {text: 'Interno', points: 2}, {text: 'Certificado (ISO 14001)', points: 4}]
      },
      {
        id: 'E5', areaCode: 'E_GHG', areaName: 'Emisiones GEI', level: 'Básico',
        question: '¿Mide emisiones de GEI con estándar reconocido?',
        options: [{text: 'No', points: 0}, {text: 'Parcial', points: 2}, {text: 'Completo', points: 4}]
      },
      {
        id: 'E6', areaCode: 'E_GHG', areaName: 'Objetivos Net Zero', level: 'Avanzado',
        question: '¿Tiene objetivo de reducción de emisiones / Net Zero?',
        options: [{text: 'No', points: 0}, {text: 'Sin plazos', points: 2}, {text: 'Con plazos', points: 4}]
      },
      {
        id: 'E7', areaCode: 'E_FLEET', areaName: 'Flota Vehicular', level: 'Básico',
        question: 'Composición de la flota por tecnología (% EURO VI o Cero)',
        options: [{text: '>80% diésel', points: 0}, {text: '60–80%', points: 4}, {text: '<40% / Eco', points: 6}]
      },
      {
        id: 'E8', areaCode: 'E_FLEET', areaName: 'Edad Flota', level: 'Básico',
        question: 'Edad media de la flota',
        options: [{text: '>7 años', points: 0}, {text: '4–7 años', points: 2}, {text: '<4 años', points: 4}]
      },
      {
        id: 'E9', areaCode: 'E_GHG', areaName: 'Evolución Emisiones', level: 'Básico',
        question: 'Evolución de emisiones GEI (3 años)',
        options: [{text: 'Incremento', points: 0}, {text: 'Estables', points: 2.5}, {text: 'Reducción', points: 5}]
      },
      {
        id: 'E10', areaCode: 'E_FUEL', areaName: 'Combustibles Alt.', level: 'Avanzado',
        question: 'Uso de combustibles alternativos',
        options: [{text: 'No', points: 0}, {text: 'Puntual', points: 2}, {text: 'Estructural', points: 4}]
      },
      {
        id: 'E11', areaCode: 'E_FUEL', areaName: 'Transición Flota', level: 'Avanzado',
        question: 'Plan de transición energética de la flota',
        options: [{text: 'No', points: 0}, {text: 'Sin objetivos', points: 1.5}, {text: 'Con objetivos', points: 3}]
      },
      {
        id: 'E12', areaCode: 'E_OPER', areaName: 'Eficiencia Operativa', level: 'Avanzado',
        question: 'Optimización de rutas y cargas',
        options: [{text: 'No', points: 0}, {text: 'Básica', points: 1}, {text: 'Avanzada', points: 2}]
      },
      {
        id: 'E13', areaCode: 'E_OPER', areaName: 'Contaminación Local', level: 'Básico',
        question: 'Medidas contra NOx, partículas y/o ruido',
        options: [{text: 'No', points: 0}, {text: 'Parciales', points: 0.5}, {text: 'Integradas', points: 1}]
      },
      {
        id: 'E14', areaCode: 'E_ENER', areaName: 'Energía Instalaciones', level: 'Básico',
        question: 'Consumo energético total y % renovable',
        options: [{text: 'No mide', points: 0}, {text: 'Solo total', points: 0.5}, {text: 'Total + %Ren', points: 1}]
      },
      {
        id: 'E15', areaCode: 'E_CIRC', areaName: 'Economía Circular', level: 'Básico',
        question: 'Gestión de residuos y consumo de agua',
        options: [{text: 'No mide', points: 0}, {text: 'Registro básico', points: 0.5}, {text: 'Plan circular', points: 1}]
      }
    ]
  },
  {
    id: 'social',
    title: 'Social',
    weight: 20,
    color: 'blue',
    questions: [
      {
        id: 'S1', areaCode: 'S_HR', areaName: 'Derechos Humanos', level: 'Avanzado',
        question: 'Política de derechos humanos',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 5}]
      },
      {
        id: 'S2', areaCode: 'S_HR', areaName: 'Diversidad', level: 'Avanzado',
        question: 'Política de diversidad e igualdad',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 5}]
      },
      {
        id: 'S3', areaCode: 'S_OHS', areaName: 'Salud y Seguridad', level: 'Básico',
        question: 'Sistema de salud y seguridad (ISO 45001) / Seguridad vial',
        options: [{text: 'No', points: 0}, {text: 'Interno', points: 1.5}, {text: 'Certificado', points: 3}]
      },
      {
        id: 'S4', areaCode: 'S_DEV', areaName: 'Desarrollo Empleados', level: 'Básico',
        question: 'Planes de formación a largo plazo',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 2}]
      },
      {
        id: 'S5', areaCode: 'S_ETH', areaName: 'Canal Ético', level: 'Básico',
        question: 'Canal de quejas / canal ético',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 1}]
      },
      {
        id: 'S6', areaCode: 'S_EMP', areaName: 'Plantilla', level: 'Básico',
        question: 'Estructura de la plantilla (género y tipo contrato)',
        options: [{text: 'No reporta', points: 0}, {text: 'Solo género', points: 1}, {text: 'Completo', points: 2}]
      },
      {
        id: 'S7', areaCode: 'S_WORK', areaName: 'Condiciones Laborales', level: 'Básico',
        question: 'Condiciones laborales (brecha salarial y conciliación)',
        options: [{text: 'No mide', points: 0}, {text: 'Política básica', points: 1}, {text: 'Métricas', points: 2}]
      }
    ]
  },
  {
    id: 'governance',
    title: 'Gobernanza',
    weight: 30,
    color: 'orange',
    questions: [
      {
        id: 'G1', areaCode: 'G_POL', areaName: 'Política ASG', level: 'Básico',
        question: 'Política ASG / Código ético',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 5}]
      },
      {
        id: 'G2', areaCode: 'G_STRAT', areaName: 'Estrategia', level: 'Avanzado',
        question: 'Estrategia ASG completa',
        options: [{text: 'No', points: 0}, {text: 'Parcial', points: 2}, {text: 'Completa', points: 4}]
      },
      {
        id: 'G3', areaCode: 'G_STRAT', areaName: 'Iniciativas', level: 'Avanzado',
        question: 'Adhesión a iniciativas ESG relevantes',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 3}]
      },
      {
        id: 'G4', areaCode: 'G_REP', areaName: 'Reporting', level: 'Avanzado',
        question: 'Reporte ESG conforme a estándar (VSME, GRI)',
        options: [{text: 'No', points: 0}, {text: 'No estand.', points: 2}, {text: 'Estandarizado', points: 4}]
      },
      {
        id: 'G5', areaCode: 'G_SUP', areaName: 'Supervisión', level: 'Avanzado',
        question: 'Supervisión formal de la estrategia ASG',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 4}]
      },
      {
        id: 'G6', areaCode: 'G_RISK', areaName: 'Sanciones', level: 'Básico',
        question: 'Sanciones ASG últimos 5 años',
        options: [{text: 'Sí', points: -3}, {text: 'No', points: 0}]
      },
      {
        id: 'G7', areaCode: 'G_PROD', areaName: 'Producto Sostenible', level: 'Avanzado',
        question: 'Productos sostenibles en la oferta',
        options: [{text: 'No', points: 0}, {text: 'Sí', points: 4}]
      },
      {
        id: 'G8', areaCode: 'G_MAT', areaName: 'Materialidad', level: 'Avanzado',
        question: 'Proceso determinación temas materiales',
        options: [{text: 'No', points: 0}, {text: 'Informal', points: 1.5}, {text: 'Consulta', points: 3}]
      },
      {
        id: 'G9', areaCode: 'G_RISK', areaName: 'Riesgos Climáticos', level: 'Avanzado',
        question: 'Identificación riesgos climáticos',
        options: [{text: 'No', points: 0}, {text: 'Identificados', points: 1.5}, {text: 'Plan mitigación', points: 3}]
      }
    ]
  }
];

// --- CUESTIONARIO ESG ESPECÍFICO INCARLOPSA ---
export const INCARLOPSA_QUESTIONNAIRE: QuestionnaireBlock[] = [
  {
    id: 'environmental',
    title: 'Ambiental',
    weight: 50,
    color: 'green',
    questions: [
      {
        id: 'EN1', areaCode: 'INC_ENV_MGMT', areaName: 'Sistema Gestión Ambiental', level: 'Básico',
        question: '¿Indique si está verificado el Sistema de Gestión Ambiental (SGA)?',
        options: [{text: 'No', points: 0}, {text: 'Parcialmente', points: 1.75}, {text: 'Si', points: 3}]
      },
      {
        id: 'EN2', areaCode: 'INC_ENV_WASTE', areaName: 'Gestión de Residuos', level: 'Básico',
        question: '¿Mide su volumen de residuos y asegura la entrega a gestores autorizados?',
        options: [{text: 'No', points: 0}, {text: 'Si', points: 3}]
      },
      {
        id: 'EN3', areaCode: 'INC_ENV_FOOD', areaName: 'Desperdicio Alimentario', level: 'Básico',
        question: '¿Cuenta con estrategia para abordar la pérdida y desperdicio de alimentos?',
        options: [{text: 'No', points: 0}, {text: 'Si', points: 3}]
      },
      {
        id: 'EN4', areaCode: 'INC_ENV_WATER', areaName: 'Gestión del Agua', level: 'Básico',
        question: '¿Mide su consumo de agua y aplica planes de ahorro hídrico?',
        options: [{text: 'No', points: 0}, {text: 'Si', points: 3}]
      },
      {
        id: 'EN5', areaCode: 'INC_ENV_GHG1', areaName: 'Huella Carbono (Alcance 1)', level: 'Básico',
        question: '¿Calcula las emisiones totales directas de GEI (Alcance 1)?',
        options: [{text: 'No', points: 0}, {text: 'En cálculo', points: 1.5}, {text: 'Reportado', points: 3}]
      },
      {
        id: 'EN6', areaCode: 'INC_ENV_GHG2', areaName: 'Huella Carbono (Alcance 2)', level: 'Básico',
        question: '¿Mide las emisiones indirectas de GEI (Alcance 2)?',
        options: [{text: 'No', points: 0}, {text: 'En cálculo', points: 1.5}, {text: 'Reportado', points: 3}]
      },
      {
        id: 'EN7', areaCode: 'INC_ENV_ANIMAL', areaName: 'Bienestar Animal', level: 'Básico',
        question: '¿Cuenta con política de bienestar animal pública aplicada a operaciones/proveedores?',
        options: [{text: 'No', points: 0}, {text: 'Interna', points: 2}, {text: 'Pública', points: 4}]
      },
      {
        id: 'EN8', areaCode: 'INC_ENV_COMM', areaName: 'Compromisos Reducción', level: 'Avanzado',
        question: '¿Tiene compromisos escritos para reducir su impacto ambiental?',
        options: [{text: 'No', points: 0}, {text: 'Parcialmente', points: 1.5}, {text: 'Si', points: 3}]
      },
      {
        id: 'EN9', areaCode: 'INC_ENV_AUDIT', areaName: 'Auditoría Ambiental', level: 'Avanzado',
        question: '¿Está su gestión ambiental verificada (ISO 14001, EMAS) por terceros?',
        options: [{text: 'No', points: 0}, {text: 'Verif. Interna', points: 1.5}, {text: 'ISO/Externa', points: 3}]
      },
      {
        id: 'EN10', areaCode: 'INC_ENV_PACK', areaName: 'Política de Envases', level: 'Avanzado',
        question: '¿Tiene política/objetivos para reducir/reciclar envases y embalajes?',
        options: [{text: 'No', points: 0}, {text: 'Programas', points: 1.5}, {text: 'Objetivos', points: 3}]
      },
      {
        id: 'EN11', areaCode: 'INC_ENV_RISK_MGMT', areaName: 'Revisión Riesgos Climáticos', level: 'Avanzado',
        question: '¿La gerencia está informada y revisa los datos de emisiones?',
        options: [{text: 'No', points: 0}, {text: 'Ocasionalmente', points: 1.5}, {text: 'Mensualmente', points: 3}]
      },
      {
        id: 'EN12', areaCode: 'INC_ENV_PROC', areaName: 'Proceso Gestión Riesgos', level: 'Avanzado',
        question: '¿Cuenta con un proceso de gestión de riesgos climáticos?',
        options: [{text: 'No', points: 0}, {text: 'Informal', points: 1.5}, {text: 'Integrado', points: 3}]
      },
      {
        id: 'EN13', areaCode: 'INC_ENV_TARGETS', areaName: 'Objetivos Emisiones', level: 'Avanzado',
        question: '¿Tiene objetivos públicos de reducción de emisiones a nivel corporativo?',
        options: [{text: 'No', points: 0}, {text: 'Internos', points: 1.5}, {text: 'Públicos', points: 3}]
      },
      {
        id: 'EN14', areaCode: 'INC_ENV_AGRI', areaName: 'Agricultura Sostenible', level: 'Avanzado',
        question: '¿Cuenta con compromiso público sobre agricultura sostenible?',
        options: [{text: 'No', points: 0}, {text: 'Interna', points: 1.5}, {text: 'Pública', points: 3}]
      },
      {
        id: 'EN15', areaCode: 'INC_ENV_CERT', areaName: 'Certificación Origen', level: 'Avanzado',
        question: '¿Están los productos de origen animal certificados por terceros?',
        options: [{text: 'No certificado', points: 0}, {text: 'Cert. Proveedor', points: 1.5}, {text: 'Cert. Tercero', points: 3}]
      },
      {
        id: 'EN16', areaCode: 'INC_ENV_WELFARE', areaName: 'Informes Bienestar Animal', level: 'Avanzado',
        question: '¿Informa sobre datos y objetivos de bienestar animal?',
        options: [{text: 'No', points: 0}, {text: 'Parcialmente', points: 2}, {text: 'Si', points: 4}]
      }
    ]
  },
  {
    id: 'social',
    title: 'Social',
    weight: 20,
    color: 'blue',
    questions: [
      {
        id: 'SO1', areaCode: 'INC_SOC_LABOR', areaName: 'Cumplimiento Laboral', level: 'Básico',
        question: '¿Dispone de registros salariales y garantiza cumplimiento de convenio colectivo?',
        options: [{text: 'No', points: 0}, {text: 'Cumplimiento', points: 1}, {text: 'Integral', points: 2}]
      },
      {
        id: 'SO2', areaCode: 'INC_SOC_HARR', areaName: 'Acoso y Discriminación', level: 'Básico',
        question: '¿Cuenta con política pública de no discriminación y contra el acoso?',
        options: [{text: 'No', points: 0}, {text: 'Solo protocolo', points: 1}, {text: 'Completa/Pública', points: 2}]
      },
      {
        id: 'SO3', areaCode: 'INC_SOC_SAFETY', areaName: 'Seguridad y Salud', level: 'Básico',
        question: '¿Mide tasa de accidentes y tiene plan de prevención activo (ISO 45001)?',
        options: [{text: 'No', points: 0}, {text: 'Parcial', points: 2.5}, {text: 'Si', points: 5}]
      },
      {
        id: 'SO4', areaCode: 'INC_SOC_HUMAN', areaName: 'Derechos Humanos', level: 'Avanzado',
        question: '¿Garantiza mediante declaración formal no trabajo infantil ni forzoso?',
        options: [{text: 'No', points: 0}, {text: 'Si', points: 5}]
      },
      {
        id: 'SO5', areaCode: 'INC_SOC_TALENT', areaName: 'Talento y Formación', level: 'Avanzado',
        question: '¿Ofrece formación técnica, seguridad y planes de carrera?',
        options: [{text: 'No', points: 0}, {text: 'Obligatorio', points: 3}, {text: 'Anual/Plan', points: 6}]
      }
    ]
  },
  {
    id: 'governance',
    title: 'Gobernanza',
    weight: 30,
    color: 'orange',
    questions: [
      {
        id: 'GO1', areaCode: 'INC_GOV_REP', areaName: 'Reporting Sostenibilidad', level: 'Básico',
        question: '¿Realiza inventario anual de datos de sostenibilidad (luz, agua, personal)?',
        options: [{text: 'No', points: 0}, {text: 'Solo Indicadores', points: 1}, {text: 'Público', points: 2}]
      },
      {
        id: 'GO2', areaCode: 'INC_GOV_ETHICS', areaName: 'Ética y Conducta', level: 'Básico',
        question: '¿Dispone de Código de Conducta que incluya corrupción y soborno?',
        options: [{text: 'No', points: 0}, {text: 'Parcial', points: 1.5}, {text: 'Completo', points: 3}]
      },
      {
        id: 'GO3', areaCode: 'INC_GOV_SUPPLY', areaName: 'Gestión Cadena Suministro', level: 'Básico',
        question: '¿Garantiza trazabilidad y cuenta con certificaciones (IFS, BRC, ISO 22K)?',
        options: [{text: 'No', points: 0}, {text: 'Interno', points: 2}, {text: 'Certificado', points: 4}]
      },
      {
        id: 'GO4', areaCode: 'INC_GOV_STD', areaName: 'Estándar Reporting', level: 'Avanzado',
        question: '¿Sigue formato simplificado VSME de EFRAG para reportar?',
        options: [{text: 'No', points: 0}, {text: 'Si', points: 4}]
      },
      {
        id: 'GO5', areaCode: 'INC_GOV_MAT', areaName: 'Materialidad', level: 'Avanzado',
        question: '¿Ha identificado sus mayores impactos ambientales o sociales (Materialidad)?',
        options: [{text: 'No', points: 0}, {text: 'Reporta temas', points: 2}, {text: 'Análisis Doble', points: 4}]
      },
      {
        id: 'GO6', areaCode: 'INC_GOV_RISK', areaName: 'Gestión de Riesgos', level: 'Avanzado',
        question: '¿Cuenta con marco de gobierno para gestión de riesgos y crisis?',
        options: [{text: 'No', points: 0}, {text: 'Informal', points: 2}, {text: 'Formal', points: 4}]
      },
      {
        id: 'GO7', areaCode: 'INC_GOV_WHISTLE', areaName: 'Canal de Denuncias', level: 'Avanzado',
        question: '¿Dispone de mecanismo para reportar violaciones del código?',
        options: [{text: 'No', points: 0}, {text: 'Interno', points: 2}, {text: 'Público', points: 4}]
      },
      {
        id: 'GO8', areaCode: 'INC_GOV_ESG_SUP', areaName: 'Programa ESG Proveedores', level: 'Avanzado',
        question: '¿Cuenta con medidas para asegurar programas ESG en sus proveedores?',
        options: [{text: 'No', points: 0}, {text: 'En desarrollo', points: 2.5}, {text: 'Si', points: 5}]
      }
    ]
  }
];


// --- TAXONOMY DATA ---
export const TAXONOMY_DATA = {
    "Energy": {
        "Renewable Energy": ["Solar Photovoltaic Technology", "Wind Power", "Geothermal Energy"],
        "Transmission": ["Electric Power Transmission", "Smart Grid Technology"]
    },
    "Transportation": {
        "Low Carbon": ["Electric Vehicles", "Hydrogen Fuel Cells"],
        "Infrastructure": ["EV Charging Stations", "Railway Electrification"]
    },
    "Water": {
        "Treatment": ["Wastewater Treatment", "Desalination"],
        "Supply": ["Water Supply Infrastructure"]
    }
};

// --- BATCHES DE PROVEEDORES ---

// Batch 1: Dates updated to 2026 to ensure they are valid
const suppliersBatch1: Supplier[] = [
  { 
    id: 'S1', name: 'Transportes Rápidos SL', nif: 'B12345678', score: 72, status: ESGStatus.LEADER, questionnaireLevel: 'Avanzado', lastUpdated: '2025-10-15', certificationExpirationDate: '2026-10-15', certificationMethod: 'Santander',
    address: 'Polígono Ind. Sur, Madrid', sector: 'Transporte', country: 'España',
    paymentDetails: { amount: 25000, currency: 'EUR', date: '2025-05-15', iban: 'ES21 0049 1234 56 1234567890' },
    evidences: [
        { id: 'EV1', name: 'Certificado ISO 14001', uploadDate: '2024-10-15', type: 'PDF', size: '2.5 MB' },
        { id: 'EV2', name: 'Política de Sostenibilidad', uploadDate: '2024-11-20', type: 'PDF', size: '1.2 MB' }
    ]
  },
  { 
    id: 'S2', name: 'Logística Verde', nif: 'B87654321', score: 55, status: ESGStatus.AVERAGE, questionnaireLevel: 'Avanzado', lastUpdated: '2025-09-20', certificationExpirationDate: '2026-09-20', certificationMethod: 'Santander',
    address: 'Av. Europa 10, Barcelona', sector: 'Logística', country: 'España',
    paymentDetails: { amount: 12500, currency: 'EUR', date: '2025-06-01', iban: 'ES99 0049 9876 54 0987654321' }
  },
  { 
    id: 'S3', name: 'Camiones Pepe', nif: 'B11223344', score: 35, status: ESGStatus.DEVELOPING, questionnaireLevel: 'Básico', lastUpdated: '2025-11-01', certificationExpirationDate: '2026-11-01', certificationMethod: 'Client',
    address: 'C/ Taller 5, Valencia', sector: 'Transporte', country: 'España',
    paymentDetails: { amount: 8000, currency: 'EUR', date: '2025-04-30', iban: 'ES45 2100 0000 00 1234567890' },
    evidences: [
        { id: 'EV3', name: 'Carta de Homologación', uploadDate: '2024-12-05', type: 'PDF', size: '0.8 MB' }
    ]
  },
];

const suppliersBatch2: Supplier[] = [
  { 
    id: 'S4', name: 'EcoFreight Solutions', nif: 'A99887766', score: 85, status: ESGStatus.LEADER, questionnaireLevel: 'Avanzado', lastUpdated: '2025-10-05', certificationExpirationDate: '2026-10-05', certificationMethod: 'External',
    address: 'Parque Tecnológico, Málaga', sector: 'Logística', country: 'España',
    paymentDetails: { amount: 45000, currency: 'EUR', date: '2025-07-15', iban: 'ES11 0000 0000 00 0000000001' },
    evidences: [
        { id: 'EV4', name: 'Scorecard Ecovadis', uploadDate: '2024-09-10', type: 'PDF', size: '1.8 MB' }
    ]
  },
  { 
    id: 'S5', name: 'Distribuciones Norte', nif: 'B55443322', score: 60, status: ESGStatus.AVERAGE, questionnaireLevel: 'Básico', lastUpdated: '2025-10-12', certificationExpirationDate: '2026-10-12', certificationMethod: 'Santander',
    address: 'Polígono Roces, Gijón', sector: 'Distribución', country: 'España',
    paymentDetails: { amount: 18000, currency: 'EUR', date: '2025-05-20', iban: 'ES22 0000 0000 00 0000000002' }
  },
  { 
    id: 'S4-B', name: 'Metales del Levante', nif: 'A44332211', score: 45, status: ESGStatus.TRANSITION, questionnaireLevel: 'Básico', lastUpdated: '2025-09-10', certificationExpirationDate: '2026-09-10', certificationMethod: 'Santander',
    address: 'C/ Hierro 4, Alicante', sector: 'Industria', country: 'España',
    paymentDetails: { amount: 32000, currency: 'EUR', date: '2025-06-10', iban: 'ES33 0000 0000 00 0000000003' }
  },
  { 
    id: 'S4-C', name: 'Suministros Industriales SA', nif: 'A33221100', score: 65, status: ESGStatus.AVERAGE, questionnaireLevel: 'Avanzado', lastUpdated: '2025-08-22', certificationExpirationDate: '2026-08-22', certificationMethod: 'External',
    address: 'Polígono Oeste, Murcia', sector: 'Suministros', country: 'España',
    paymentDetails: { amount: 21000, currency: 'EUR', date: '2025-05-05', iban: 'ES44 0000 0000 00 0000000004' }
  }
];

// Batch 3: EXPIRED SUPPLIER example (S6)
const suppliersBatch3: Supplier[] = [
  { 
    id: 'S6', name: 'Old Diesel Fleet', nif: 'B66778899', score: 65, status: ESGStatus.AVERAGE, questionnaireLevel: 'Básico', lastUpdated: '2022-08-15', certificationExpirationDate: '2023-08-15', certificationMethod: 'Santander',
    address: 'C/ Antigua 1, Madrid', sector: 'Transporte', country: 'España',
    paymentDetails: { amount: 5000, currency: 'EUR', date: '2022-12-01', iban: 'ES55 0000 0000 00 0000000005' }
  },
  { 
    id: 'S6-B', name: 'Repuestos Vencidos SL', nif: 'B55554444', score: 30, status: ESGStatus.DEVELOPING, questionnaireLevel: 'None', lastUpdated: '2022-05-10', certificationExpirationDate: '2023-05-10', certificationMethod: 'None',
    address: 'C/ Rota 2, Madrid', sector: 'Repuestos', country: 'España',
    paymentDetails: { amount: 2000, currency: 'EUR', date: '2022-11-15', iban: 'ES66 0000 0000 00 0000000006' }
  }
];

const suppliersBatchOld: Supplier[] = [
  {
     id: 'S-OLD-1', name: 'Antigua Papelera', nif: 'A11223344', score: 0, status: ESGStatus.PENDING, questionnaireLevel: 'None', lastUpdated: '', certificationExpirationDate: '', certificationMethod: 'None',
     address: 'Polígono Viejo, Burgos', sector: 'Papel', country: 'España',
     paymentDetails: { amount: 15000, currency: 'EUR', date: '2021-06-15', iban: 'ES12 3456 7890 12 3456789012' }
  }
];

const suppliersGreenergy: Supplier[] = [
  { 
    id: 'S10', name: 'SolarPanel Components', nif: 'B99999999', score: 92, status: ESGStatus.LEADER, questionnaireLevel: 'Avanzado', lastUpdated: '2025-11-20', certificationExpirationDate: '2026-11-20', certificationMethod: 'External',
    address: 'Tech Park, Málaga', sector: 'Renovables', country: 'España',
    paymentDetails: { amount: 150000, currency: 'EUR', date: '2025-12-01', iban: 'ES77 0000 0000 00 0000000007' }
  },
  { 
    id: 'S11', name: 'WindTurbine Services', nif: 'A88888888', score: 88, status: ESGStatus.LEADER, questionnaireLevel: 'Avanzado', lastUpdated: '2025-11-18', certificationExpirationDate: '2026-11-18', certificationMethod: 'External',
    address: 'Polígono Eólico, Cádiz', sector: 'Renovables', country: 'España',
    paymentDetails: { amount: 89000, currency: 'EUR', date: '2025-11-25', iban: 'ES88 0000 0000 00 0000000008' }
  },
  { 
    id: 'S11-B', name: 'Mantenimiento Eólico', nif: 'B77771111', score: 75, status: ESGStatus.LEADER, questionnaireLevel: 'Básico', lastUpdated: '2025-10-30', certificationExpirationDate: '2026-10-30', certificationMethod: 'Santander',
    address: 'C/ Viento 5, Zaragoza', sector: 'Servicios', country: 'España',
    paymentDetails: { amount: 12000, currency: 'EUR', date: '2025-11-10', iban: 'ES99 0000 0000 00 0000000009' }
  }
];

const suppliersPrimafrio: Supplier[] = [
     { 
        id: 'S12', name: 'Neumáticos del Sur', nif: 'B77777777', score: 45, status: ESGStatus.TRANSITION, questionnaireLevel: 'Básico', lastUpdated: '2024-10-30', certificationExpirationDate: '2025-10-30', certificationMethod: 'Client',
        address: 'Polígono Industrial, Murcia', sector: 'Repuestos', country: 'España',
        paymentDetails: { amount: 35000, currency: 'EUR', date: '2025-06-15', iban: 'ES00 1111 2222 33 4444444444' }
     },
     { 
        id: 'S13', name: 'Combustibles Eco', nif: 'A66666666', score: 62, status: ESGStatus.AVERAGE, questionnaireLevel: 'Avanzado', lastUpdated: '2025-11-05', certificationExpirationDate: '2026-11-05', certificationMethod: 'Santander',
        address: 'C/ Energía 8, Almería', sector: 'Energía', country: 'España',
        paymentDetails: { amount: 55000, currency: 'EUR', date: '2025-07-01', iban: 'ES11 2222 3333 44 5555555555' }
     },
     { 
        id: 'S14', name: 'Talleres Centrales', nif: 'A55555555', score: 58, status: ESGStatus.AVERAGE, questionnaireLevel: 'Básico', lastUpdated: '2025-11-01', certificationExpirationDate: '2026-11-01', certificationMethod: 'Santander',
        address: 'Av. Mecánica 12, Murcia', sector: 'Servicios', country: 'España',
        paymentDetails: { amount: 15000, currency: 'EUR', date: '2025-05-30', iban: 'ES22 3333 4444 55 6666666666' }
     }
];

const suppliersGLS_ES: Supplier[] = [
  { 
    id: 'S20', name: 'Transportes Rápidos Madrid', nif: 'B20202020', score: 65, status: ESGStatus.LEADER, questionnaireLevel: 'Básico', lastUpdated: '2025-12-01', certificationExpirationDate: '2026-12-01', certificationMethod: 'Santander',
    address: 'C/ Centro 1, Madrid', sector: 'Transporte', country: 'España',
    paymentDetails: { amount: 28000, currency: 'EUR', date: '2025-08-15', iban: 'ES33 4444 5555 66 7777777777' }
  },
  // S21 Expired
  { 
    id: 'S21', name: 'Logística Centro', nif: 'B21212121', score: 40, status: ESGStatus.TRANSITION, questionnaireLevel: 'None', lastUpdated: '2023-01-15', certificationExpirationDate: '2024-01-15', certificationMethod: 'None',
    address: 'Polígono Norte, Madrid', sector: 'Logística', country: 'España',
    paymentDetails: { amount: 12000, currency: 'EUR', date: '2023-02-01', iban: 'ES44 5555 6666 77 8888888888' }
  },
  { 
    id: 'S22', name: 'Eco-Repartos SL', nif: 'B22222222', score: 78, status: ESGStatus.LEADER, questionnaireLevel: 'Avanzado', lastUpdated: '2025-12-10', certificationExpirationDate: '2026-12-10', certificationMethod: 'External',
    address: 'C/ Verde 5, Madrid', sector: 'Transporte', country: 'España',
    paymentDetails: { amount: 9000, currency: 'EUR', date: '2025-08-20', iban: 'ES55 6666 7777 88 9999999999' }
  },
  { 
    id: 'S23', name: 'Paquetería Express', nif: 'B98989898', score: 55, status: ESGStatus.AVERAGE, questionnaireLevel: 'Básico', lastUpdated: '2025-11-15', certificationExpirationDate: '2026-11-15', certificationMethod: 'Santander',
    address: 'Av. Envíos 22, Madrid', sector: 'Logística', country: 'España',
    paymentDetails: { amount: 18500, currency: 'EUR', date: '2025-07-30', iban: 'ES66 7777 8888 99 0000000000' }
  }
];

// --- SUPPLIERS FOR INCARLOPSA ---
const suppliersIncarlopsa1: Supplier[] = [
    { 
       id: 'S-INC-1', name: 'Granjas Porcinas del Sur', nif: 'B11122233', score: 82, status: ESGStatus.LEADER, questionnaireLevel: 'Avanzado', lastUpdated: '2025-10-10', certificationExpirationDate: '2026-10-10', certificationMethod: 'External',
       address: 'Ctra. Nacional 4, Sevilla', sector: 'Ganadería', country: 'España',
       paymentDetails: { amount: 120000, currency: 'EUR', date: '2025-06-20', iban: 'ES12 3456 7890 12 3456789012' }
    },
    { 
       id: 'S-INC-2', name: 'Piensos de la Mancha', nif: 'A99988877', score: 68, status: ESGStatus.LEADER, questionnaireLevel: 'Básico', lastUpdated: '2025-09-15', certificationExpirationDate: '2026-09-15', certificationMethod: 'Santander',
       address: 'Polígono Industrial, Ciudad Real', sector: 'Alimentación', country: 'España',
       paymentDetails: { amount: 85000, currency: 'EUR', date: '2025-07-05', iban: 'ES98 7654 3210 98 7654321098' }
    },
    { 
       id: 'S-INC-3', name: 'Envases Sostenibles SL', nif: 'B55566677', score: 55, status: ESGStatus.AVERAGE, questionnaireLevel: 'Avanzado', lastUpdated: '2025-11-01', certificationExpirationDate: '2026-11-01', certificationMethod: 'External',
       address: 'Av. Industria, Valencia', sector: 'Embalaje', country: 'España',
       paymentDetails: { amount: 45000, currency: 'EUR', date: '2025-05-30', iban: 'ES45 6789 0123 45 6789012345' }
    }
];

const suppliersIncarlopsa2: Supplier[] = [
    { 
       id: 'S-INC-4', name: 'Maquinaria Cárnica Tech', nif: 'A44433322', score: 0, status: ESGStatus.PENDING, questionnaireLevel: 'None', lastUpdated: '', certificationExpirationDate: '', certificationMethod: 'None',
       address: 'Parque Tecnológico, Barcelona', sector: 'Maquinaria', country: 'España',
       paymentDetails: { amount: 250000, currency: 'EUR', date: '2025-08-15', iban: 'ES11 2233 4455 66 7788990011' }
    }
];

// --- CONTRATOS ---

export const MOCK_CONTRACTS: Contract[] = [
  // 1. GLS Original (Active)
  {
    id: 'CONF-2023-008',
    proposalId: 'PROP-2023-008',
    contractDate: '01/03/2023',
    clientId: GLS_CLIENT_ID,
    clientName: 'GLS Logistics',
    clientNif: 'B12345678',
    clientAddress: 'Calle Gran Vía 123, Madrid',
    clientSector: 'Logistics',
    clientNace: '5210',
    manager: 'María García',
    country: 'España',
    amount: 3200000,
    currency: 'EUR',
    expirationDate: '01/03/2026',
    status: 'Active',
    suppliers: suppliersBatch1,
    spreadBonus: true,
    purpose: 'Performance de proveedores'
  },
  // 2. Expired contract (Keep expired)
  {
    id: 'CTR-2022-099',
    proposalId: 'PROP-2022-099',
    contractDate: '01/01/2022',
    clientId: GLS_CLIENT_ID,
    clientName: 'GLS Logistics',
    clientNif: 'B12345678',
    clientAddress: 'Calle Gran Vía 123, Madrid',
    clientSector: 'Logistics',
    clientNace: '5210',
    manager: 'Pedro Sánchez',
    country: 'España',
    amount: 500000,
    currency: 'EUR',
    expirationDate: '01/01/2023', 
    status: 'Expired',
    suppliers: suppliersBatch3,
    spreadBonus: false,
    purpose: 'Performance de proveedores'
  },
  
  // 3. Industrias Metalúrgicas (Active)
  {
    id: 'CTR-2023-055',
    proposalId: 'PROP-2023-055',
    contractDate: '15/06/2023',
    clientId: 'CLIENT_OTHER_002',
    clientName: 'Industrias Metalúrgicas SA',
    clientNif: 'A99887766',
    clientAddress: 'Polígono Industrial Oeste, Murcia',
    clientSector: 'Industry',
    clientNace: '2511',
    manager: 'Luis Rodríguez',
    country: 'España',
    amount: 2300000,
    currency: 'EUR',
    expirationDate: '30/06/2026',
    status: 'Active',
    suppliers: suppliersBatch2,
    spreadBonus: true,
    purpose: 'Uso de fondos',
    taxonomy: {
        level1: 'Energy',
        level2: 'Renewable Energy',
        level3: 'Wind Power'
    }
  },

  // 4. Greenergy (Active)
  {
    id: 'CTR-2023-GRN-01',
    proposalId: 'PROP-2023-GRN',
    contractDate: '10/10/2023',
    clientId: 'CLIENT_GREEN_001',
    clientName: 'Greenergy',
    clientNif: 'B99999999',
    clientAddress: 'Parque Tecnológico, Málaga',
    clientSector: 'Energy',
    clientNace: '3511',
    manager: 'Ana López',
    country: 'España',
    amount: 5000000,
    currency: 'EUR',
    expirationDate: '15/10/2026',
    status: 'Active',
    suppliers: suppliersGreenergy,
    spreadBonus: true,
    purpose: 'Uso de fondos',
    taxonomy: {
        level1: 'Energy',
        level2: 'Renewable Energy',
        level3: 'Solar Photovoltaic Technology'
    }
  },

  // 5. GLS España SL (Active)
  {
    id: 'CTR-2023-GLS-ES-02',
    proposalId: 'PROP-2023-GLS2',
    contractDate: '20/12/2023',
    clientId: GLS_CLIENT_ID, 
    clientName: 'GLS España SL',
    clientNif: 'B20202020',
    clientAddress: 'Avenida de América 45, Madrid',
    clientSector: 'Logistics',
    clientNace: '5229',
    manager: 'Carlos Ruiz',
    country: 'España',
    amount: 800000,
    currency: 'EUR',
    expirationDate: '30/12/2025',
    status: 'Active',
    suppliers: suppliersGLS_ES,
    spreadBonus: false,
    purpose: 'Performance de clientes',
    clientPerformance: {
        kpiName: 'Huella de Carbono',
        kpiUnit: 'tCO2e',
        kpiCategory: 'Green',
        periodicity: 'Anual',
        spts: [
            { period: '2024', target: 15000 },
            { period: '2025', target: 12500 },
            { period: '2026', target: 10000 },
            { period: '2027', target: 7500 },
            { period: '2028', target: 5000 }
        ]
    }
  },

  // 6. Primafrio (Active)
  {
    id: 'CTR-2023-PF-001',
    proposalId: 'PROP-2023-PF1',
    contractDate: '15/11/2023',
    clientId: 'CLIENT_PF_001',
    clientName: 'Primafrio',
    clientNif: 'A77777777',
    clientAddress: 'Autovía del Mediterráneo, Km 600, Murcia',
    clientSector: 'Transport',
    clientNace: '4941',
    manager: 'Laura Martínez',
    country: 'España',
    amount: 1250000,
    currency: 'EUR',
    expirationDate: '20/11/2025',
    status: 'Active',
    suppliers: suppliersPrimafrio,
    spreadBonus: true,
    purpose: 'Performance de proveedores'
  },

  // 7. INCARLOPSA Contract 1 (Active) - Performance de proveedores
  {
    id: 'CONF-INC-2024-01',
    proposalId: 'PROP-INC-001',
    contractDate: '10/01/2024',
    clientId: INCARLOPSA_CLIENT_ID,
    clientName: 'Incarlopsa',
    clientNif: 'A45123456',
    clientAddress: 'Ctra. N-400, Tarancón, Cuenca',
    clientSector: 'Food & Beverage',
    clientNace: '1011',
    manager: 'Roberto Fernández',
    country: 'España',
    amount: 4500000,
    currency: 'EUR',
    expirationDate: '10/01/2027',
    status: 'Active',
    suppliers: suppliersIncarlopsa1,
    spreadBonus: true,
    purpose: 'Performance de proveedores'
  },

  // 8. INCARLOPSA Contract 2 (Active) - Uso de fondos (Maquinaria eficiente)
  {
    id: 'CTR-INC-2024-02',
    proposalId: 'PROP-INC-002',
    contractDate: '05/02/2024',
    clientId: INCARLOPSA_CLIENT_ID,
    clientName: 'Incarlopsa',
    clientNif: 'A45123456',
    clientAddress: 'Ctra. N-400, Tarancón, Cuenca',
    clientSector: 'Food & Beverage',
    clientNace: '1011',
    manager: 'Roberto Fernández',
    country: 'España',
    amount: 1200000,
    currency: 'EUR',
    expirationDate: '05/02/2026',
    status: 'Active',
    suppliers: suppliersIncarlopsa2,
    spreadBonus: true,
    purpose: 'Uso de fondos',
    taxonomy: {
        level1: 'Energy',
        level2: 'Renewable Energy',
        level3: 'Geothermal Energy'
    }
  },

  // 9. Old Non-ESG Expired Contract
  {
    id: 'CTR-2021-OLD-01',
    proposalId: 'PROP-2021-005',
    contractDate: '10/01/2021',
    clientId: 'CLIENT_OLD_001',
    clientName: 'Manufacturas del Norte',
    clientNif: 'A99880000',
    clientAddress: 'Polígono Industrial, Burgos',
    clientSector: 'Manufacturing',
    clientNace: '1712',
    manager: 'Juan Perez',
    country: 'España',
    amount: 750000,
    currency: 'EUR',
    expirationDate: '10/01/2022',
    status: 'Expired',
    suppliers: suppliersBatchOld,
    spreadBonus: false,
    purpose: 'Performance de proveedores'
  }
];

export const MOCK_REQUESTS: Request[] = [
  { id: 'REQ-001', clientName: 'GLS Logistics', type: 'Nuevo Confirming', date: '2025-02-10', amount: 750000, status: 'Pending' },
  { id: 'REQ-002', clientName: 'AgroFoods Ltd', type: 'Renovación', date: '2025-02-09', amount: 1200000, status: 'Pending' },
  { id: 'REQ-003', clientName: 'TechSolutions', type: 'Ampliación Línea', date: '2025-02-08', amount: 300000, status: 'Rejected' },
];
