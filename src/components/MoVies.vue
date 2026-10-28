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
    
    <!-- HEADER SECTION -->
    <header class="header-banner">
      <Clapperboard class="bg-icon icon-left" :size="180" />
      <Film class="bg-icon icon-right" :size="200" />

      <div class="header-content">
        <div class="collection-badge">
          <span class="purple-dot"></span>
          <span>Movie Collection</span>
        </div>

        <div class="title-row">
          <h1 class="gradient-title">Movies</h1>
          <Star class="star-outline-icon" :size="36" />
        </div>

        <p class="header-desc">
          Discover amazing films from around the world. Stream and download your favorite movies in HD quality.
        </p>

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

    <!-- SEARCH & CONTROLS BAR -->
    <div class="search-controls-container">
      <div class="search-controls-box">
        <div class="input-wrapper">
          <Search :size="18" class="search-icon" />
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search movies by title, year, or actor..." 
          />
        </div>

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
      <div v-if="filteredMovies.length === 0" class="no-movies">
        <p>Nta film ibonetse yihuye n'ibyo ushakisha "{{ searchQuery }}".</p>
      </div>

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
          <div class="poster-wrapper">
            <img :src="movie.poster" :alt="movie.title" class="poster-img" />
            <span class="translator-badge">{{ movie.translator }}</span>
            <span class="year-badge">{{ movie.year }}</span>

            <div class="play-overlay">
              <div class="play-circle">
                <Play :size="24" fill="white" color="white" />
              </div>
            </div>
          </div>

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
  overflow-x: hidden;
  width: 100%;
}

/* 1. HEADER BANNER STYLES */
.header-banner {
  background: linear-gradient(135deg, #2e1065 0%, #1e1b4b 40%, #030712 100%);
  border-radius: 16px;
  padding: 24px 16px;
  margin: 12px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
}

.header-content {
  max-width: 700px;
  position: relative;
  z-index: 2;
}

.bg-icon {
  position: absolute;
  color: rgba(255, 255, 255, 0.03);
  pointer-events: none;
}
.icon-left { top: 10px; left: -20px; }
.icon-right { top: -10px; right: 10px; }

.collection-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #e9d5ff;
  margin-bottom: 12px;
}

.purple-dot {
  width: 6px;
  height: 6px;
  background-color: #a855f7;
  border-radius: 50%;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.gradient-title {
  font-size: 30px;
  font-weight: 800;
  font-family: Georgia, serif;
  background: linear-gradient(to right, #f472b6, #c084fc, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.star-outline-icon {
  color: #a855f7;
  opacity: 0.8;
  width: 26px;
  height: 26px;
}

.header-desc {
  color: #cbd5e1;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.header-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag-box {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
  color: #e2e8f0;
}

/* 2. SEARCH & CONTROLS BAR STYLES */
.search-controls-container {
  margin: -15px 12px 25px 12px;
  position: relative;
  z-index: 10;
}

.search-controls-box {
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
}

.input-wrapper input {
  width: 100%;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 12px 14px 12px 42px;
  border-radius: 12px;
  color: white;
  font-size: 13px;
  outline: none;
  transition: 0.3s;
}

.input-wrapper input:focus {
  border-color: #a855f7;
}

.actions-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.filters-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  flex-grow: 1;
  justify-content: center;
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
  padding: 7px 12px;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-switcher button.active {
  background: #8400ff;
  color: white;
}

/* 3. MOVIES GRID & CARDS STYLES (Kuri Mobile ziba 1 Column) */
.content-container {
  width: 100%;
  padding: 0 12px;
}

.movies-grid {
  display: grid;
  grid-template-columns: 1fr; /* Kuri Mobile buri card iba imwe ku murongo */
  gap: 14px;
}

.movies-list-layout {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.movie-card {
  background-color: #0f172a;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.poster-wrapper {
  position: relative;
  width: 100%;
  height: 220px; /* Ubunini bwiza kuri mobile card imwe */
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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
  width: 44px;
  height: 44px;
  background-color: #a855f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.7);
}

.movie-card:hover .play-overlay,
.movie-card.active-hover .play-overlay {
  opacity: 1;
}

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
  margin-bottom: 6px;
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
  padding: 40px 20px;
  color: #94a3b8;
  background: #0f172a;
  border-radius: 16px;
}

/* 4. MEDIA QUERIES KURI PC (Laptop & Desktop) */
@media (min-width: 768px) {
  .header-banner {
    padding: 48px 40px;
    margin: 20px auto 30px auto;
    max-width: 1450px;
    border-radius: 20px;
  }
  .gradient-title {
    font-size: 52px;
  }
  .header-desc {
    font-size: 15px;
  }
  .search-controls-container {
    max-width: 1200px;
    margin: -35px auto 40px auto;
  }
  .search-controls-box {
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
  }
  .filters-btn {
    flex-grow: 0;
    padding: 10px 18px;
  }
  .content-container {
    max-width: 1450px;
    margin: 0 auto;
  }
  .movies-grid {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); /* Kuri PC ziba nyinshi nziza */
    gap: 22px;
  }
  .poster-wrapper {
    height: 270px;
  }
  .movie-title {
    font-size: 14px;
  }
  .translator-sub {
    font-size: 11px;
  }
  .movie-stats {
    font-size: 11px;
  }
}
</style>