/* =====================================================================
   VIGIA WATCHES · CATÁLOGO
   Este es el ÚNICO archivo que necesitas editar para cambiar precios,
   textos, fotos o agregar relojes.

   • price: escribe un número (ej. 45) y se mostrará "$45".
            Déjalo en null para mostrar "Consulta el precio".
   • featured: true = aparece en "Destacados" de la página de inicio.
   • gender: "hombre", "mujer" o "unisex".
   • colors: cada color tiene su nombre, su muestra (hex) y sus fotos.
   • Para agregar un reloj nuevo: copia un bloque, cambia el id y crea
     su página copiando cualquier archivo de la carpeta /reloj
     (solo cambia data-id="..." y el <title>).
   ===================================================================== */
const STORE = {
  "phone": "584121104491",
  "phoneLabel": "+58 412 110 4491",
  "email": "vigiawatches@gmail.com"
};

const BRANDS = {
  "poedagar": {
    "name": "Poedagar",
    "tag": "Diseño con presencia",
    "desc": "Esferas con textura, cajas pulidas y detalles que se notan de cerca. Relojes llamativos con una gran relación entre estilo y precio.",
    "cover": "poedagar/poedagar-613-extra-1.webp"
  },
  "casio": {
    "name": "Casio",
    "tag": "Precisión japonesa",
    "desc": "La marca japonesa de la confiabilidad: relojes ligeros, precisos y con batería de larga duración, para hombre y mujer.",
    "cover": "casio/casio-mtp-1375d-3av-3.webp"
  },
  "seiko": {
    "name": "Seiko",
    "tag": "Automáticos clásicos",
    "desc": "Relojería japonesa con movimiento automático: se carga con el movimiento de tu muñeca, sin pilas.",
    "cover": "seiko/seiko-5-7s26-0420-3.webp"
  }
};

const PRODUCTS = [
  {
    "id": "poedagar-1413",
    "brand": "poedagar",
    "name": "POEDAGAR 1413",
    "ref": "1413",
    "gender": "hombre",
    "featured": true,
    "badge": "Automático",
    "tag": "Automático con tourbillon a la vista",
    "desc": "Esfera blanca con números romanos, fase lunar con estrellas y un tourbillon a la vista que deja ver la mecánica en movimiento. Fondo transparente para admirar el calibre automático.",
    "specs": [
      [
        "Movimiento",
        "Automático"
      ],
      [
        "Caja",
        "45 mm"
      ],
      [
        "Esfera",
        "Blanca, números romanos"
      ],
      [
        "Funciones",
        "Fase lunar, día y fecha"
      ],
      [
        "Detalle",
        "Tourbillon a la vista"
      ],
      [
        "Fondo",
        "Transparente"
      ],
      [
        "Brazalete",
        "Acero de eslabones"
      ],
      [
        "Incluye",
        "Caja, manual, tarjeta de garantía, paño y herramienta para el brazalete"
      ]
    ],
    "colors": [
      {
        "name": "Blanco",
        "hex": "#f1f1f1",
        "imgs": [
          "poedagar/poedagar-1413-1.webp",
          "poedagar/poedagar-1413-2.webp",
          "poedagar/poedagar-1413-3.webp",
          "poedagar/poedagar-1413-4.webp",
          "poedagar/poedagar-1413-5.webp"
        ]
      }
    ],
    "price": null
  },
  {
    "id": "poedagar-930",
    "brand": "poedagar",
    "name": "POEDAGAR 930",
    "ref": "930",
    "gender": "hombre",
    "featured": true,
    "tag": "Clásico con día y fecha",
    "desc": "Caja redonda pulida, esfera con efecto degradado y agujas luminosas. Un reloj de líneas limpias que va igual de bien con traje que con ropa casual.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo"
      ],
      [
        "Caja",
        "Acero inoxidable, redonda (≈ 40 mm)"
      ],
      [
        "Indicadores",
        "Día y fecha"
      ],
      [
        "Agujas",
        "Luminosas"
      ],
      [
        "Resistencia al agua",
        "3 ATM (salpicaduras y lluvia)"
      ],
      [
        "Brazalete",
        "Acero con cierre oculto"
      ]
    ],
    "colors": [
      {
        "name": "Azul",
        "hex": "#1f5fa8",
        "imgs": [
          "poedagar/930-azul.webp",
          "poedagar/poedagar-930-extra-1.webp"
        ]
      },
      {
        "name": "Blanco",
        "hex": "#f1f1f1",
        "imgs": [
          "poedagar/930-blanco.webp"
        ]
      },
      {
        "name": "Negro",
        "hex": "#16171a",
        "imgs": [
          "poedagar/930-negro.webp"
        ]
      },
      {
        "name": "Verde",
        "hex": "#1f8a76",
        "imgs": [
          "poedagar/930-verde.webp",
          "poedagar/poedagar-930-extra-2.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "poedagar-821",
    "brand": "poedagar",
    "name": "POEDAGAR 821",
    "ref": "821",
    "gender": "hombre",
    "featured": true,
    "tag": "Esfera texturizada",
    "desc": "Esfera con textura de cuadrícula que juega con la luz, bisel pulido y brazalete integrado. Presencia sobria con un detalle que se nota de cerca.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo"
      ],
      [
        "Esfera",
        "Texturizada (cuadrícula)"
      ],
      [
        "Indicadores",
        "Día y fecha"
      ],
      [
        "Brazalete",
        "Integrado, pulido y satinado"
      ],
      [
        "Medidas y agua",
        "Consultar por WhatsApp"
      ]
    ],
    "colors": [
      {
        "name": "Verde",
        "hex": "#1d5a3e",
        "imgs": [
          "poedagar/821-verde.webp",
          "poedagar/poedagar-821-extra-1.webp"
        ]
      },
      {
        "name": "Azul",
        "hex": "#1d3a66",
        "imgs": [
          "poedagar/821-azul.webp"
        ]
      },
      {
        "name": "Negro",
        "hex": "#101113",
        "imgs": [
          "poedagar/821-negro.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "poedagar-613",
    "brand": "poedagar",
    "name": "POEDAGAR 613",
    "ref": "613",
    "gender": "hombre",
    "featured": false,
    "tag": "Estilo deportivo elegante",
    "desc": "Caja cojín con bisel pulido y esfera de líneas horizontales con degradado. Diseño moderno de carácter, con indicador de fecha.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo"
      ],
      [
        "Caja",
        "Cojín, acabado pulido"
      ],
      [
        "Esfera",
        "Líneas horizontales con degradado"
      ],
      [
        "Indicadores",
        "Fecha"
      ],
      [
        "Agujas",
        "Luminosas"
      ],
      [
        "Brazalete",
        "Metálico de eslabones"
      ],
      [
        "Medidas y agua",
        "Consultar por WhatsApp"
      ]
    ],
    "colors": [
      {
        "name": "Azul",
        "hex": "#26406e",
        "imgs": [
          "poedagar/613-azul.webp",
          "poedagar/poedagar-613-extra-2.webp"
        ]
      },
      {
        "name": "Negro",
        "hex": "#16171a",
        "imgs": [
          "poedagar/613-negro.webp",
          "poedagar/poedagar-613-extra-1.webp"
        ]
      },
      {
        "name": "Blanco",
        "hex": "#f1f1f1",
        "imgs": [
          "poedagar/613-blanco.webp"
        ]
      },
      {
        "name": "Verde",
        "hex": "#2c6b3a",
        "imgs": [
          "poedagar/613-verde.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "seiko-5-snxj90",
    "brand": "seiko",
    "name": "SEIKO 5 SNXJ90",
    "ref": "SNXJ90",
    "gender": "hombre",
    "featured": true,
    "badge": "Automático",
    "tag": "Bicolor con bisel estriado",
    "desc": "Un clásico bicolor: esfera plateada con rayos de sol, bisel estriado dorado y brazalete de cinco eslabones en acero y dorado. Movimiento automático Seiko con día y fecha.",
    "specs": [
      [
        "Movimiento",
        "Automático, calibre 7S26"
      ],
      [
        "Caja",
        "≈ 36 mm, acero inoxidable"
      ],
      [
        "Esfera",
        "Plateada, rayos de sol"
      ],
      [
        "Bisel",
        "Estriado, tono dorado"
      ],
      [
        "Indicadores",
        "Día y fecha"
      ],
      [
        "Resistencia al agua",
        "30 m"
      ],
      [
        "Brazalete",
        "Bicolor, cinco eslabones"
      ]
    ],
    "colors": [
      {
        "name": "Bicolor plateado y dorado",
        "hex": "linear-gradient(135deg,#d9dbdf 50%,#c8a96a 50%)",
        "imgs": [
          "seiko/seiko-5-snxj90-1.webp",
          "seiko/seiko-5-snxj90-2.webp",
          "seiko/seiko-5-snxj90-3.webp",
          "seiko/seiko-5-snxj90-4.webp",
          "seiko/seiko-5-snxj90-5.webp",
          "seiko/seiko-5-snxj90-6.webp"
        ]
      }
    ],
    "price": null
  },
  {
    "id": "seiko-5-7s26-0420",
    "brand": "seiko",
    "name": "SEIKO 5 7S26-0420",
    "ref": "7S26-0420",
    "gender": "hombre",
    "featured": true,
    "badge": "Automático",
    "tag": "Automático en acero",
    "desc": "Seiko 5 automático en acero con esfera plateada de rayos de sol y ventana de día y fecha. El fondo transparente deja ver el calibre 7S26 de 21 rubíes.",
    "specs": [
      [
        "Movimiento",
        "Automático, calibre 7S26 (21 rubíes)"
      ],
      [
        "Caja",
        "Acero inoxidable"
      ],
      [
        "Esfera",
        "Plateada, rayos de sol"
      ],
      [
        "Indicadores",
        "Día y fecha"
      ],
      [
        "Fondo",
        "Transparente"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua"
      ],
      [
        "Brazalete",
        "Acero"
      ]
    ],
    "colors": [
      {
        "name": "Plateado",
        "hex": "#c9ccd1",
        "imgs": [
          "seiko/seiko-5-7s26-0420-1.webp",
          "seiko/seiko-5-7s26-0420-2.webp",
          "seiko/seiko-5-7s26-0420-3.webp",
          "seiko/seiko-5-7s26-0420-4.webp",
          "seiko/seiko-5-7s26-0420-5.webp",
          "seiko/seiko-5-7s26-0420-6.webp"
        ]
      }
    ],
    "price": null
  },
  {
    "id": "casio-mtp-1375d-1av",
    "brand": "casio",
    "name": "CASIO MTP-1375D-1AV",
    "ref": "MTP-1375D-1AV",
    "gender": "hombre",
    "featured": true,
    "tag": "Multifunción, esfera negra",
    "desc": "Esfera negra con tres subesferas para día, fecha y formato 24 horas, bisel trabajado y brazalete de acero. Elegante y fácil de combinar.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo"
      ],
      [
        "Caja",
        "48.5 × 42 × 9.7 mm"
      ],
      [
        "Funciones",
        "Día, fecha y 24 horas"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "50 m"
      ],
      [
        "Brazalete",
        "Acero inoxidable, cierre desplegable"
      ]
    ],
    "colors": [
      {
        "name": "Esfera negra",
        "hex": "#121316",
        "imgs": [
          "casio/casio-mtp-1375d-1av-1.webp",
          "casio/casio-mtp-1375d-1av-2.webp",
          "casio/casio-mtp-1375d-1av-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-mtp-1375d-2a1v",
    "brand": "casio",
    "name": "CASIO MTP-1375D-2A1V",
    "ref": "MTP-1375D-2A1V",
    "gender": "hombre",
    "featured": true,
    "tag": "Multifunción, esfera azul",
    "desc": "Esfera azul intensa con subesferas plateadas para día, fecha y 24 horas. Un multifunción con mucha presencia en la muñeca.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo"
      ],
      [
        "Caja",
        "48.5 × 42 × 9.7 mm"
      ],
      [
        "Funciones",
        "Día, fecha y 24 horas"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "50 m"
      ],
      [
        "Brazalete",
        "Acero inoxidable, cierre desplegable"
      ]
    ],
    "colors": [
      {
        "name": "Esfera azul",
        "hex": "#1d3a8a",
        "imgs": [
          "casio/casio-mtp-1375d-2a1v-1.webp",
          "casio/casio-mtp-1375d-2a1v-2.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-mtp-1375d-3av",
    "brand": "casio",
    "name": "CASIO MTP-1375D-3AV",
    "ref": "MTP-1375D-3AV",
    "gender": "hombre",
    "featured": true,
    "tag": "Multifunción, esfera verde",
    "desc": "Esfera verde con subesferas plateadas tipo panda para día, fecha y 24 horas. El color de moda en un reloj fácil de llevar.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo"
      ],
      [
        "Caja",
        "48.5 × 42 × 9.7 mm"
      ],
      [
        "Funciones",
        "Día, fecha y 24 horas"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "50 m"
      ],
      [
        "Brazalete",
        "Acero inoxidable, cierre desplegable"
      ]
    ],
    "colors": [
      {
        "name": "Esfera verde",
        "hex": "#1f6b45",
        "imgs": [
          "casio/casio-mtp-1375d-3av-1.webp",
          "casio/casio-mtp-1375d-3av-2.webp",
          "casio/casio-mtp-1375d-3av-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-mtp-v001l-1b",
    "brand": "casio",
    "name": "CASIO MTP-V001L-1B",
    "ref": "MTP-V001L-1B",
    "gender": "hombre",
    "featured": false,
    "tag": "Clásico de números grandes",
    "desc": "Esfera negra con números arábigos grandes y fáciles de leer, caja plateada y correa negra. El reloj clásico para el día a día.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Esfera",
        "Negra, números arábigos"
      ],
      [
        "Correa",
        "Negra, tipo cuero"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ]
    ],
    "colors": [
      {
        "name": "Negro",
        "hex": "#16171a",
        "imgs": [
          "casio/casio-mtp-v001l-1b-1.webp",
          "casio/casio-mtp-v001l-1b-2.webp",
          "casio/casio-mtp-v001l-1b-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-aq-230a-7d",
    "brand": "casio",
    "name": "CASIO AQ-230A-7D",
    "ref": "AQ-230A-7D",
    "gender": "unisex",
    "featured": true,
    "badge": "Vintage",
    "tag": "Analógico y digital",
    "desc": "El clásico vintage de Casio: agujas analógicas y pantalla digital con día, fecha, alarma, cronómetro y hora dual. Brazalete de acero ajustable.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, analógico-digital"
      ],
      [
        "Caja",
        "38.8 × 29.8 × 8.1 mm"
      ],
      [
        "Funciones",
        "Hora dual, alarma diaria, cronómetro 1/100 s, calendario automático"
      ],
      [
        "Formato",
        "12 / 24 horas"
      ],
      [
        "Cristal",
        "Resina"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Brazalete",
        "Acero inoxidable ajustable"
      ]
    ],
    "colors": [
      {
        "name": "Plateado",
        "hex": "#c9ccd1",
        "imgs": [
          "casio/casio-aq-230a-7d-3.webp",
          "casio/casio-aq-230a-7d-1.webp",
          "casio/casio-aq-230a-7d-2.webp"
        ]
      }
    ],
    "price": null
  },
  {
    "id": "casio-ltp-vt01g-9b",
    "brand": "casio",
    "name": "CASIO LTP-VT01G-9B",
    "ref": "LTP-VT01G-9B",
    "gender": "mujer",
    "featured": true,
    "tag": "Dorado minimalista",
    "desc": "Caja y brazalete dorados con esfera champán y números romanos finos. Minimalista, delicado y elegante.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "40 × 34 × 7.9 mm"
      ],
      [
        "Acabado",
        "Dorado (ion plating)"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Brazalete",
        "Acero dorado, cierre triple"
      ]
    ],
    "colors": [
      {
        "name": "Dorado",
        "hex": "#c8a96a",
        "imgs": [
          "casio/casio-ltp-vt01g-9b-1.webp",
          "casio/casio-ltp-vt01g-9b-2.webp",
          "casio/casio-ltp-vt01g-9b-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-ltp-vt01gl-7b",
    "brand": "casio",
    "name": "CASIO LTP-VT01GL-7B",
    "ref": "LTP-VT01GL-7B",
    "gender": "mujer",
    "featured": false,
    "tag": "Esfera blanca y correa camel",
    "desc": "Esfera blanca limpia con caja dorada y correa de cuero color camel. Un estilo suave y atemporal.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "Dorada, línea VT01"
      ],
      [
        "Esfera",
        "Blanca"
      ],
      [
        "Correa",
        "Cuero, color camel"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ]
    ],
    "colors": [
      {
        "name": "Camel",
        "hex": "#c49a6c",
        "imgs": [
          "casio/casio-ltp-vt01gl-7b-1.webp",
          "casio/casio-ltp-vt01gl-7b-2.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-ltp-v007sg-9e",
    "brand": "casio",
    "name": "CASIO LTP-V007SG-9E",
    "ref": "LTP-V007SG-9E",
    "gender": "mujer",
    "featured": false,
    "tag": "Rectangular bicolor",
    "desc": "Caja rectangular con esfera champán y números romanos, y brazalete bicolor plateado y dorado. Clásico y con brillo.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "31 × 22 × 7.5 mm"
      ],
      [
        "Esfera",
        "Champán, números romanos"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Brazalete",
        "Acero bicolor"
      ]
    ],
    "colors": [
      {
        "name": "Bicolor",
        "hex": "linear-gradient(135deg,#d9dbdf 50%,#c8a96a 50%)",
        "imgs": [
          "casio/casio-ltp-v007sg-9e-2.webp",
          "casio/casio-ltp-v007sg-9e-1.webp",
          "casio/casio-ltp-v007sg-9e-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-ltp-v007d-2e",
    "brand": "casio",
    "name": "CASIO LTP-V007D-2E",
    "ref": "LTP-V007D-2E",
    "gender": "mujer",
    "featured": false,
    "tag": "Rectangular, esfera celeste",
    "desc": "Caja rectangular plateada con esfera celeste y brazalete de acero. Fresco, ligero y fácil de combinar.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "31 × 22 × 7.5 mm"
      ],
      [
        "Esfera",
        "Celeste"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Brazalete",
        "Acero inoxidable"
      ]
    ],
    "colors": [
      {
        "name": "Celeste",
        "hex": "#9cc3e0",
        "imgs": [
          "casio/casio-ltp-v007d-2e-1.webp",
          "casio/casio-ltp-v007d-2e-2.webp",
          "casio/casio-ltp-v007d-2e-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-ltp-v007l-9e",
    "brand": "casio",
    "name": "CASIO LTP-V007L-9E",
    "ref": "LTP-V007L-9E",
    "gender": "mujer",
    "featured": false,
    "tag": "Esfera champán, correa marrón",
    "desc": "Caja rectangular con esfera champán y correa de cuero marrón. Un toque cálido y clásico.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "31 × 22 × 7.5 mm"
      ],
      [
        "Esfera",
        "Champán"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Correa",
        "Cuero marrón"
      ]
    ],
    "colors": [
      {
        "name": "Champán y marrón",
        "hex": "#6b3f2a",
        "imgs": [
          "casio/casio-ltp-v007l-9e-1.webp",
          "casio/casio-ltp-v007l-9e-2.webp",
          "casio/casio-ltp-v007l-9e-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-ltp-v007l-7e2",
    "brand": "casio",
    "name": "CASIO LTP-V007L-7E2",
    "ref": "LTP-V007L-7E2",
    "gender": "mujer",
    "featured": false,
    "tag": "Esfera blanca, correa marrón",
    "desc": "Esfera blanca con agujas doradas, caja rectangular y correa de cuero marrón. Discreto y femenino.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "31 × 22 × 7.5 mm"
      ],
      [
        "Esfera",
        "Blanca, detalles dorados"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Correa",
        "Cuero marrón"
      ]
    ],
    "colors": [
      {
        "name": "Blanco y marrón",
        "hex": "#4a2a20",
        "imgs": [
          "casio/casio-ltp-v007l-7e2-1.webp",
          "casio/casio-ltp-v007l-7e2-2.webp",
          "casio/casio-ltp-v007l-7e2-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-ltp-v007l-7e1",
    "brand": "casio",
    "name": "CASIO LTP-V007L-7E1",
    "ref": "LTP-V007L-7E1",
    "gender": "mujer",
    "featured": false,
    "tag": "Esfera plateada, correa negra",
    "desc": "Caja rectangular plateada con esfera clara y correa de cuero negra. El clásico que combina con todo.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "31 × 22 × 7.5 mm"
      ],
      [
        "Esfera",
        "Plateada"
      ],
      [
        "Cristal",
        "Mineral"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Correa",
        "Cuero negro"
      ]
    ],
    "colors": [
      {
        "name": "Plateado y negro",
        "hex": "#16171a",
        "imgs": [
          "casio/casio-ltp-v007l-7e1-1.webp",
          "casio/casio-ltp-v007l-7e1-2.webp",
          "casio/casio-ltp-v007l-7e1-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  },
  {
    "id": "casio-lq-142e-1a",
    "brand": "casio",
    "name": "CASIO LQ-142E-1A",
    "ref": "LQ-142E-1A",
    "gender": "mujer",
    "featured": false,
    "tag": "Negro con índices dorados",
    "desc": "Caja y correa de resina negra con esfera oscura e índices dorados. Muy ligero (13 g) y cómodo para todos los días.",
    "specs": [
      [
        "Movimiento",
        "Cuarzo, 3 agujas"
      ],
      [
        "Caja",
        "31.7 × 22.5 × 7.3 mm, resina"
      ],
      [
        "Esfera",
        "Negra, índices dorados"
      ],
      [
        "Cristal",
        "Resina"
      ],
      [
        "Peso",
        "13 g"
      ],
      [
        "Resistencia al agua",
        "Resistente al agua (uso diario, salpicaduras)"
      ],
      [
        "Correa",
        "Resina negra"
      ]
    ],
    "colors": [
      {
        "name": "Negro",
        "hex": "#16171a",
        "imgs": [
          "casio/casio-lq-142e-1a-1.webp",
          "casio/casio-lq-142e-1a-2.webp",
          "casio/casio-lq-142e-1a-3.webp"
        ]
      }
    ],
    "price": null,
    "badge": null
  }
];
