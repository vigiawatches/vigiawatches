/* ============ CONFIGURACIÓN VIGIA WATCHES ============
   Aquí editas teléfono, precios, colores y datos de cada reloj.
   Precio: pon un número (ej. 45) y se mostrará "$45". Déjalo en null para "Consultar precio". */
const PHONE = "584121104491";
const EMAIL = "vigiawatches@gmail.com";

const MODELS = [
  {
    id: "930", name: "POEDAGAR 930", tag: "Clásico con día y fecha", price: null,
    desc: "Caja redonda pulida, esfera con efecto degradado y agujas luminosas. Un reloj de líneas limpias que va igual de bien con traje que con ropa casual.",
    life: "930-muneca.webp",
    specs: [["Movimiento", "Cuarzo"], ["Caja", "Acero inoxidable, redonda (≈ 40 mm)"], ["Indicadores", "Día y fecha"], ["Agujas", "Luminosas"], ["Resistencia al agua", "3 ATM (salpicaduras y lluvia)"], ["Brazalete", "Acero con cierre oculto"]],
    colors: [["Azul", "930azul.webp", "#1f5fa8"], ["Blanco", "930blanco.webp", "#f1f1f1"], ["Negro", "930negro.webp", "#16171a"], ["Verde", "930verde.webp", "#1f8a76"]]
  },
  {
    id: "821", name: "POEDAGAR 821", tag: "Esfera texturizada", price: null,
    desc: "Esfera con textura de cuadrícula que juega con la luz, bisel pulido y brazalete integrado. Presencia sobria con un detalle que se nota de cerca.",
    life: null,
    specs: [["Movimiento", "Cuarzo"], ["Esfera", "Texturizada (cuadrícula)"], ["Indicadores", "Día y fecha"], ["Brazalete", "Integrado, pulido y satinado"], ["Medidas y agua", "Consultar por WhatsApp"]],
    colors: [["Azul", "821azul.webp", "#1d3a66"], ["Negro", "821negro.webp", "#101113"], ["Verde", "821verde.webp", "#1d5a3e"]]
  },
  {
    id: "613", name: "POEDAGAR 613", tag: "Estilo deportivo elegante", price: null,
    desc: "Caja cojín con bisel pulido y esfera de líneas horizontales con degradado. Diseño moderno de carácter, con indicador de fecha.",
    life: "613-muneca.webp",
    specs: [["Caja", "Cojín, acabado pulido"], ["Esfera", "Líneas horizontales con degradado"], ["Indicadores", "Fecha"], ["Brazalete", "Metálico de eslabones"], ["Medidas y agua", "Consultar por WhatsApp"]],
    colors: [["Azul", "613azul.webp", "#26406e"], ["Blanco", "613blanco.webp", "#f1f1f1"], ["Negro", "613negro.webp", "#16171a"], ["Verde", "613verde.webp", "#2c6b3a"]]
  }
];
