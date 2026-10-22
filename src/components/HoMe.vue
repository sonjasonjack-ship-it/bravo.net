<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { 
  Search, 
  Play, 
  TrendingUp, 
  Clock, 
  Star, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  Tv 
} from 'lucide-vue-next';

// Gukoresha router kugira ngo ishakisha ryoherezwe kuri Search page
const router = useRouter();

// 1. Reactive States
const searchQuery = ref('');
const selectedGenre = ref('All');
const viewMode = ref('grid'); // 'grid' cyangwa 'list'
const showFilters = ref(false);

// 2. Gukora Search no kohereza kuri /search page
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } });
  }
};

// 3. Sample Series Data (Zigera kuri 7)
const seriesList = ref([
  {
    id: 101,
    title: "A Shop of Killer",
    epsod: "EPISODE 8",
    genre: "Action",
    rating: "4.9",
    year: "2024",
    image: "/src/assets/movies/shop.webp"
  },
  {
    id: 102,
    title: "Umthetho",
    epsod: "EPISODE 12",
    genre: "Drama",
    rating: "4.4",
    year: "2023",
    image: "/src/assets/movies/umthetho.webp"
  },
  {
    id: 103,
    title: "Lioness",
    epsod: "EPISODE 10",
    genre: "Action",
    rating: "4.8",
    year: "2024",
    image: "/src/assets/movies/lioness.webp"
  },
  {
    id: 104,
    title: "A Bona Fide Killer",
    epsod: "EPISODE 13",
    genre: "Episode",
    rating: "4.9",
    year: "2026",
    image: "/src/assets/movies/bona.webp"
  },
  {
    id: 105,
    title: "The Silo",
    epsod: "EPISODE 10",
    genre: "Sci-Fi",
    rating: "4.7",
    year: "2023",
    image: "/src/assets/movies/silo.webp"
  },
  {
    id: 106,
    title: "Death's Game",
    epsod: "EPISODE 8",
    genre: "Thriller",
    rating: "4.8",
    year: "2024",
    image: "/src/assets/movies/death.webp"
  },
  {
    id: 107,
    title: "Teen Titans Go!",
    epsod: "EPISODE 15",
    genre: "Cartoon",
    rating: "4.6",
    year: "2025",
    image: "/src/assets/movies/teen.webp"
  }
]);

const genres = ['All', 'Action', 'Drama', 'Episode', 'Sci-Fi', 'Thriller', 'Cartoon'];

// 4. Computed Filtering Logic (Niba ushaka ko iyungurura imbere muri page cyangwa igakora search)
const filteredSeries = computed(() => {
  return seriesList.value.filter((series) => {
    const matchesSearch = series.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesGenre = selectedGenre.value === 'All' || series.genre.toLowerCase() === selectedGenre.value.toLowerCase();
    return matchesSearch && matchesGenre;
  });
});
</script>

<template>
  <div class="home-container">
    <!-- TOP HEADER / BRANDING -->
    <section class="start-banner">
      <div class="logo">
        <h1 class="brand-title">Bravo.net</h1>
      </div>
      <h2>Download Free Agasobanuye Series and Movies</h2>
      <a href="#featured" class="download-btn">
        <Play :size="20" fill="currentColor" /> Play and download movies now
      </a>
      <p class="small-text">Search our website on your browser!</p>
    </section>

    <!-- FEATURED MOVIES / HERO BANNER -->
    <div id="featured" class="featured-section">
      <div class="section-title-header">
        <h2>Featured Movies</h2>
      </div>

      <div class="hero-banner">
        <div class="hero-content">
          <h1 class="featured-title">A Bona Field Killer</h1>

          <div class="featured-meta">
            <span>Agasobanuye</span>
            <span class="meta-separator">•</span>
            <span>2026</span>
          </div>

          <p class="translator-info">Agasobanuye by Perfect</p>

          <div class="hero-actions">
            <!-- Watch Now iri muri Hero Banner -->
<a href="#" class="watch-now-btn" @click.prevent="$router.push('/account')">
  <div class="play-icon-bg">
    <Play :size="16" fill="white" color="white" />
  </div>
  <span>Watch Now</span>
</a>

            <div class="next-card">
              <span class="next-tag">NEXT</span>
              <div class="next-content">
                <img src="/src/assets/movies/spider.webp" alt="Next Poster" class="next-img" />
                <span class="next-title">Spider:Brand N...</span>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-controls">
          <div class="dots-wrapper">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="active-bar"></span>
            <span class="dot"></span>
          </div>

          <div class="slide-counter">
            <span class="current-slide">04</span> / 05
          </div>
        </div>
      </div>
    </div>

    <!-- TRANSLATORS SECTIONS WITH HORIZONTAL SCROLL (7 CARDS EACH) -->
      <!-- SEARCH & FILTER BAR SECTION -->
    <section class="search-bar-container">
      <div class="search-bar-card">
        <!-- Input Box yashyizweho @keyup.enter kugira ngo ikore search -->
        <div class="search-input-box">
          <Search :size="20" class="search-icon" />
          <input 
            type="text" 
            v-model="searchQuery" 
            @keyup.enter="handleSearch"
            placeholder="Search series by title..." 
          />
        </div>

        <!-- Action Buttons (Filters & View Toggles) -->
        <div class="search-actions">
          <button 
            class="filters-btn" 
            :class="{ active: showFilters }"
            @click="showFilters = !showFilters"
          >
            <SlidersHorizontal :size="18" />
            <span>Filters</span>
          </button>

          <div class="view-toggle">
            <button 
              :class="{ active: viewMode === 'grid' }" 
              @click="viewMode = 'grid'"
              title="Grid View"
            >
              <LayoutGrid :size="18" />
            </button>
            <button 
              :class="{ active: viewMode === 'list' }" 
              @click="viewMode = 'list'"
              title="List View"
            >
              <List :size="18" />
            </button>
          </div>
        </div>
      </div>

      <!-- Expandable Genre Filters -->
      <div v-if="showFilters" class="expanded-filters">
        <span class="filter-label">Filter by Genre:</span>
        <div class="genre-pills">
          <button 
            v-for="genre in genres" 
            :key="genre"
            :class="{ active: selectedGenre === genre }"
            @click="selectedGenre = genre"
          >
            {{ genre }}
          </button>
        </div>
      </div>
    </section>

    <!-- SERIES DISPLAY SECTION -->
    <main class="content-section">
      <!-- No Results State -->
      <div v-if="filteredSeries.length === 0" class="no-results">
        <p>Nta series zibonetse zihuye n'ibyo ushakisha "{{ searchQuery }}".</p>
      </div>

      <!-- Grid View Mode -->
      <div v-else-if="viewMode === 'grid'" class="cards-grid">
        <div v-for="series in filteredSeries" :key="series.id" class="series-card">
          <div class="card-image-box">
            <img :src="series.image" :alt="series.title" />
            <span class="ep-badge">{{ series.epsod }}</span>
            <div class="hover-play-overlay">
              <button class="play-btn"><Play :size="20" fill="white" /></button>
            </div>
          </div>
          <div class="card-info">
            <h3>{{ series.title }}</h3>
            <div class="card-meta">
              <span class="genre">{{ series.genre }}</span>
              <span class="dot-separator">•</span>
              <span class="year">{{ series.year }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- List View Mode -->
      <div v-else class="cards-list">
        <div v-for="series in filteredSeries" :key="series.id" class="list-row">
          <img :src="series.image" :alt="series.title" class="list-thumb" />
          <div class="list-details">
            <h3>{{ series.title }}</h3>
            <div class="list-meta">
              <span class="ep-badge-inline">{{ series.epsod }}</span>
              <span>{{ series.genre }}</span>
              <span>• {{ series.year }}</span>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
  color: white;
}
/* SEARCH & FILTERS BAR */
.search-bar-container {
  margin-bottom: 40px;
}

.search-bar-card {
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.search-input-box {
  position: relative;
  flex: 1;
}

.search-input-box input {
  width: 100%;
  background: transparent;
  border: none;
  padding: 12px 16px 12px 48px;
  color: white;
  font-size: 1rem;
  outline: none;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
}

.search-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.filters-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.filters-btn:hover,
.filters-btn.active {
  background: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  color: #34d399;
}
.view-toggle {
  display: flex;
  background: #020617;
  padding: 4px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.view-toggle button {
  background: transparent;
  border: none;
  color: #64748b;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.view-toggle button.active {
  background: #064e3b;
  color: #34d399;
}

/* Expanded Filters */
.expanded-filters {
  margin-top: 16px;
  padding: 16px 20px;
  background: #0f172a;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.filter-label {
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
}

.genre-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.genre-pills button {
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.genre-pills button.active,
.genre-pills button:hover {
  background: #10b981;
  color: white;
  border-color: #10b981;
}

/* CARDS GRID DISPLAY */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 24px;
}

.series-card {
  background: #0f172a;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.series-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  border-color: rgba(16, 185, 129, 0.3);
}

.card-image-box {
  position: relative;
  height: 290px;
}

.card-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ep-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #10b981;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 6px;
}

.hover-play-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.series-card:hover .hover-play-overlay {
  opacity: 1;
}

.play-btn {
  background: #10b981;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.card-info {
  padding: 16px;
}

.card-info h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-meta {
  font-size: 0.85rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot-separator {
  color: #475569;
}

/* LIST VIEW MODE */
.cards-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.list-row {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #0f172a;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.list-thumb {
  width: 60px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.list-details {
  flex: 1;
}

.list-details h3 {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.list-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #94a3b8;
  font-size: 0.85rem;
}

.ep-badge-inline {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
}

.watch-list-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #10b981;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.no-results {
  text-align: center;
  padding: 60px;
  background: #0f172a;
  border-radius: 16px;
  color: #94a3b8;
  font-size: 1.1rem;
}

@media (max-width: 900px) {
  .decorative-tv {
    display: none;
  }
  
  .series-header {
    padding: 32px 24px;
  }

  .header-title {
    font-size: 3rem;
  }

  .search-bar-card {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-actions {
    justify-content: space-between;
  }
}
/* TOP BANNER */
.start-banner {
  text-align: center;
  padding: 30px 20px;
  margin-bottom: 20px;
}

.brand-title {
  margin-left: 60px;
  font-size: 4rem;
  font-weight: 1000;
  color: white;
}

.purple-dot {
  color: #a855f7;
}

.start-banner h2 {
  font-size: 1.2rem;
  color: #9ca3af;
  margin: 10px 0 20px 0;
  font-weight: 400;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #b11010b1;
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
}

.download-btn:hover {
  background: #13833d;
  transform: scale(1.03);
}

.small-text {
  color: #64748b;
  font-style: italic;
  margin-top: 10px;
  font-size: 0.9rem;
}

/* SEARCH & GENRE FILTER BAR (ISANZWE) */


.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}



/* SECTION HEADER */
.section-title-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;
}

.section-title-header::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 24px;
  background: #2d7cff;
  border-radius: 4px;
}

.section-title-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
}

/* HERO BANNER */
.featured-section {
  margin-bottom: 40px;
}

.hero-banner {
  position: relative;
  min-height: 480px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(11, 15, 25, 0.92) 0%, rgba(11, 15, 25, 0.4) 60%,) 
              url('/frontend/src/assets/movies/bonaback.webp');
  background-size: cover;
  background-position: center;
  padding: 45px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.hero-content {
  max-width: 650px;
  z-index: 2;
}

.featured-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 12px;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.meta-separator {
  color: #475569;
}

.translator-info {
  color: #cbd5e1;
  font-size: 1rem;
  margin-bottom: 25px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.watch-now-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #3b82f6, #a855f7);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
  transition: transform 0.2s;
}

.watch-now-btn:hover {
  transform: scale(1.04);
}

.play-icon-bg {
  background: rgba(255, 255, 255, 0.25);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.next-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(8px);
  padding: 6px 14px 6px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.next-tag {
  font-size: 0.7rem;
  color: #94a3b8;
  font-weight: 800;
}

.next-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.next-img {
  width: 28px;
  height: 38px;
  object-fit: cover;
  border-radius: 4px;
}

.next-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e2e8f0;
}

.slider-controls {
  position: absolute;
  bottom: 25px;
  left: 40px;
  right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.dots-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.active-bar {
  width: 45px;
  height: 4px;
  background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6);
  border-radius: 4px;
}

.slide-counter {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #64748b;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.current-slide {
  color: white;
  font-weight: bold;
}


</style>