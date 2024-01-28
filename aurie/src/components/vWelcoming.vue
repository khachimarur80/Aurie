<template>
  <div id="welcome">
    <div class="message">
      <div class="face">
        <span id="hola">
          Hola!
        </span>
        <span id="somos">
          Somos ...
        </span>
      </div>
      <div class="face">
        <span id="aurie">
          Aurie
        </span>
      </div>
      <div id="logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vWelcoming',
  mounted() {
  },
};
</script>

<style scoped>
  @keyframes welcome {
    from {
      background-color: var(--background);
    }
    to {
      background-color: var(--primary);
    }
  }

  #welcome {
    width: 100h;
    height: 100vh;
    background: var(--background);
    position: relative;
    animation: welcome .5s ease-out forwards 2.5s;
    z-index: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
  }


  @keyframes messageBox {
    0% {
      border: 0px solid var(--primary);
    }
    50% {
      border: 3px solid var(--primary);
    }
    100% {
      border: 0px solid var(--primary);
    }
  }

  @keyframes messageBoxBrown {
    0% {
      border: 0px solid var(--primary);
    }
    100% {
      border: 3px solid var(--text);
    }
  }

  @keyframes revealFace1 {
    from {
      transform: perspective(800px) rotateX(0deg) translate(-50%, -50%);
    }
    to {
      transform: perspective(800px) rotateX(90deg) scaleX(.8) translate(-50%, -50%);
    }
  }
  @keyframes revealFace2 {
    from {
      transform: perspective(800px) rotateX(-90deg) translate(-50%, -50%);
    }
    to {
      transform: perspective(800px) rotateX(0deg) translate(-50%, -50%);
    }
  }

  @keyframes toNavbar {
    from {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 300px;
      width: 300px;
    }
    to {
      top: 10px;
      left: 10px;
      transform: translate(0%, 0%);
      height: 100px;
      width: 100px;
    }
  }
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: var(--text);
    font-weight: bold;
    animation: toNavbar 1s ease-in-out forwards 2s;
    height: 300px;
    width: 300px;
  }

  @keyframes titleBar {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(100% + 20px));
    }
  }

  #aurie {
    animation: titleBar 1s ease-in-out forwards 2s;
  }

  @keyframes showLogo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    background: url('@/assets/logo.svg');
    background-size: 100% 100%;
    opacity: 0;
    animation: showLogo .5s ease-in-out forwards 2.2s;
  }

  .face {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .face:nth-child(1) {
    animation: revealFace1 1s ease-out forwards 2s, messageBox 3s ease-out forwards;
  }

  @keyframes faceOut {
    from {
      border-color: var(--background-dark);
    }
    to {
      border-color: var(--primary);
    }
  }

  .face:nth-child(2) {
    transform: perspective(800px) rotateX(-90deg) translateZ(0px) translate(-50%, -50%);
    animation: revealFace2 1s ease-out forwards 2s, messageBox 3s ease-out forwards, messageBoxBrown .5s ease-out forwards 2s, faceOut .5s ease-out forwards 2.5s;
  }

  @keyframes fadeTextLeft {
    0% {
      transform: translateX(-100%) skewX(10deg) scaleX(.8);
      opacity: 0;
    }
    25% {
      transform: translateX(16%) skewX(-5deg) scaleX(1.2);
      opacity: 1;
    }
    40% {
      transform: translateX(-16%) skewX(3deg) scaleX(.9);
      opacity: 0.8;
    }
    55% {
      transform: translateX(8%) skewX(-2deg) scaleX(1.1);
      opacity: 1;
    }
    70% {
      transform: translateX(-8%) skewX(1deg) scaleX(.95);
      opacity: 0.9;
    }
    86% {
      transform: translateX(4%) skewX(-1deg) scaleX(1.05);
      opacity: 1;
    }
    100% {
      transform: translateX(0%) skewX(0deg) scaleX(1);
      opacity: 1;
    }
  }

  #hola {
    animation-name: fadeTextLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    opacity: 0;
  }


  @keyframes fadeTextRight {
    0% {
      transform: translateX(100%) skewX(10deg) scaleX(1.2);
      opacity: 0;
    }
    25% {
      transform: translateX(-16%) skewX(-5deg) scaleX(.8);
      opacity: 1;
    }
    40% {
      transform: translateX(16%) skewX(3deg) scaleX(1.1);
      opacity: .8;
    }
    55% {
      transform: translateX(-8%) skewX(-2deg) scaleX(.9);
      opacity: 1;
    }
    70% {
      transform: translateX(8%) skewX(1deg) scaleX(1.05);
      opacity: .9;
    }
    86% {
      transform: translateX(-4%) skewX(-1deg) scaleX(.95);
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateX(0%) skewX(0deg) scaleX(1);
    }
  }

  #somos {
    animation-name: fadeTextRight;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: .5s;
    opacity: 0;
  }

  @keyframes fadeCube {
  0% {
    opacity: 0;
    transform: skewY(90deg)
  }
  50% {
    opacity: 1;
    transform: skewY(90deg)
  }
  100% {
    transform: skewY(90deg);
  }
}

  @keyframes fadeLogoIn{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
