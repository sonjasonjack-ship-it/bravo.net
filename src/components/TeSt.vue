<script>
export default{
   name:"TeSt",

  
}
</script>

<script setup>
const movies = [
  {
    id: 1,
    title: "Spider Man:Brand New Day",
    epsod:"LAST EPISODE",
    genre: "Indian",
    image: "./src/assets/movies/spider.webp"
  },
  {
    id: 2,
    title: "A Shop of Killer",
    epsod:"LAST EPISODE",
    genre: "Episode 8Final",
    image: "./src/assets/movies/shop.webp"
  },
  {
    id: 3,
    title: "A bona fide killer",
    epsod:"LAST EPISODE",
    genre: "Episode 7",
    image: "../src/assets/movies/bona.webp"
  },
  
  {
    id: 4,
    title: "The Silo",
    epsod:"LAST EPISODE",
    genre: "Episode 8Final",
    image: "./src/assets/movies/silo.webp"
  },
  {
    id: 5,
    title: "Death's Game",
    epsod:"LAST EPISODE",
    genre: "Episode 5",
    image: "./src/assets/movies/death.webp"
  },
    {
    id: 6,
    title: "The Brink Of War",
    epsod:"Action",
    image: "./src/assets/movies/brink war.webp"
  },
    {
    id: 7,
    title: "The CONFINEMENT",
    epsod:"Action",
    
    image: "./src/assets/movies/Confinement.webp"
  },
    {
    id: 8,
    title: "Minione & Monster",
    epsod:"Catoon",
    image: "./src/assets/movies/minions.webp"
  },
    {
    id: 9,
    title: "Teen Titans Go!",
    epsod:"Catoon",
    image: "../src/assets/movies/teen.webp"
  },
    {
    id: 10,
    title: "A bona fide killer",
    epsod:"LAST EPISODE",
    genre: "Episode 5A",
    image: "../src/assets/movies/bona.webp"
  },
];
</script>

<template>
  <div class="">
    <!-- Navbar -->
   
    <nav class="navbar">
      <a href="./App.vue" class="logo">Bravo.net</a>

      <ul class="menu">
        <li><button  class="menu">Home</button></li>
        <li><button  class="menu">Movies</button></li>
        <li><button  class="menu">Series</button></li>
        <li><button  class="menu">About</button></li>
      </ul>
       <div class="search-box">
          <input type="text" placeholder="Search movies..." />
        </div>
    </nav>

    <!-- Content -->
     <section class="start">

    <div class="logo">
      <div class="logo-box"></div>
      <h1 class="tracking-in-expand">Bravo.net</h1>
    </div>

    <h2>Download Free Agasobanuye Series and Movies</h2>

    <a href="#" class="download-btn">
      ▶ Play and download movies now
    </a>

    <p class="small-text">
      Search our website on your browser!
    </p>


  </section>
  <div class="cont">
    
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title">
        
        Featured Movies
      </h2>
     
    </div>

    <!-- Main Hero Banner -->
    <div class="featured-card">
      <div class="featured-overlay"></div>
      <!-- Main Information -->
      <div class="featured-content">
        <h1 class="movie-title">A shop of Killer – Perfect</h1>
        <span class="tag-featured">Featured</span>
        <p class="movie-description">Agasobanuye by Perfect</p>
        
        <div class="action-buttons">
          <button class="btn btn-watch">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <path d="M0 0.999984V15C0 15.6 0.6 16 1.1 15.7L13.1 8.7C13.6 8.4 13.6 7.6 13.1 7.3L1.1 0.299984C0.6 -0.0000155 0 0.399984 0 0.999984Z"/>
            </svg>
            
          </button>
          <button class="btn btn-details">Details</button>
        </div>
      </div>

      <!-- Carousel Pagination Dots -->
      

    </div>

  </div>
    
  
        <section class="fcard">
    <div class="section-header">
      <h2>Latest Movies</h2>
      <a href="#">View All →</a>
      
    </div>

    <div class="movie-list">
      <div class="movie-card" v-for="movie in movies" :key="movie.id">
        <button class="hover-btn">  <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor"><h2>wath</h2>
              <path d="M0 0.999984V15C0 15.6 0.6 16 1.1 15.7L13.1 8.7C13.6 8.4 13.6 7.6 13.1 7.3L1.1 0.299984C0.6 -0.0000155 0 0.399984 0 0.999984Z"/>
            </svg></button>
        <img :src="movie.image" :alt="movie.title" />
        
        <div class="movie-info">
          <h3>{{ movie.title }}</h3>
          
          <h2 class="card-label">{{ movie.epsod }}</h2>
          <p>{{ movie.genre }}</p>
        </div>
      </div>
    </div>
  </section>
  
 
 <div class="card12">

    <!-- Section Title & Link -->
    <div class="section-header-cards">
      <h2 class="new">
        
        Latest Series
      </h2>
      <span class="view-all">View All &rarr;</span>
    </div>

    <!-- Cards Section -->
    <div class="card-gridnow">

      <!-- Card 1 -->
      <div class="card-style">
        <div class="image-container">
          <img class="card-image" src="https://via.placeholder.com/200x280" alt="A Shop for Killers">
        </div>
        <div class="card-content1">
          <h3 class="card-title2">A Shop for Killers - S2</h3>
          <p class="card-label">LATEST EPISODE</p>
          <p class="card-episode">Episode 6</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card-style">
        <div class="image-container">
          <img class="card-image" src="https://via.placeholder.com/200x280" alt="Wild Heart">
        </div>
        <div class="card-content1">
          <h3 class="card-title2">Wild Heart</h3>
          <p class="card-label">LATEST EPISODE</p>
          <p class="card-episode">Episode 112</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card-style">
        <div class="image-container">
          <img class="card-image" src="https://via.placeholder.com/200x280" alt="A Bona Fide Killer">
        </div>
        <div class="card-content1">
          <h3 class="card-title2">A Bona Fide Killer</h3>
          <p class="card-label">LATEST EPISODE</p>
          <p class="card-episode">Episode 2</p>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="card-style">
        <div class="image-container">
          <img class="card-image" src="https://via.placeholder.com/200x280" alt="The East Palace">
        </div>
        <div class="card-content1">
          <h3 class="card-title2">The East Palace</h3>
          <p class="card-label">LATEST EPISODE</p>
          <p class="card-episode">Episode 5</p>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="card-style">
        <div class="image-container">
          <img class="card-image" src="https://via.placeholder.com/200x280" alt="Death's Game">
        </div>
        <div class="card-content1">
          <h3 class="card-title2">Death's Game</h3>
          <p class="card-label">LATEST EPISODE</p>
          <p class="card-episode">episode 5</p>
        </div>
      </div>

    </div>

  </div>
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.navbar{
  height:70px;
  background:#111827;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 40px;
  width: auto;
   box-shadow: 0 4px 10px rgba(103, 26, 116, 0.24);
}

.logo{
  font-size:1.5rem;
  font-weight:bold;
}

.menu{
  display:flex;
  list-style:none;
  gap:30px;
}

.menu button{
  color:white;
  text-decoration:none;
  font-size: large;
}
.menu button:focus {
    color: #a855f7;
border-bottom:1px solid #430d76 ;
 font-size: large;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.menu button:hover {
    color: #a855f7;
}
.content{
  padding:30px;
}

/* Mobile */
@media(max-width:768px){
  .navbar{
    flex-direction:column;
    height:auto;
    padding:15px;
  }

  .menu{ 
    margin-top:15px;
    flex-wrap:wrap;
    justify-content:center;
  }
}

/* ===== Cards & Buttons Cursor & Styling ===== */

.menu button,
.download-btn,
.btn,
.card-btn,
.hover-btn,
.card-style,
.movie-card,
.section-header a,
.view-all {
  cursor: pointer;
}

.menu button:hover,
.download-btn:hover,
.btn:hover,
.card-btn:hover,
.hover-btn:hover {
  cursor: pointer;
}

.card-btn {
  margin-top: 10px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #a855f7, #6b21a8);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.card-btn:hover {
  background: linear-gradient(135deg, #6b21a8, #430d76);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
}

.card-btn:active {
  transform: translateY(0);
}

.card-style {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-style:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.25);
}

.movie-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(168, 85, 247, 0.25);
}

.hover-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background: rgba(168, 85, 247, 0.95);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  opacity: 1;
  transition: all 0.3s ease;
  z-index: 2;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.movie-card:hover .hover-btn {
  opacity: 1;
  background: #a855f7;
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.5);
}

.hover-btn:hover {
  background: #6b21a8 !important;
  transform: translate(-50%, -50%) scale(1.08) !important;
}

.movie-card {
  position: relative;
  overflow: hidden;
}

.section-header a:hover {
  color: #a855f7;
}

.view-all:hover {
  color: #a855f7;
}
</style>