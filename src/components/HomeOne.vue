<template>
  <section class="hero">

    <div class="logo">
      <div class="logo-box"></div>
      <h1>Bravo.net</h1>
    </div>

    <h2>Download Free Agasobanuye Series and Movies</h2>

    <a href="#" class="download-btn">
      ▶ Play and download movies now
    </a>

    <p class="small-text">
      Search our website anywhere on your browser!
    </p>

   

    <p class="description">
      Welcome to Isata. Download Agasobanuye Ku Buntu ka basobanuzi bose ushaka.
      <br>
      Find your favorite movies and series here.
    </p>

  </section>
</template>

<style scoped>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.hero{
    background:#121827;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    padding:40px 20px;
}

.logo{
    display:flex;
    align-items:center;
    gap:15px;
    margin-bottom:20px;
}

.logo-box{
    width:65px;
    height:65px;
    border-radius:50%;
    background:#1d2d50;
    background: url('./9a62ed03-8d18-4b27-8005-f938e3e8d116.png');
    border:1px solid rgba(255,255,255,.15);
    position:relative;
}



.logo h1{
    font-size:72px;
    font-weight:bold;
    background:linear-gradient(90deg,#ffc107,#ff9d2e,#ffe082);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

.hero h2{
    font-size:28px;
    font-weight:400;
    margin-bottom:25px;
    text-align:center;
}

.download-btn{
    background:#18a64d;
    color:white;
    text-decoration:none;
    padding:16px 35px;
    border-radius:50px;
    font-size:24px;
    font-weight:bold;
    transition:.3s;
}

.download-btn:hover{
    background:#13833d;
}

.small-text{
    color:#9ca3af;
    margin-top:15px;
    font-style:italic;
    font-size:16px;
}

.description{
    margin-top:35px;
    color:#9ca3af;
    text-align:center;
    line-height:1.7;
    font-size:22px;
}

@media(max-width:768px){

.logo h1{
    font-size:45px;
}

.hero h2{
    font-size:22px;
}

.notice{
    flex-direction:column;
    text-align:center;
}

.welcome{
    font-size:18px;
}

.description{
    font-size:18px;
}

}

</style>
<template>
  <div class="contai">
    <h1 class="tracking-in-expand">Bienvenue muri Vue + Animista!</h1>
    
    <div class="card-container">
      <div class="card scale-up-center">
        <h2>Card ya 1</h2>
        <p>Iyi card ikoresha animasiyo ya <code>scale-up-center</code>.</p>
        <button class="btn vibrate-1">Kanda Hano</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Nta logic y'agahozo ikenewe mu kugaragaza animasiyo
</script>

<style scoped>
/* Page Layout Styling */
.contai{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1a1a24;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 20px;
}

.card-container {
  margin-top: 30px;
}

.card {
  background: #2a2a3b;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  max-width: 350px;
}

.btn {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
}

/* ===================================================
   ANIMISTA CODES (Copy-pasted directly from Animista)
   =================================================== */

/* 1. Animation: tracking-in-expand (kuri Title) */
.tracking-in-expand {
  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

/* 2. Animation: scale-up-center (kuri Card) */
.scale-up-center {
  animation: scale-up-center 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

/* 3. Animation: vibrate-1 (kuri Button) */
.vibrate-1:hover {
  animation: vibrate-1 0.3s linear infinite both;
}

@keyframes vibrate-1 {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
</style>