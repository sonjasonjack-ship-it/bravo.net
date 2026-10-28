<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Film, Tv, Home, Info, Phone, Instagram, Youtube, Send, Moon ,Download} from 'lucide-vue-next'
import HoMe from "@/components/HoMe.vue"
import AccouNt from "@/components/AccouNt.vue"
import SerIes from "@/components/SerIes.vue"
import Movies from './components/MoVies.vue'
import SearchPage from './components/SearchPage.vue'

const router = useRouter()
const navigation = ref('HoMe')
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } })
    searchQuery.value = ''
  }
}
</script>

<template>
  <div class="app-container">
    <!-- Navbar -->
    <header class="navbar-header">
      <nav class="navbar">
        <a href="#" @click.prevent="navigation = 'SearchPage'" class="logo1">
          <span class="logo-accent">Bravo</span>.net
        </a>

        <ul class="menu">
          <li>
            <button :class="{ active: navigation === 'HoMe' }" @click="navigation = 'HoMe'">
              <Home :size="18" /> Home
            </button>
          </li>
         
            <li>
            <button :class="{ active: navigation === 'MoVies' }" @click="navigation = 'MoVies'">
              <Film :size="18" /> Movies
            </button>
          </li>
          <li>
            <button :class="{ active: navigation === 'SerIes' }" @click="navigation = 'SerIes'">
              <Tv :size="18" /> Series
            </button>
          </li>
         
         <li>
            <button :class="{ active: navigation === 'AccouNt' }" @click="navigation = 'AccouNt'">
              <Download :size="18" /> Download
            </button>
          </li>
          <li>
            <button :class="{ active: navigation === 'SearchPage' }" @click="navigation = 'SearchPage'">
              <Search :size="18" /> Search
            </button>
          </li>
        </ul>

        <div class="header-search">
          <Search :size="18" class="search-icon" />
          <input 
            type="text" 
            v-model="searchQuery" 
            @keyup.enter="handleSearch"
            placeholder="Shakisha film cyangwa series..." 
          />
          <button @click="handleSearch" class="search-btn">Search</button>
        </div>
      </nav>
    </header>

    <!-- Content Sections with Event Listeners -->
    <main class="main-content">
<HoMe v-if="navigation === 'HoMe'" @go-to-account="navigation = 'AccouNt'"></HoMe>
  <SerIes v-else-if="navigation === 'SerIes'" @go-to-account="navigation = 'AccouNt'"></SerIes>
  <SearchPage v-else-if="navigation === 'SearchPage'" @go-to-account="navigation = 'SearchPage'"></SearchPage>
<Movies v-else-if="navigation==='MoVies'" @go-to-account="navigation = 'MoVies'"></Movies>
  <AccouNt v-else-if="navigation === 'AccouNt'"></AccouNt>
      <div v-else class="about-page">
        <h2>Abo Turi Bo (About Us)</h2>
        <p>Aha ni kuri Bravo.net, aho ubona film n'iseri mu Kinyarwanda no mu zindi ndimi zitandukanye.</p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Disclaimer</a>
        <a href="#">How It Works</a>
      </div>

      <div class="social-section">
        <h3>Follow Us</h3>
        <div class="social-buttons">
          <a href="#" class="social-btn whatsapp">
            <Phone :size="18" /> WhatsApp
          </a>
          <a href="https://www.instagram.com/ni.ja45/" class="social-btn instagram">
            <Instagram :size="18" /> Instagram
          </a>
          <a href="#" class="social-btn youtube">
            <Youtube :size="18" /> YouTube
          </a>
          <a href="#" class="social-btn tiktok">
            <svg class="tiktok-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.1 6.13 6.34 6.34 0 0 0 10.8 4.48c1.61-1.61 2.51-3.79 2.51-6.13V9.7a8.26 8.26 0 0 0 4.9 1.58V7.85a4.85 4.85 0 0 1-3-.16z"/>
            </svg> TikTok
          </a>
          <a href="#" class="social-btn telegram">
            <Send :size="18" />Facebook
          </a>
        </div>
      </div>

      <div class="footer-copyright">
        <p><Moon :size="16" class="moon-icon" /> Good night! © 2026 Bravo.Net. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Ibisanzwe muri App.vue */
.app-container {
  min-height: 100vh;
  background-color: #0b0f19;
  color: #f3f4f6;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
.navbar-header { background: #111827; border-bottom: 1px solid rgba(255, 255, 255, 0.08); position: sticky; top: 0; z-index: 100; }
.navbar { max-width: 1400px; margin: 0 auto; height: 70px; display: flex; justify-content: space-between; align-items: center; padding: 0 24px; }
.logo1 { font-size: 1.6rem; font-weight: 800; color: #ffffff; text-decoration: none; }
.logo-accent { color: #a855f7; }
.menu { display: flex; list-style: none; gap: 12px; }
.menu button { display: flex; align-items: center; gap: 8px; background: transparent; border: none; color: #9ca3af; font-size: 0.95rem; font-weight: 500; padding: 8px 16px; border-radius: 20px; cursor: pointer; transition: all 0.2s ease; }
.menu button:hover { color: #ffffff; background: rgba(255, 255, 255, 0.05); }
.menu button.active { color: #ffffff; background: #8400ff; }
.header-search { position: relative; display: flex; align-items: center; gap: 8px; }
.header-search input { padding: 8px 16px 8px 38px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.15); background: #1e293b; color: white; outline: none; width: 240px; }
.header-search .search-icon { position: absolute; left: 12px; color: #94a3b8; }
.search-btn { padding: 8px 18px; border-radius: 20px; border: none; background: #8400ff; color: white; font-weight: 600; cursor: pointer; }
.main-content { flex: 1; }
.about-page { padding: 60px 20px; text-align: center; }
.site-footer { background-color: #0b1120; padding: 40px 20px 30px 20px; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center; margin-top: auto; }
.footer-links { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-bottom: 25px; }
.footer-links a { color: #94a3b8; text-decoration: none; font-size: 0.95rem; }
.social-section h3 { font-size: 1.1rem; font-weight: 700; color: #ffffff; margin-bottom: 16px; }
.social-buttons { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-bottom: 30px; }
.social-btn { display: flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 8px; color: white; text-decoration: none; font-weight: 600; font-size: 0.9rem; }
.whatsapp { background-color: #10b981; } .instagram { background-color: #e1306c; } .youtube { background-color: #ef4444; } .tiktok { background-color: #000000; border: 1px solid #334155; } .telegram { background-color: #3b82f6; }
.footer-copyright { color: #64748b; font-size: 0.88rem; display: flex; align-items: center; justify-content: center; }
.moon-icon { color: #f59e0b; }
</style>