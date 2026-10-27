<script>
export default{
  name:"MoVies"
}
</script>
<script setup>
import { ref, computed } from 'vue'
import { 
  Play, 
  Eye, 
  Search, 
  SlidersHorizontal, 
  Grid, 
  List, 
  TrendingUp, 
  Clock, 
  Star, 
  Clapperboard, 
  Film 
} from 'lucide-vue-next'

// State
const searchQuery = ref('')
const isGridView = ref(true)

// Urutonde rwa Movies 12
const moviesList = ref([
  { id: 1, title: 'ALPHA', translator: 'ROCKY', year: '2026', views: '1,719', poster: './src/assets/movies/alpha.jpg' },
  { id: 2, title: 'Furious Attack', translator: 'un', year: '2026', views: '1,048', poster: './src/assets/movies/furious.jpg' },
  { id: 3, title: 'Atlas King', translator: 'PERFECT', year: '2026', views: '1,117', poster: './src/assets/movies/atlas.jpg' },
  { id: 4, title: 'Raja Shivaji', translator: 'PERFECT', year: '2026', views: '1,696', poster: './src/assets/movies/raja.jpg' },
  { id: 5, title: 'Hungry (2026)', translator: 'VJ KABOSI', year: '2026', views: '762', poster: './src/assets/movies/hungry.jpg' },
  { id: 6, title: 'A Bona Fide Killer', translator: 'DIDIER', year: '2026', views: '3,410', poster: './src/assets/movies/bona.webp' },
  { id: 7, title: 'The Silo', translator: 'ROCKY', year: '2026', views: '1,920', poster: './src/assets/movies/silo.webp' },
  { id: 8, title: "Death's Game", translator: 'PERFECT', year: '2026', views: '2,100', poster: './src/assets/movies/death.webp' },
  { id: 9, title: 'The Brink Of War', translator: 'ROCKY', year: '2026', views: '1,640', poster: './src/assets/movies/brink war.webp' },
  { id: 10, title: 'The CONFINEMENT', translator: 'VJ KABOSI', year: '2026', views: '1,230', poster: './src/assets/movies/Confinement.webp' },
  { id: 11, title: 'Minions & Monster', translator: 'DIDIER', year: '2026', views: '890', poster: './src/assets/movies/minions.webp' },
  { id: 12, title: 'Teen Titans Go!', translator: 'PERFECT', year: '2026', views: '1,560', poster: './src/assets/movies/teen.webp' }
])

// Computed Filter
const filteredMovies = computed(() => {
  return moviesList.value.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    movie.translator.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    movie.year.includes(searchQuery.value)
  )
})
</script>

<template>
  <div class="movies-page">
    
    <!-- HEADER SECTION (Nk'uko biri ku ishusho) -->
    <header class="header-banner">
      <!-- Background Clapperboard Icon Effects -->
      <Clapperboard class="bg-icon icon-left" :size="180" />
      <Film class="bg-icon icon-right" :size="200" />

      <div class="header-content">
        <!-- Badge -->
        <div class="collection-badge">
          <span class="purple-dot"></span>
          <span>Movie Collection</span>
        </div>

        <!-- Title & Icon -->
        <div class="title-row">
          <h1 class="gradient-title">Movies</h1>
          <Star class="star-outline-icon" :size="36" />
        </div>

        <!-- Description -->
        <p class="header-desc">
          Discover amazing films from around the world. Stream and download your favorite movies in HD quality.
        </p>

        <!-- Feature Badges -->
        <div class="header-tags">
          <div class="tag-box">
            <TrendingUp :size="15" color="#c084fc" />
            <span>529+ Movies</span>
          </div>

          <div class="tag-box">
            <Clock :size="15" color="#c084fc" />
            <span>Updated Daily</span>
          </div>

          <div class="tag-box">
            <Star :size="15" color="#facc15" />
            <span>HD Quality</span>
          </div>
        </div>
      </div>
    </header>

    <!-- SEARCH & CONTROLS BAR (Nk'uko biri ku ishusho) -->
    <div class="search-controls-container">
      <div class="search-controls-box">
        
        <!-- Search Input -->
        <div class="input-wrapper">
          <Search :size="18" class="search-icon" />
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search movies by title, year, or actor..." 
          />
        </div>

        <!-- Actions (Filters & Layout View Switcher) -->
        <div class="actions-wrapper">
          <button class="filters-btn">
            <SlidersHorizontal :size="16" />
            <span>Filters</span>
          </button>

          <div class="view-switcher">
            <button 
              :class="{ active: isGridView }" 
              @click="isGridView = true"
              title="Grid View"
            >
              <Grid :size="18" />
            </button>
            <button 
              :class="{ active: !isGridView }" 
              @click="isGridView = false"
              title="List View"
            >
              <List :size="18" />
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- MOVIES CONTENT GRID -->
    <main class="content-container">
      <!-- No Results Message -->
      <div v-if="filteredMovies.length === 0" class="no-movies">
        <p>Nta film ibonetse yihuye n'ibyo ushakisha "{{ searchQuery }}".</p>
      </div>

      <!-- Grid Cards -->
      <div 
        v-else 
        :class="isGridView ? 'movies-grid' : 'movies-list-layout'"
      >
        <div 
          v-for="(movie, index) in filteredMovies" 
          :key="movie.id" 
          class="movie-card"
          :class="{ 'active-hover': index === 1 }"
        >
          <!-- Poster -->
          <div class="poster-wrapper">
            <img :src="movie.poster" :alt="movie.title" class="poster-img" />
            <span class="translator-badge">{{ movie.translator }}</span>
            <span class="year-badge">{{ movie.year }}</span>

            <!-- Play Overlay -->
            <div class="play-overlay">
              <div class="play-circle">
                <Play :size="24" fill="white" color="white" />
              </div>
            </div>
          </div>

          <!-- Movie Info -->
          <div class="movie-info">
            <h3 class="movie-title">{{ movie.title }}</h3>
            <p class="translator-sub">agasobanuye by {{ movie.translator.toLowerCase() }}</p>
            <div class="movie-stats">
              <Eye :size="13" color="#94a3b8" />
              <span>{{ movie.views }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<style scoped>
.movies-page {
  background-color: #030712;
  min-height: 100vh;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding-bottom: 60px;
}

/* 1. HEADER BANNER STYLES */
.header-banner {
     background: linear-gradient(135deg, #2e1065 0%, #1e1b4b 40%, #030712 100%);
  border-radius: 20px;
  padding: 48px 40px;
  margin: 20px 0 30px 80px;
  position: relative;
  max-width: 1490px;
  overflow: hidden;
  border: 1px solid rgba(16, 185, 129, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
  /* position: relative;
  background: linear-gradient(135deg, #2e1065 0%, #1e1b4b 40%, #030712 100%);
  padding: 60px 20px 80px 20px;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); */
}

.header-content {
  max-width: 700px;
  position: relative;
  z-index: 2;
}

/* Background Icons */
.bg-icon {
  position: absolute;
  color: rgba(255, 255, 255, 0.03);
  pointer-events: none;
}
.icon-left { top: 20px; left: -30px; }
.icon-right { top: -20px; right: 20px; }

/* Badge */
.collection-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 13px;
  color: #e9d5ff;
  margin-bottom: 20px;
}

.purple-dot {
  width: 7px;
  height: 7px;
  background-color: #a855f7;
  border-radius: 50%;
}

/* Title */
.title-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.gradient-title {
  font-size: 56px;
  font-weight: 800;
  font-family: Georgia, serif;
  background: linear-gradient(to right, #f472b6, #c084fc, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.star-outline-icon {
  color: #a855f7;
  opacity: 0.8;
}

/* Desc */
.header-desc {
  color: #cbd5e1;
  font-size: 16px;
  max-width: 520px;
  line-height: 1.6;
  margin-bottom: 30px;
}

/* Header Tags */
.header-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tag-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
}

/* 2. SEARCH & CONTROLS BAR STYLES */
.search-controls-container {
  margin-top: 140px;
  max-width: 1200px;
  margin: -35px auto 40px auto;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.search-controls-box {
  margin-top: 100px;
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.input-wrapper {
  position: relative;
  flex-grow: 1;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
}

.input-wrapper input {
  width: 100%;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 12px 16px 12px 46px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  outline: none;
  transition: 0.3s;
}

.input-wrapper input:focus {
  border-color: #a855f7;
}

.actions-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.filters-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.filters-btn:hover {
  background: #334155;
}

.view-switcher {
  display: flex;
  background: #1e293b;
  padding: 3px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.view-switcher button {
  background: transparent;
  border: none;
  color: #64748b;
  padding: 7px 10px;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.view-switcher button.active {
  background: #8400ff;
  color: white;
}

/* 3. MOVIES GRID & CARDS STYLES */
.content-container {
  max-width: 1490px;
  margin: 0 auto;
  padding: 0 20px;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 22px;
}

.movies-list-layout {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.movie-card {
  background-color: #0f172a;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.poster-wrapper {
  position: relative;
  width: 100%;
  height: 270px;
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Badges */
.translator-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #8b5cf6;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 6px;
  text-transform: uppercase;
}

.year-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: #e2e8f0;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 7px;
  border-radius: 6px;
}

/* Play Overlay & Active/Hover */
.play-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.play-circle {
  width: 48px;
  height: 48px;
  background-color: #a855f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.movie-card:hover {
  border-color: #a855f7;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.35);
  transform: translateY(-6px);
}

.movie-card:hover .play-overlay,
.movie-card.active-hover .play-overlay {
  opacity: 1;
}

.movie-card:hover .play-circle,
.movie-card.active-hover .play-circle {
  transform: scale(1);
}

.movie-card.active-hover {
  border-color: #a855f7;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.35);
}

/* Movie Info Bottom */
.movie-info {
  padding: 12px;
  background-color: #0f172a;
}

.movie-title {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.translator-sub {
  color: #94a3b8;
  font-size: 11px;
  margin-bottom: 8px;
}

.movie-stats {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #64748b;
  font-size: 11px;
}

.no-movies {
  text-align: center;
  padding: 50px 20px;
  color: #94a3b8;
  background: #0f172a;
  border-radius: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .search-controls-box {
    flex-direction: column;
    align-items: stretch;
  }
  .actions-wrapper {
    justify-content: space-between;
  }
}
</style>