<script></script>

<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex justify-content-between">
      <div class="card" style="width: 18rem">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">Super Giaco</h5>
          <h6>Power: 1000</h6>
        </div>
        <img src="src\assets\diseño3.jpg" class="card-img-top" alt="..." />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fa-brands fa-mandalorian" style="color: green"></i>
            Programming: <b> Nivel leyenda </b>
          </li>
          <li class="list-group-item">
            <i class="fa-brands fa-jedi-order" style="color: maroon"></i>
            Patience: 500
          </li>
          <li class="list-group-item">
            <i
              class="fa-brands fa-galactic-senate"
              style="color: blueviolet"
            ></i>
            Funny: 500
          </li>
          <li class="list-group-item">
            <i
              class="fa-brands fa-old-republic"
              style="color: mediumvioletred"
            ></i>
            Compromise: 500
          </li>
          <li class="list-group-item" style="color: navy">
            <i class="fa-brands fa-galactic-republic"></i> Intelligence: 500
          </li>
        </ul>
        <div class="card-body">
          <div class="card-body d-flex justify-content-end">
            <a href="#" class="card-link">
              <i class="fa-solid fa-heart" style="color: crimson"></i
            ></a>
          </div>
        </div>
        <span class="operator">+</span>
        <div class="card"></div>
        <span class="operator">+</span>
        <div class="card"></div>
        <span class="operator">=</span>
        <div class="card"></div>
      </div>
    </div>
    <img
      id="publi"
      src="src\assets\WhatsApp Image 2022-06-30 at 10.43.50 PM.jpeg"
      class="img-fluid"
    />
  </div>
</template>

<style lang="css" scoped>
.card {
  background-color: hsl(281, 51%, 29%);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  box-shadow: -3px -3px 3px 0 rgba(#26e6f7, 0.6),
    3px 3px 3px 0 rgba(#f759e4, 0.6), 0 0 6px 2px rgba(#ffe759, 0.6),
    0 35px 25px -15px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 20px 10px;
}
.card > span {
  position: relative;
  top: 45%;
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 300% 300%;
  mix-blend-mode: color-dodge;
  opacity: 0.2;
  z-index: 1;
  animation: holoGradient 15s ease infinite;
}
.card:before,
.card:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.card:after {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif');
  background-position: center;
  background-size: 180%;
  mix-blend-mode: color-dodge;
  opacity: 1;
  z-index: 2;
  animation: holoSparkle 20s ease infinite;
}
.card.active:before {
  opacity: 1;
  animation: none;
  transition: none;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    transparent 25%,
    rgba(0, 231, 255, 0.7) 45%,
    rgba(255, 0, 231, 0.7) 55%,
    transparent 70%,
    transparent 100%
  );
}

@keyframes holoSparkle {
  0% {
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  70% {
    opacity: 0.5;
  }
  95% {
    opacity: 0.2;
  }
}

@keyframes holoGradient {
  3% {
    opacity: 0;
  }
  5% {
    background-position: 0% 0%;
  }
  7% {
    opacity: 0.5;
  }
  9% {
    background-position: 100% 100%;
  }
  11% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    background-position: 100% 100%;
  }
  55% {
    opacity: 0.3;
  }
  70% {
    opacity: 0;
    background-position: 0% 0%;
  }
}

h5 {
  color: hsl(0, 0%, 80%);
}

h6 {
  color: hsl(0, 0%, 80%);
}

#publi {
  width: 15vh;
  height: 15vh;
  margin-left: 3vh;
}
</style>
