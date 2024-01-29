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
        "name": "Paquete Básico",
        "description": "Un paquete perfecto para pequeñas empresas o startups que buscan un sitio web profesional a modo informativo.",
        "price": "Desde 15€/mes",
        "includes": [
          "Diseño Moderno y Funcional",
          "Optimización de rendimiento",
          "SEO Básico",
          "Diseño responsivo",
          "1 cambio al mes",
          "Certificación SSL"
        ]
      },
      {
        "name": "Paquete Avanzado",
        "description": "Ideal para empresas que quieran aumentar sus ventas de manera online, de forma cómoda y sencilla.",
        "price": "Desde 20€/mes",
        "includes": [
          "Diseño Moderno y Funcional",
          "Optimización de rendimiento",
          "SEO Básico",
          "Diseño responsivo",
          "5 cambio al mes",
          "Certificación SSL",
          "Página de contacto"
        ]
      },
      {
        "name": "Paquete Premium",
        "description": "Personaliza y dale tu estilo profesional a tu página web con nuestro Paquete Premium, una solución para empresas que buscan destacar en la web.",
        "price": "Desde 25€/mes",
        "includes": [
          "Diseño Moderno y Funcional",
          "Optimización de rendimiento",
          "SEO Básico",
          "Diseño responsivo",
          "Cambios ilimitados",
          "Certificación SSL",
          "Página de contacto",
          "Imágenes profesionales",
          "Soporte prioritario"
        ]
      },
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
