<script setup>
import { ref, onMounted } from 'vue';
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Clock, 
  Star, 
  Tv 
} from 'lucide-vue-next';

// TMDB API Configuration
const TMDB_API_KEY = '6c67c21e5caa5b29285f37225c07aec9';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// 1. Abasobanuzi batandukanye bazuzwamo data zavuye muri TMDB API
const translators = ref([
  {
    id: 1,
    name: "Agasobanuye by Perfect",
    endpoint: `${TMDB_BASE_URL}/trending/tv/week?api_key=${TMDB_API_KEY}`,
    movies: []
  },
  {
    id: 2,
    name: "Agasobanuye by Yago",
    endpoint: `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}`,
    movies: []
  },
  {
    id: 3,
    name: "Agasobanuye by Rocky",
    endpoint: `${TMDB_BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}`,
    movies: []
  }
]);

// Gukurura data zose za TMDB kuri buri musobanuzi
const fetchTranslatorsData = async () => {
  try {
    for (let translator of translators.value) {
      const response = await fetch(translator.endpoint);
      const data = await response.json();

      translator.movies = (data.results || []).slice(0, 8).map(item => ({
        id: item.id,
        title: item.name || item.title,
        epsod: 'SERIES',
        genre: 'Episode',
        image: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster'
      }));
    }
  } catch (error) {
    console.error('Ikibazo mu gukurura data za TMDB:', error);
  }
};

onMounted(() => {
  fetchTranslatorsData();
});

// Gukoresha scroll ibumoso cyangwa iburyo kuri buri musobanuzi
const scrollLeft = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    container.scrollBy({ left: -350, behavior: 'smooth' });
  }
};

const scrollRight = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    container.scrollBy({ left: 350, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="series-page">
    <!-- HERO HEADER SECTION (TEAL EMERALD STYLE) -->
    <header class="series-header">
      <div class="header-inner">
        <!-- Top Collection Tag -->
        <div class="collection-badge">
          <span class="green-dot"></span>
          <span>TV Series Collection</span>
        </div>

        <!-- Main Title -->
        <h1 class="header-title">Series</h1>

        <!-- Subtitle -->
        <p class="header-description">
          Discover binge-worthy TV shows and series. From drama to comedy, find your next obsession.
        </p>

        <!-- Stat Pills / Badges -->
        <div class="header-badges">
          <div class="badge-pill">
            <TrendingUp :size="16" class="pill-icon" />
            <span>217+ Series</span>
          </div>
          <div class="badge-pill">
            <Clock :size="16" class="pill-icon" />
            <span>Updated Weekly</span>
          </div>
          <div class="badge-pill">
            <Star :size="16" class="pill-icon star-icon" />
            <span>HD Quality</span>
          </div>
        </div>

        <!-- Decorative Right TV Icon -->
        <div class="decorative-tv">
          <Tv :size="120" stroke-width="1.2" />
        </div>
      </div>
    </header>

    <!-- TRANSLATORS HORIZONTAL SCROLL SECTIONS -->
    <div class="translators-container">
      <div v-for="translator in translators" :key="translator.id" class="translator-section">
        <div class="translator-header">
          <h2>{{ translator.name }}</h2>
          <div class="scroll-buttons">
            <button @click="scrollLeft(`scroll-row-${translator.id}`)" class="arrow-btn" title="Ibumoso">
              <ChevronLeft :size="20" />
            </button>
            <button @click="scrollRight(`scroll-row-${translator.id}`)" class="arrow-btn" title="Iburyo">
              <ChevronRight :size="20" />
            </button>
          </div>
        </div>

        <!-- Horizontal Scroll Row -->
        <div :id="`scroll-row-${translator.id}`" class="horizontal-scroll-row">
          <div v-for="movie in translator.movies" :key="movie.id" class="movie-card">
            <div class="card-image">
              <img :src="movie.image" :alt="movie.title" loading="lazy" />
              <span class="badge">{{ movie.epsod }}</span>
            </div>
            <div class="card-details">
              <h3>{{ movie.title }}</h3>
              <div class="card-footer">
                <span class="genre">{{ movie.genre }}</span>
                <button class="watch-btn"><Play :size="14" fill="white" /> Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.series-page {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px 60px 20px;
  color: #f3f4f6;
}

/* HERO HEADER STYLING (DARK TEAL EMERALD) */
.series-header {
  background: radial-gradient(circle at top left, #064e3b 0%, #022c22 45%, #030712 100%);
  border-radius: 20px;
  padding: 48px 40px;
  margin: 20px 0 30px 0;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(16, 185, 129, 0.15);
}

.header-inner {
  max-width: 700px;
  position: relative;
  z-index: 2;
}

.collection-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #34d399;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.green-dot {
  width: 7px;
  height: 7px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}

.header-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 12px;
  line-height: 1;
  letter-spacing: -0.5px;
}

.header-description {
  color: #a7f3d0;
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 28px;
  max-width: 620px;
  opacity: 0.9;
}

.header-badges {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.badge-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(6, 78, 59, 0.5);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #ecfdf5;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
}

.pill-icon {
  color: #34d399;
}

.star-icon {
  color: #fbbf24;
}

.decorative-tv {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(16, 185, 129, 0.15);
  pointer-events: none;
}

/* TRANSLATORS HORIZONTAL SCROLL SECTIONS */
.translators-container {
  padding: 20px 0;
}

.translator-section {
  margin-bottom: 40px;
}

.translator-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 10px;
  border-left: 4px solid #2d7cff;
}

.translator-header h2 {
  font-size: 1.4rem;
  color: white;
  font-weight: 700;
}

.scroll-buttons {
  display: flex;
  gap: 8px;
}

.arrow-btn {
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.arrow-btn:hover {
  background: #8400ff;
  transform: scale(1.05);
}

.horizontal-scroll-row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 4px 20px 4px;
  scrollbar-width: thin;
  scrollbar-color: #8400ff06 #0f172a;
}

.horizontal-scroll-row::-webkit-scrollbar {
  height: 8px;
}

.horizontal-scroll-row::-webkit-scrollbar-track {
  background: #0f172a;
  border-radius: 10px;
}

.horizontal-scroll-row::-webkit-scrollbar-thumb {
  background: #8400ff;
  border-radius: 20px;
}

.movie-card {
  min-width: 230px;
  max-width: 230px;
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.card-image {
  position: relative;
  height: 280px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #8400ff;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 6px;
}

.card-details {
  padding: 14px;
}

.card-details h3 {
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  color: white;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.genre {
  font-size: 0.8rem;
  color: #94a3b8;
}

.watch-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #8400ff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.2s;
}

.watch-btn:hover {
  background: #7000df;
}

@media (max-width: 900px) {
  .hero-banner {
    padding: 25px 20px;
  }
  .featured-title {
    font-size: 2.8rem;
  }
}
</style>