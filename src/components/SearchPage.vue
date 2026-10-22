<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search, Play } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(route.query.q || '')

// Amakuru yose ya za film na series
const allItems = ref([
  { id: 1, title: "Spider Man: Brand New Day", epsod: "FULL MOVIE", genre: "American", image: "/src/assets/movies/spider.webp" },
  { id: 6, title: "The Brink Of War", epsod: "Action", genre: "Action", image: "/src/assets/movies/brink war.webp" },
  { id: 7, title: "The CONFINEMENT", epsod: "Action", genre: "Action", image: "/src/assets/movies/Confinement.webp" },
  { id: 8, title: "Minions & Monster", epsod: "Cartoon", genre: "Cartoon", image: "/src/assets/movies/minions.webp" },
  { id: 9, title: "Teen Titans Go!", epsod: "Cartoon", genre: "Cartoon", image: "/src/assets/movies/teen.webp" },
  { id: 101, title: "A Shop of Killer", epsod: "EPISODE 8", genre: "Episode", image: "/src/assets/movies/shop.webp" },
  { id: 102, title: "Umthetho", epsod: "EPISODE 12", genre: "Episode", image: "/src/assets/movies/umthetho.webp" },
  { id: 103, title: "Lioness", epsod: "EPISODE 10", genre: "Episode", image: "/src/assets/movies/lioness.webp" },
  { id: 104, title: "A Bona Fide Killer", epsod: "EPISODE 13", genre: "Episode", image: "/src/assets/movies/bona.webp" }
])

// Gushakisha ibihura n'ibyo umukoresha yanditse
const searchResults = computed(() => {
  const query = (route.query.q || searchQuery.value || '').toLowerCase()
  if (!query) return allItems.value
  return allItems.value.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.genre.toLowerCase().includes(query)
  )
})

const handleNewSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } })
  }
}
</script>

<template>
  <div class="search-page-container">
    <!-- Header ya Search -->
    <div class="search-hero">
      <h1>Shakisha Film cyangwa Series</h1>
      <p>Bona ibisubizo byose bijyanye n'ibyo ukeneye mu buryo bwihuse.</p>
      
      <div class="search-bar-wrapper">
        <Search :size="20" class="s-icon" />
        <input 
          type="text" 
          v-model="searchQuery" 
          @keyup.enter="handleNewSearch"
          placeholder="Andika izina rya film cyangwa series..." 
        />
        <button @click="handleNewSearch">Shakisha</button>
      </div>
    </div>

    <!-- Ibisubizo byabonetse -->
    <div class="results-section">
      <div class="section-title-header">
        <h2>Ibyavuye mu gushakisha: "<span class="query-text">{{ route.query.q || 'Byose' }}</span>"</h2>
      </div>

      <div v-if="searchResults.length === 0" class="no-results">
        <p>Nta bikoresho cyangwa film zibonetse zihuye n'ijambo ushakishije.</p>
      </div>

      <div v-else class="cards-grid">
        <div v-for="item in searchResults" :key="item.id" class="movie-card">
          <div class="card-image">
            <img :src="item.image" :alt="item.title" />
            <span class="badge">{{ item.epsod }}</span>
          </div>
          <div class="card-details">
            <h3>{{ item.title }}</h3>
            <div class="card-footer">
              <span class="genre">{{ item.genre }}</span>
              <button class="watch-btn"><Play :size="14" fill="white" /> Reba</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-page-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px;
  color: white;
}

.search-hero {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(132, 0, 255, 0.15), rgba(17, 24, 39, 0.6));
  border-radius: 24px;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.search-hero h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.search-hero p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 25px;
}

.search-bar-wrapper {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
}

.search-bar-wrapper input {
  flex: 1;
  padding: 14px 20px 14px 48px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #1e293b;
  color: white;
  font-size: 1rem;
  outline: none;
}

.search-bar-wrapper .s-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

.search-bar-wrapper button {
  padding: 0 24px;
  border-radius: 30px;
  border: none;
  background: #8400ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.search-bar-wrapper button:hover {
  background: #7000df;
}

.section-title-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
  background: #3b82f6;
  border-radius: 4px;
}

.section-title-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
}

.query-text {
  color: #a855f7;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.movie-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
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
  padding: 16px;
}

.card-details h3 {
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.genre {
  font-size: 0.85rem;
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
  cursor: pointer;
}

.no-results {
  text-align: center;
  padding: 50px;
  background: #1e293b;
  border-radius: 12px;
  color: #94a3b8;
  font-size: 1.1rem;
}
</style>