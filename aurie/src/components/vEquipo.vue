<template>
  <div id="equipo">
    <h1>Equipo</h1>
    <div class="members">
      <div class="member" v-for="(member, i) in team" :key="i" :id="member.position">
        <div class="member-photo">
          <img :src="member.photo" height="100%" width="100%" :alt="'Imagen retrato de ' + member.name"/>
        </div>
        <div class="member-info">
          <h2>{{ member.name }}</h2>
          <hr style="width: 100%">
          <div class="member-position">{{ member.position }}</div>
          <div class="member-info-contents">
            <!--<p style="margin-bottom: 0px;">Edad: {{ member.age }}</p>-->
            <div style="display: flex; flex-wrap: wrap; align-items: center;">
              <p>Titulación: </p>
              <span class="chip" v-for="(title,i) in member.titulation" :key="i">{{ title }}</span> 
            </div>
            <div style="display: flex; flex-wrap: wrap; align-items: center;">
              <p>Idiomas: </p>
              <span class="chip" v-for="(language,i) in member.languages" :key="i">{{ language }}</span> 
            </div>
          </div>
          <a class="portafolio" v-if="member.portofolio" :href="member.portofolio" target="_blank">
            Portafolio
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vEquipo',
  data: () => ({
    team: [
      {
        name: 'Antón Loredo González ',
        position: 'CEO',
        age: 19,
        titulation: ['Microinformatica y Redes', ' Administración y Sistemas Informáticos en Red'],
        languages: ['Español', 'Inglés'],
        photo: require("@/assets/images/retrato_anton.webp"),
        portofolio: null,
      },
      {
        name: 'Kei Rodríguez Hachimaru',
        position: 'CTO',
        age: 18,
        titulation: ['Ingeniería Informática UCM'],
        languages: ['Español', 'Inglés'],
        photo: require("@/assets/images/retrato_kei.webp"),
        portofolio: "https://kei-portofolio.vercel.app",
      }
    ],
  }),
  mounted() {
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 50px;
  position: relative;
  color: var(--text);
}
h1::after {
  content: '';
  background: var(--text);
  height: 3px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  position: absolute;
}

#equipo {
  padding: 20px;
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.members {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100%- 40px);
  gap: 20px;
  max-width: 760px;
  user-select: none;
  flex-direction: row;
}
.member {
  padding: 20px;
  box-sizing: border-box;
  width: calc(50% - 10px) !important;
  flex: 1;
  height: 750px;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  color: var(--text);
  background: var(--background);
  box-shadow: 1px 1px 3px 0px #777;
  transition: transform .3s ease-out;
}
.member-photo {
  max-width: 100%;
  border: 1px solid var(--background);
  aspect-ratio: 1;
  border-radius: 5px;
  overflow: hidden;
}
.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.member-info h2 {
  width: 100%;
  text-align: left;
}
.member-info p {
  margin-left: 10px;
  font-size: 18px;
}

.member-info-contents {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.portafolio {
  padding: 5px;
  background: var(--background);
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 5px;
  width: 100px;
  text-decoration: none;
  text-align: center;
}

.portafolio:hover {
  cursor: pointer;
  color: var(--background);
  background: var(--primary);
}

.member-position {
  font-size: 14px;
  width: 100%;
  text-align: right;
  height: 0px;
  font-weight: bold;
  color: var(--primary);
}
.chip {
  font-size: 14px;
  background: var(--background);
  border: 1px solid var(--primary);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  margin: 5px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

h2 {
  margin: 0;
  font-weight: lighter;
  font-size: 30px;
}

@media only screen and (max-width: 560px) {
  #equipo {
    padding: 0px;
    padding-bottom: 20px;
  }
  .member {
    width: 280px !important;
    flex-direction: column;
    height: 560px;
    align-items: center;
  }
  .members {
    width: 100%;
    padding: 0px;
    flex-direction: column;
  }
  .member-photo {
    width: 250px;
    height: 250px;
  }
  #members {
    padding: 0px;
  }
  h2 {
    font-size: 22px;
    text-align: center !important;
    width: 100%;
  }
  .member-info p {
    font-size: 16px;
  }
  .member-info {
    max-width: 100%;
    overflow: hidden;
  }
}

@media only screen and (min-width: 561px) and (max-width: 850px) {
  .member {
    width: 400px !important;
    flex-direction: column;
    height: 600px;
    align-items: center;
  }
  .members {
    width: 100%;
    padding: 0px;
    flex-direction: column;
  }
  .member-photo {
    width: 300px;
    height: 300px;
  }
  #members {
    padding: 0px;
  }
}
</style>
