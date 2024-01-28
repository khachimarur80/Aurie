<template>
  <div id="servicios">
    <h1>Servicios</h1>
    <div class="services-list">
      <div class="service" v-for="(service, i) in services" :key="i">
        <h2>
          {{ service.name }}
        </h2>
        <p class="description">
          {{ service.description }}
        </p>
        <div v-for="(include, i) in service.includes" :key="i" class="includes">
          <span class="check">
          </span>
          <p>
            {{ include }}
          </p>
        </div>
        <div style="flex: 1"></div>
        <p class="price">
          Desde {{ service.price }} €
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vServicios',
  data: () => ({
    services: [
      {
        "name": "Paquete Inicial",
        "description": "Un paquete fundamental para establecer su presencia en línea. Ideal para pequeñas empresas o startups que buscan un sitio web profesional.",
        "price": "999",
        "includes": [
          "Página de Inicio Personalizada",
          "Página Acerca de Nosotros",
          "Integración de Formulario de Contacto",
          "Adaptabilidad para Dispositivos Móviles"
        ]
      },
      {
        "name": "E-Commerce",
        "description": "Eleve su tienda en línea con esta solución integral de comercio electrónico. Perfecta para empresas que buscan una presencia online sólida.",
        "price": "2,499",
        "includes": [
          "Configuración del Catálogo de Productos",
          "Integración del Carrito de Compras",
          "Integración de Pasarela de Pago",
          "Diseño Adaptable"
        ]
      },
      {
        "name": "Web Personalizada",
        "description": "Soluciones a medida para empresas con requisitos específicos. Nuestro equipo trabajará estrechamente contigo para crear un sitio web único y potente.",
        "price": "Desde 3,499",
        "includes": [
          "Diseño y Maquetación Personalizados",
          "Integración de Funcionalidades Avanzadas",
          "Integración de Bases de Datos",
          "Optimización de Escalabilidad y Rendimiento"
        ]
      },
      {
        "name": "Mantenimiento y Soporte",
        "description": "Asegure la longevidad y el rendimiento óptimo de su sitio web con nuestros servicios dedicados de mantenimiento y soporte.",
        "price": "299/mes",
        "includes": [
          "Actualizaciones de Seguridad Regulares",
          "Actualizaciones y Ediciones de Contenido",
          "Soporte Técnico",
          "Monitoreo de Rendimiento"
        ]
      }
    ]
  })
}
</script>

<style scoped>
h2 {
  margin: 0;
  font-weight: lighter;
  font-size: 30px;
  text-align: center;
}
h1 {
  text-align: center;
  color: var(--background-dark);
  position: relative;
  margin-bottom: 40px;
  text-align: center;
}
h1::after {
  content: '';
  background: var(--background-dark);
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  position: absolute;
}
#servicios {
  padding: 20px;
  background: white;
  margin: 0px;
  margin-top: -5px;
  color: var(--background-dark);
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
  background: var(--background-d);
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
}
.check {
  height: 20px;
  width: 20px;
  background: url('@/assets/check.svg');
  background-size: cover;
}
.includes p, .includes span {
  margin: 0;
}
.includes p {
  max-width: calc(100% - 40px);
}
.price {
  border-radius: 5px;
  background: var(--primary);
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

@media only screen and (max-width: 670px) {
  .service {
    max-width: calc(100% - 20px);
    min-width: calc(100% - 20px);
  }
  h2 {
    margin-bottom: 20px;
  }
  .description {
    display: none;
  }
}

@media only screen and (min-width: 671px) and (max-width: 980px) {
  .service {
    max-width: calc(33% - 20px);
  }
}
</style>
