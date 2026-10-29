<script>
export default{
  name:"SearchPage"
}
</script>
<template>
  <div class="search-container">
    <!-- Search Bar Section -->
    <header class="search-header">
      <h1>Shakisha Films na Series</h1>
      
      <div class="search-controls">
        <!-- Input field ya search -->
        <div class="input-wrapper">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Andika izina ry'icyo ushaka..."
            class="search-input"
          />
        </div>

        <!-- Filter ya Type (All, Movies, Series) -->
        <div class="filter-buttons">
          <button 
            :class="{ active: selectedType === 'all' }" 
            @click="selectedType = 'all'"
          >
            Bose
          </button>
          <button 
            :class="{ active: selectedType === 'movie' }" 
            @click="selectedType = 'movie'"
          >
            Films
          </button>
          <button 
            :class="{ active: selectedType === 'series' }" 
            @click="selectedType = 'series'"
          >
            Series
          </button>
        </div>
      </div>
    </header>

    <!-- Content Grid -->
    <main class="results-section">
      <!-- Mugihe nta bisubizo bibonetse -->
      <div v-if="filteredMedia.length === 0" class="no-results">
        <p>Nta film cyangwa series ibonetse ku izina "{{ searchQuery }}"</p>
      </div>

      <!-- Grid y'Ibisubizo -->
      <div v-else class="media-grid">
        <div 
          v-for="item in filteredMedia" 
          :key="item.id" 
          class="media-card"
        >
          <div class="poster-wrapper">
            <img :src="item.poster" :alt="item.title" class="poster-img" />
            <span class="badge" :class="item.type">
              {{ item.type === 'movie' ? 'Film' : 'Series' }}
            </span>
          </div>
          
          <div class="media-info">
            <h3>{{ item.title }}</h3>
            <div class="meta">
              <span>{{ item.year }}</span>
              <span class="rating">⭐ {{ item.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Search state
const searchQuery = ref('')
const selectedType = ref('all') // 'all', 'movie', 'series'

// Dummy Data (Muri real app aha wakoresha API nka TMDB)
const mediaList = ref([
  {
    id: 1,
    title: 'Inception',
    type: 'movie',
    year: 2010,
    rating: 8.8,
    poster: 'https://via.placeholder.com/300x450?text=Inception'
  },
  {
    id: 2,
    title: 'Breaking Bad',
    type: 'series',
    year: 2008,
    rating: 9.5,
    poster: 'https://via.placeholder.com/300x450?text=Breaking+Bad'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    type: 'movie',
    year: 2008,
    rating: 9.0,
    poster: 'https://via.placeholder.com/300x450?text=The+Dark+Knight'
  },
  {
    id: 4,
    title: 'Stranger Things',
    type: 'series',
    year: 2016,
    rating: 8.7,
    poster: 'https://via.placeholder.com/300x450?text=Stranger+Things'
  }
])

// Filter Logic ikora real-time
const filteredMedia = computed(() => {
  return mediaList.value.filter(item => {
    // Check izina
    const matchesQuery = item.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase().trim())
    
    // Check type (Movie/Series/All)
    const matchesType = selectedType.value === 'all' || item.type === selectedType.value

    return matchesQuery && matchesType
  })
})
</script>

<style scoped>
.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: #ffffff;
  background-color: #121212;
  min-height: 100vh;
}

.search-header {
  margin-bottom: 2rem;
  text-align: center;
}

.search-header h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.search-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.input-wrapper {
  width: 100%;
  max-width: 500px;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  border: 1px solid #333;
  background-color: #1e1e1e;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #e50914; /* Netflix Red */
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
}

.filter-buttons button {
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  border: 1px solid #333;
  background-color: #1e1e1e;
  color: #aaa;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-buttons button.active,
.filter-buttons button:hover {
  background-color: #e50914;
  color: #fff;
  border-color: #e50914;
}

/* Grid Layout */
.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.media-card {
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.media-card:hover {
  transform: translateY(-5px);
}

.poster-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.badge.movie {
  background-color: #0284c7;
}

.badge.series {
  background-color: #16a34a;
}

.media-info {
  padding: 1rem;
}

.media-info h3 {
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #aaa;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #888;
}
</style>