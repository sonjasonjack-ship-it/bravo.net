<script setup>
// Nta script nyinshi ikenewe, ni amakuru asanzwe (static data)
</script>

<template>
  <div class="movie-card">
    <!-- Ibumoso: Ishusho na Rating -->
    <div class="poster-container">
      <img src="./assets/poster.jpg" alt="Devious Maids Poster" class="poster-img" />
      <span class="rating-badge">7.1</span>
    </div>

    <!-- Iburyo: Amakuru yose -->
    <div class="content-container">
      <div class="header-section">
        <h2 class="title">Devious Maids</h2>
        <p class="subtitle">agasobanuye by rocky</p>
      </div>

      <div class="synopsis-section">
        <h3 class="section-title">Synopsis</h3>
        <p class="synopsis-text">
          The series centers on four Latina maids working in the homes of Beverly Hills’ wealthiest and most powerful families, and a newcomer who made it personal after a maid was murdered and determined to uncover the truth behind her demise, and in the process become an ally in their lives.
        </p>
      </div>

      <!-- Akazu k'Epode iheruka -->
      <div class="latest-episode-box">
        <span class="episode-label">Latest Episode</span>
        <p class="episode-name">episode 13final</p>
      </div>
    </div>

    <!-- Ibipimo n'Abayikoze (Metadata iri iburyo kure) -->
    <div class="meta-sidebar">
      <div class="meta-item">
        <span class="meta-icon bg-purple">Y</span>
        <div class="meta-info">
          <small>Year</small>
          <strong>2013</strong>
        </div>
      </div>

      <div class="meta-item">
        <span class="meta-icon bg-green">T</span>
        <div class="meta-info">
          <small>Runtime</small>
          <strong>43m</strong>
        </div>
      </div>

      <div class="meta-item">
        <span class="meta-icon bg-red">C</span>
        <div class="meta-info">
          <small>Creator</small>
          <strong>Marc Cherry</strong>
        </div>
      </div>

      <div class="meta-item">
        <span class="meta-icon bg-blue">S</span>
        <div class="meta-info">
          <small>Cast</small>
          <strong>Ana Ortiz, Dania Ramirez, Roselyn Sánchez, Judy R...</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  display: flex;
  gap: 30px;
  background-color: #0f172a;
  border: 2px solid #1e293b;
  padding: 25px;
  border-radius: 20px;
  color: white;
  max-width: 950px;
  margin: 20px auto;
  font-family: sans-serif;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  align-items: flex-start;
}

/* Poster Styles */
.poster-container {
  position: relative;
  flex-shrink: 0;
}

.poster-img {
  width: 220px;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
}

.rating-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f97316;
  color: white;
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 8px;
  font-size: 14px;
}

/* Content Styles */
.content-container {
  flex-grow: 1;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 4px;
}

.subtitle {
  color: #94a3b8;
  font-size: 15px;
  margin-bottom: 20px;
}

.section-title {
  color: #fbbf24;
  font-size: 16px;
  margin-bottom: 8px;
}

.synopsis-text {
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* Latest Episode Box */
.latest-episode-box {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid #334155;
  padding: 12px 15px;
  border-radius: 12px;
}

.episode-label {
  color: #60a5fa;
  font-size: 13px;
  font-weight: 600;
}

.episode-name {
  font-weight: bold;
  font-size: 15px;
  margin-top: 2px;
}

/* Meta Sidebar (Iburyo cyane) */
.meta-sidebar {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 220px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.meta-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
}

.bg-purple { background-color: #8b5cf6; }
.bg-green { background-color: #10b981; }
.bg-red { background-color: #ef4444; }
.bg-blue { background-color: #3b82f6; }

.meta-info small {
  display: block;
  color: #94a3b8;
  font-size: 11px;
}

.meta-info strong {
  font-size: 13px;
  color: #f8fafc;
}
</style>
<!-- cards -->
<script setup>
import { ref } from 'vue'
import { Play, Eye } from 'lucide-vue-next'

// Urutonde rw'amavidewo (Movies List)
const movies = ref([
  {
    id: 1,
    title: 'ALPHA',
    translator: 'ROCKY',
    year: '2026',
    views: '1,719',
    poster: './assets/alpha.jpg'
  },
  {
    id: 2,
    title: 'Furious Attack',
    translator: 'un',
    year: '2026',
    views: '1,048',
    poster: './assets/furious.jpg'
  },
  {
    id: 3,
    title: 'Atlas King',
    translator: 'PERFECT',
    year: '2026',
    views: '1,117',
    poster: './assets/atlas.jpg'
  },
  {
    id: 4,
    title: 'Raja Shivaji (2026)',
    translator: 'Perfect',
    year: '2026',
    views: '1,696',
    poster: './assets/raja.jpg'
  },
  {
    id: 5,
    title: 'Hungry (2026)',
    translator: 'VJ KABOSI',
    year: '2026',
    views: '762',
    poster: './assets/hungry.jpg'
  }
])
</script>
<!--wakanda cards -->
<template>
  <div class="movies-grid-container">
    <div 
      v-for="(movie, index) in movies" 
      :key="movie.id" 
      class="movie-card"
      :class="{ 'active-hover': index === 1 }"
    >
      <!-- Poster na Image -->
      <div class="poster-wrapper">
        <img :src="movie.poster" :alt="movie.title" class="poster-img" />
        
        <!-- Translator Badge (Hejuru ibumoso) -->
        <span class="translator-badge">{{ movie.translator }}</span>
        
        <!-- Year Badge (Hejuru iburyo) -->
        <span class="year-badge">{{ movie.year }}</span>

        <!-- Play Button Overlay (Iza cyane kuri hover cyangwa kuri active card) -->
        <div class="play-overlay">
          <div class="play-circle">
            <Play :size="24" fill="white" color="white" />
          </div>
        </div>
      </div>

      <!-- Footer y'ibara ry'amajwi n'amazina -->
      <div class="movie-info">
        <h3 class="movie-title">{{ movie.title }}</h3>
        <div class="movie-stats">
          <Eye :size="14" color="#94a3b8" />
          <span>{{ movie.views }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movies-grid-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #0b0f19;
  padding: 40px;
  font-family: sans-serif;
}

.movie-card {
  width: 210px;
  background-color: #111827;
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
  height: 290px;
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Badges */
.translator-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #8b5cf6;
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.year-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: #e2e8f0;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 6px;
}

/* Play Overlay (Igagara iyo wakoze Hover cyangwa kuri Active) */
.play-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.play-circle {
  width: 50px;
  height: 50px;
  background-color: #a855f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

/* Hover Effects & Active State (Imeze nk'iya kabiri ku ishusho) */
.movie-card:hover {
  border-color: #a855f7;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.3);
  transform: translateY(-5px);
}

.movie-card:hover .play-overlay,
.movie-card.active-hover .play-overlay {
  opacity: 1;
}

.movie-card:hover .play-circle,
.movie-card.active-hover .play-circle {
  transform: scale(1);
}

/* Iyi class ituma ya card ya kabiri igumana border ya purple n'agatoni ka play nk'uko biri ku ishusho */
.movie-card.active-hover {
  border-color: #a855f7;
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.3);
}

/* Movie Info (Umunsi n'ibitekerezo munsi y'ishusho) */
.movie-info {
  padding: 12px;
  background-color: #111827;
}

.movie-title {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-stats {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #94a3b8;
  font-size: 12px;
}
</style>
<!-- hero card -->
 <script setup>
import { Play } from 'lucide-vue-next';

</script>

<template>
  <div class="featured-banner">
    <!-- Header ya Hejuru -->
    <div class="banner-header">
      <div class="title-wrapper">
        <span class="blue-bar"></span>
        <h2>Featured Movies</h2>
      </div>
      <span class="movies-count">5 MOVIES</span>
    </div>

    <!-- Hero Content Section -->
    <div class="hero-content">
      <!-- Amakuru y'Ikinamico / Filime -->
      <div class="movie-details">
        <h1 class="movie-title">Matchbox the Movie</h1>
        
        <div class="movie-meta">
          <span>Agasobanuye</span>
          <span class="dot-separator">•</span>
          <span>2026</span>
        </div>
        
        <p class="translator-text">agasobanuye by perfect</p>

        <!-- Actions & Next Preview -->
        <div class="hero-actions">
          <!-- Watch Now Button -->
          <a href="#" class="watch-btn">
            <div class="play-icon-wrapper">
              <Play :size="16" fill="white" color="white" />
            </div>
            <span>Watch Now</span>
          </a>

          <!-- Next Preview Box -->
          <div class="next-preview">
            <span class="next-label">NEXT</span>
            <div class="next-movie">
              <img src="../src/assets/movies/death.webp" alt="Puss in Boots" class="next-poster" />
              <span class="next-title">Puss in Boots</span>
            </div>
          </div>
        </div>

        <!-- Features Badges -->
        
      </div>

      <!-- Slider Pagination (Iburyohasina: 03 / 05) -->
      <div class="slider-indicators">
        <div class="indicators-left">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="active-line"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="slide-counter">
          <strong>03</strong> / 05
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-banner {
  background-color: #0b0f19;
  color: white;
  padding: 30px 40px;
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.banner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.blue-bar {
  width: 5px;
  height: 24px;
  background-color: #3b82f6;
  border-radius: 4px;
}

.banner-header h2 {
  font-size: 24px;
  font-weight: bold;
}

.movies-count {
  color: #60a5fa;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Hero Background / Content */
.hero-content {
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background-image: linear-gradient(to right, rgba(11, 15, 25, 0.9), rgba(11, 15, 25, 0.3)), url('../src/assets/movies/bona.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.movie-details {
  max-width: 600px;
  z-index: 2;
}

.movie-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.1;
}

.movie-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #94a3b8;
  font-size: 15px;
  margin-bottom: 6px;
}

.dot-separator {
  color: #64748b;
}

.translator-text {
  color: #cbd5e1;
  font-size: 15px;
  margin-bottom: 25px;
}

/* Actions */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.watch-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  padding: 12px 28px;
  border-radius: 99px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
  transition: 0.3s;
}

.watch-btn:hover {
  transform: scale(1.05);
}

.play-icon-wrapper {
  background: rgba(255, 255, 255, 0.2);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Next Preview */
.next-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  padding: 6px 14px 6px 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.next-label {
  font-size: 10px;
  color: #94a3b8;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.next-movie {
  display: flex;
  align-items: center;
  gap: 8px;
}

.next-poster {
  width: 28px;
  height: 38px;
  object-fit: cover;
  border-radius: 4px;
}

.next-title {
  font-size: 13px;
  font-weight: bold;
  color: #e2e8f0;
}



/* Slider Indicators */
.slider-indicators {
  position: absolute;
  bottom: 30px;
  right: 40px;
  left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.indicators-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.active-line {
  width: 35px;
  height: 4px;
  background-color: #a855f7;
  border-radius: 4px;
}

.slide-counter {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  color: #64748b;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.slide-counter strong {
  color: white;
}
</style>