<template>
    <div id="paquetes">
      <h1>Paquetes Kit digital</h1>
      <br>
      <div class="section-text">
        Ayudas Para Pymes: Aprovecha Las Ayudas De Hasta 12.000€ De Los Fondos Europeos Next Generation.
      </div><br><br><br>
      <div style="display: flex; width: 80%; justify-content: space-around;" class="segments">
        <div class="segment">
          <div class="segment-header">
            SEGMENTO I
          </div>
          <div class="segment-contents">
            Empresas de 10 a 49 empleados
            <strong>Hasta</strong>
            <p>12.000 €</p>
          </div>
        </div>
        <div class="segment">
          <div class="segment-header">
            SEGMENTO II
          </div>
          <div class="segment-contents">
            Empresas de 3 a 9 empleados
            <strong>Hasta</strong>
            <p>6.000 €</p>
          </div>
        </div>
        <div class="segment">
          <div class="segment-header">
            SEGMENTO III
          </div>
          <div class="segment-contents">
            Empresas de 0 a 2 empleados
            <strong>Hasta</strong>
            <p>2.000 €</p>
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="services-list">
        <div class="service" v-for="(service, i) in servicios" :key="i" :id="service.id">
          <div class="service-left">
            <h2 style="margin-bottom: -30px; margin-top: 0px;">Hasta</h2>
            <h2>{{ service.price }}</h2>
            <a :href="service.link">
              Más información
            </a>
          </div>
          <div class="service-right">
            <h3 :id="service.id">{{ service.title }}</h3>
            <hr style="border-color: #ddd; transform: translateY(-10px)">
            <div style="display: flex; margin-bottom: 15px; gap: 15px;" v-for="(value, name) in service.features" :key="name">
              <img height="24px" width="24px" src="@/assets/icons/check.svg">
              <p style="margin: 0px;">
                <strong style="color: var(--success)">{{ name }} :</strong> {{ value }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'vServicios',
    data: () => ({
      small: false,
      more: false,
      currentMax: 0,
      selectedProject: [],
      servicios: [
        {
          price: "2000 €",
          link: "https://www.acelerapyme.gob.es/kit-digital/sitio-web",
          id: "web",
          title: "Presencia Básica en Internet",
          features: {
            "Dominio": "Se proporciona un dominio por un mínimo de doce meses.",
            "Hosting": "Alojamiento de la página web por un mínimo de doce meses.",
            "Diseño de la página web": "Estructura de la web con un mínimo de 3 apartados.",
            "Web responsive": "Adaptación perfecta a cualquier tipo de dispositivo.",
            "Accesibilidad": "Cumplimiento con los criterios de conformidad de nivel AA de las Pautas WCAG-2.1.",
            "Posicionamiento básico en internet": "Indexación de la información por los principales motores de búsqueda (On-Page).",
            "Optimización de la presencia en buscadores (SEO básico)": "Análisis de palabras clave, SEO On-Page de 2 páginas o apartados, indexación y jerarquización del contenido.",
            "Autogestionable": "Plataforma de gestión de contenidos para modificar los contenidos sin ayuda.",
            "Multidioma": "Preparada para el multidioma y traducida a un idioma además del castellano."
          }
        },
        {
          price: "2000 €",
          link: "https://www.acelerapyme.gob.es/kit-digital/presencia-avanzada-en-internet",
          id: "avanzada",
          title: "Presencia Avanzada en Internet",
          features: {
            "Posicionamiento básico en internet": "Posicionamiento en principales sites, redes de negocio o directorios de empresas y profesionales.",
            "Análisis de palabras clave": "Gestión y análisis de palabras clave para desarrollar estrategias de búsqueda.",
            "Análisis de la competencia": "Análisis mensual de la competencia para informarte de tu situación frente a otros competidores.",
            "SEO On-Page": "Optimización de la estructura y contenido interno para mejorar el posicionamiento en buscadores.",
            "SEO Off-Page": "Ejecución de acciones fuera del sitio web para mejorar el posicionamiento orgánico.",
            "Informes mensuales de seguimiento": "Reporte mensual de los resultados de las acciones ejecutadas."
          }
        },
        {
          price: "2000 €",
          link: "https://www.acelerapyme.gob.es/kit-digital/comercio-electronico",
          id: "ecommerce",
          title: "Comercio Electrónico",
          features: {
            "Creación de la tienda online o E-Commerce y alta del catálogo de productos": "Catálogo en la tienda online con al menos 100 referencias.",
            "Métodos de pago": "Configuración e integración de métodos de pago.",
            "Diseño Responsive": "Adaptación a todo tipo de dispositivos.",
            "Accesibilidad": "Cumplimiento con los criterios de conformidad de nivel AA de las Pautas WCAG-2.1.",
            "Posicionamiento básico en internet": "Indexación por los principales motores de búsqueda (On-Page).",
            "Autogestionable": "Plataforma de gestión de contenidos para modificar los contenidos sin ayuda.",
            "Formas de envío": "Configuración e integración de métodos de envío."
          }
        },
        {
          price: "2000 €",
          link: "https://www.acelerapyme.gob.es/kit-digital/marketplace",
          id: "marketplace",
          title: "Marketplace",
          features: {
            "Estudio previo de alternativas y alta en la plataforma": "Apertura de cuenta y alta en al menos una plataforma de Marketplace y en al menos un país.",
            "Análisis de la competencia": "Investigación de mercado focalizada en las características de tus competidores.",
            "Diseño y definición de la estrategia de negocio": "Generación de la estrategia de negocio para lograr los objetivos deseados.",
            "Producción del catálogo de referencias": "Análisis de las categorías y selección de al menos diez productos alineados con la estrategia de negocio.",
            "Creación del contenido del listing": "Definición de al menos diez descripciones del catálogo de referencias.",
            "Alta de referencias": "Carga de al menos diez referencias en la plataforma."
          }
        },
        {
          price: "250 €/u",
          link: "https://www.acelerapyme.gob.es/kit-digital/servicios-oficina-virtual",
          id: "oficina",
          title: "Servicios y Herramientas de Oficina Virtual",
          features: {
            "Colaboración en equipos de trabajo": "Asistencia en la gestión colaborativa de proyectos y configuración de herramientas.",
            "Almacenar y compartir archivos": "1 TB de almacenamiento disponible.",
            "Compatibilidad con dispositivos móviles": "Compatibilidad con dispositivos móviles.",
            "Calendario y agenda": "Organización de calendario y tareas previstas."
          }
        },
        {
          price: "2500 €",
          link: "https://www.acelerapyme.gob.es/kit-digital/gestion-redes-sociales",
          id: "redes",
          title: "Gestión de Redes Sociales",
          features: {
            "Social Media Plan": "Estrategia de redes sociales alineada con tu misión y visión.",
            "Monitorización de redes sociales": "Control periódico de los impactos de las acciones en redes sociales.",
            "Optimización de la red/Auditoría Social Media": "Análisis para optimizar el rendimiento en diferentes canales sociales.",
            "Gestión de una red social": "Administración del perfil/usuario en al menos una red social.",
            "Publicación de posts semanales": "Publicación de un mínimo de 4-8 entradas mensuales en redes sociales."
          }
        }
      ]
    }),
    methods: {
      setCurrentMax(val) {
        if (val) {
          this.currentMax = this.selectedProject.services.length
        }
        else {
          this.currentMax = 2
        }
        this.more = val
      },
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
      if (parseInt(window.innerWidth)<500) {
        this.small = true
        this.currentMax = 2
      }
      else {
        this.currentMax = this.selectedProject.services.length

      }
    },
  }
  </script>
  
  <style scoped>
    .segment {
      width: 30%;
      max-width: 300px;
      min-width: 250px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .segment-header {
      width: 100%;
      box-sizing: border-box;
      border-radius: 10px;
      background: #515151;
      text-align: center;
      color: white;
      padding: 25px 5px 25px 5px;
      font-weight: bold;
      font-size: 24px;
    }
    .segment-contents {
      transform: translateY(-10px);
      background: #d5d5d5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
      padding: 25px 5px 5px 5px;
      border-radius: 10px;
      text-align: center;
      gap: 10px;
      width: 80%
    }
    .segment-contents p {
      font-size: 30px;
      font-weight: bold;
      margin: 10px;
      color: var(--primary);
    }
    li {
      width: 80%;
      margin-left: 10%;
    }
    ul {
      line-height: 28px;
    }
    a {
      color: var(--primary)
    }
    .service a {
      border: 1px solid var(--primary);
      text-decoration: none;
      padding: 3px 6px 3px 6px;
      border-radius: 5px;
      transition: all .2s ease-out;
    }
    .service a:hover {
      color: #171717;
      background: var(--primary);
      font-weight: bold;
    }
    .button {
      border: 1px solid transparent;
      background: none;
      color: var(--primary);
      font-size: 16px;
      border-radius: 5px;
      padding: 5px 8px 5px 8px;
      width: fit-content;
    }
    .button:hover {
      border-color: var(--primary);
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
      font-weight: lighter;
      font-size: 30px;
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
      width: 50%;
      margin-left: 15px;
      text-align: center;
    }
  #paquetes {
    padding: 20px;
    margin: 0px;
    margin-top: -5px;
    color: var(--background-dark);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
  .services-list {
    display: flex;
    padding: 0px;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    align-items: center;
    padding-bottom: 50px;
  }
  .service {
    max-width: 1100px;
    display: flex;
    gap: 30px;
    flex-direction: row-reverse;
    width: 80%;
  }
  .service-right {
    width: 70%;
    color: var(--text);
  }
  .service-left {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    padding: 15px;
    border: 2px solid #202020;
    border-radius: 10px;
    width: 200px;
  }
  .service-left h2 {
    transform: scale(.8);
    font-weight: bold;
    color: var(--primary);
  }
  @media only screen and (max-width: 1000px) {
    .segments {
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
    }
    h2 {
      text-align: center;
    }
    .section-text {
      width: 90%;
    }
    .service-left {
      display: none;
    }
    .service-right {
      width: 100%;
    }
    .includes {
      margin-left: 10%;
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
  </style>
  