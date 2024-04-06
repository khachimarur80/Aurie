<template>
    <div id="labor">
      <h1>Nuestra labor</h1>
      <br>
      <div class="section-text">
        Nosotros llevaremos todos los trámites, cumpliendo con la normativa y documentando todo el proceso, para que simplemente tengas que disfrutar de esta ayuda.
      </div><br>
      <a class="ver-mas" href="https://www.acelerapyme.gob.es/kit-digital" target="_blank">
        Web Oficial
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'vLabor',
    data: () => ({
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
        margin: 0;
        font-weight: lighter;
        font-size: 30px;
        text-align: center;
    }
    h1 {
        color: rgb(253, 76, 56);
        font-size: 35px;
        margin: 0px;
        font-weight: 900;
        text-shadow: 0px 0px 4px rgb(253, 76, 56);
        position: relative;
        margin-top: 20px;
        margin-bottom: 80px;
        text-align: center;
    }
    h1::after {
        content: '';
        background: rgb(253, 76, 56);
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
  #labor {
    padding: 20px;
    margin: 0px;
    margin-top: -5px;
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
  