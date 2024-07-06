<template>
    <div id="solicitar">
        <h1>Cómo solicitar</h1>
        <div class="section-text">
            El Kit Digital busca subvencionar y fomentar la implantación de soluciones digitales de las empresas de entre 1 y 49 trabajadores (autónomos, microempresas y pequeñas empresas).
        </div><br>
        <h2 style="margin-bottom: 50px;">Requisitos</h2>
        <ul class="section-text" style="text-align: start;">
            <li>Ser una pequeña empresa, microempresa o autónomo de 1 a 49 trabajadores</li>
            <li>Cumplir con las limitaciones financieras y efectivas que definen a las categorías de empresas.</li>
            <li>Estar en situación de alta y tener la antigüedad mínima establecida por convocatoria.</li>
            <li>No ser considerada empresa en crisis.</li>
            <li>Estar al corriente de las obligaciones tributarias y Seguridad Social.</li>
            <li>No estar sujeto a una orden de recuperación pendiente de la Comisión Europea.</li>
            <li>No incurrir en ninguna de las prohibiciones previstas en el artículo 13.2 de la Ley General de Subvenciones.</li>
            <li>No superar el límite de ayudas mínimas.</li>
        </ul>


        <h2 style="margin-bottom: 50px;">Pasos</h2>
        <ul class="section-text" style="text-align: start;">
            <li>Registrarse y dar de alta la empresa en  <a href="https://www.acelerapyme.gob.es/registro-pyme" target="_blank">este enlace</a>.</li>
            <li>Completar el “Test de autodiagnóstico digital” en la página de <a href="https://www.acelerapyme.gob.es/quieres-conocer-el-grado-de-digitalizacion-de-tu-pyme" target="_blank">este enlace</a>.</li>
            <li>Solicitar la ayuda <a href="https://sede.red.gob.es/es/procedimientos/convocatoria-de-ayudas-destinadas-la-digitalizacion-de-empresas-del-segmento-i-entre" target="_blank">aquí</a> y esperar a que la tramiten y la acepten.</li>
        </ul>
      <br><br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'vServicios',
    data: () => ({
      projects: [
        {
          name: 'KAwebs',
          icon: require('@/assets/logos/KAwebs.webp'),
          services: [
            {
              "name": "Sitio web básico",
              "description": "Dominio, hosting, diseño web.",
              "price": ["Hasta 2000 €"],
              "includes": [
                "Dominio y hosting",
                "Diseño web estructurado",
                "Adaptación a dispositivos",
                "Cumplimiento de accesibilidad",
                "Optimización SEO básica"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Presencia avanzada",
              "description": "Análisis, optimización SEO.",
              "price": ["Hasta 2000 €"],
              "includes": [
                "Análisis de palabras clave",
                "Análisis de competencia",
                "Optimización SEO On-Page",
                "Optimización SEO Off-Page",
                "Informes mensuales de seguimiento"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Comercio electrónico",
              "description": "Tienda online, métodos de pago.",
              "price": ["Hasta 2000 €"],
              "includes": [
              "Creación de tienda online",
              "Métodos de pago integrados",
              "Diseño responsive",
              "Cumplimiento de accesibilidad",
              "Optimización SEO",
              "Autogestionable",
              "Formas de envío configuradas"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Marketplace",
              "description": "Alta en plataformas de venta.",
              "price": ["Hasta 2000 €"],
              "includes": [
                "Estudio previo de alternativas",
                "Análisis de competencia",
                "Diseño y definición de estrategia",
                "Producción del catálogo",
                "Creación del contenido del listing",
                "Alta de referencias"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Oficina virtual",
              "description": "Colaboración, almacenamiento, compatibilidad.",
              "price": ["Hasta 250 €/usuario"],
              "includes": [
              "Colaboración en equipos",
              "Almacenar y compartir archivos",
              "Compatibilidad con dispositivos móviles",
              "Calendario y agenda"
              ],
              "showPrice": false,
              "seemore": false
            },
            {
              "name": "Redes sociales",
              "description": "Estrategia, monitorización, publicaciones.",
              "price": ["Hasta 2000 €"],
              "includes": [
                "Social Media Plan",
                "Monitorización de redes sociales",
                "Optimización de la red/Auditoría Social Media",
                "Gestión de una red social",
                "Publicación de posts semanales"
              ],
              "showPrice": false,
              "seemore": false
            }

          ],
          color: "#4285F4",
        },
        {
          name: 'MySetup',
          icon: require('@/assets/logos/Mysetup.webp'),
          services: false,
          color: "#7E57C2",
        }
      ],
      selectedProject: []
    }),
    methods: {
      scrollToSection(item) {
        let home = document.getElementById('home')
        let target = document.getElementById(item.toLowerCase())
        home.scrollTop = target.offsetTop - 100
      },
      setProject(project) {
        if (project != this.selectedProject) {
          this.selectedProject = project
        }
        else {
          this.selectedProject = []
        }
      },
      serviceIncludes(service) {
        if (service.seemore) {
          return service.includes
        }
        else {
          return service.includes.slice(0,5)
        }
      }
    },
    mounted() {
      this.selectedProject = this.projects[0]
    },
  }
  </script>
  
  <style scoped>
    a {
        font-weight: bold;
        color: var(--primary);
        display: inline;
    }
    li {
        margin-bottom: 10px;
    }
    .ver-mas {
      border: 2px solid var(--primary);
      border-radius: 8px;
      padding: 5px 10px 5px 10px;
      background: none;
      color: var(--primary);
      text-decoration: none;
      font-size: 18px;
      transition: all .2s ease-out;
    }
    .ver-mas:hover {
      color: #171717;
      background-color: var(--primary);
      font-weight: bold;
    }
    h2 {
        color: var(--primary);
        margin: 0px;
        font-weight: 900;
        position: relative;
        margin-top: 20px;
        margin-bottom: 80px;
        text-align: center;
    }
    h1 {
        color: var(--primary);
        font-size: 35px;
        margin: 0px;
        font-weight: 900;
        position: relative;
        margin-top: 20px;
        margin-bottom: 80px;
        text-align: center;
    }
    h1::after {
        content: '';
        background: var(--primary);
        height: 4px;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        position: absolute;
    }
    .section-text {
      margin: 0px;
      color: #E3E3E3;
      opacity: .7;
      width: 65%;
      margin-left: 15px;
      text-align: center;
    }
  #solicitar {
    padding: 20px;
    margin: 0px;
    margin-top: 25px;
    color: var(--background-dark);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .services-list {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .service {
    border: 1px solid var(--primary);
    max-width: calc(25% - 20px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 20px;
    padding-top: 15px;
    background: var(--background);
    min-width: 360px;
    position: relative;
    overflow: hidden;
  }
  .description {
    border-bottom: 1px solid var(--primary);
    border-top: 1px solid var(--primary);
    text-align: center;
    padding: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .includes {
    margin: 0px;
    width: calc(100% - 20px);
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    gap: 10px;
    margin-left: 10%;
  }
  .includes-container {
    width: 100%;
  }
  .check {
    height: 20px;
    width: 20px;
    background: url('@/assets/icons/check.svg');
    background-size: cover;
  }
  .includes p, .includes span {
    margin: 0;
  }
  .includes p {
    max-width: calc(100% - 40px);
  }
  .show-price {
    border-radius: 5px;
    color: var(--primary);
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: var(--background);
    border: 1px solid var(--primary);
    transition: background .3s ease-out;
  }
  .show-price:hover {
    background: var(--primary);
    color: white;
    cursor: pointer;
  }
  
  
  .projects {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .project {
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 15px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 1px solid var(--color);
    gap: 10px;
    background: var(--background);
    transition: background ease-in .15s;
    width: 150px;
    height: 55px;
  }
  .project img {
    background: var(--background);
    border-radius: 50%;
  }
  
  .project:hover {
    outline: 1px solid var(--color);
    cursor: pointer;
  }
  .selected {
    background: var(--color);
  }
  
  .no-services {
    width: 100h;
    display: flex;
    padding: 100px;
    justify-content: center;
    align-items: center;
    color: var(--background);
    opacity: .7;
  }
  
  table.show {
    transform: translateY(0px);
    opacity: 1;
    pointer-events: auto;
  }
  
  table {
    pointer-events: none;
    outline: 1px solid #ddd;
    padding: 5px;
    border-radius: 10px;
    position: absolute;
    bottom: 80px;
    left: 5%;
    width: 90%;
    background: var(--background);
    box-shadow: 1px 2px 3px 0px #444;
    transform: translateY(calc(100% + 20px));
    opacity: 0;
    transition: opacity .3s ease-out, transform .3s ease-out;
  }
  td:nth-child(2) {
    text-align: end;
  }
  td:nth-child(1) {
    font-weight: bolder;
    color: #888;
  }
  td {
    padding: 5px;
    padding-bottom: 2px;
  }
  tr {
    border: 1px solid red;
  }
  
  .seemore {
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    background: none;
    font-size: 16px;
    padding: 6px 12px 6px 12px;
    border-radius: 5px;
    color: var(--accent);
  }
  .seemore:hover {
    background: #eee;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 670px) {
    .section-text {
      width: 90%;
    }
    .includes {
      margin-left: 10%;
    }
    .service {
      max-width: calc(100% - 20px);
      min-width: calc(100% - 20px);
    }
    h2 {
      margin-bottom: 30px;
    }
    .description {
      display: none;
    }
    .projects {
      padding: 0px;
    }
    .project {
      border-radius: 5px;
      padding-left: 3px;
      padding-right: 10px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: 1px solid var(--color);
      gap: 5px;
      background: var(--background);
      transition: background ease-in .15s;
      width: 120px;
      height: 45px;
    }
    .no-services {
      padding: 50px;
    }
  }
  
  @media only screen and (min-width: 671px) and (max-width: 980px) {
    .service {
      max-width: calc(33% - 20px);
    }
  }
  </style>
  