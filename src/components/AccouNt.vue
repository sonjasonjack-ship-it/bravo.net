<script setup>
import { ref, onMounted, computed } from "vue";
import { Search, Play, Calendar, Clock, Film, Users, Download } from "lucide-vue-next";
import "ldrs/Waveform"; // Gushyiramo library ya loader

// 1. Loading State
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 800); // Loader irabura nyuma y'amasegonda make
});

// 2. Data za Episodes
const episodes = ref([
  { id: 1, name: "Episode 1", aired: "9/2/2026", link: "http://yawe.isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_1_Perfect.mp4" },
  { id: 2, name: "Episode 2", aired: "9/2/2026", link: "http://yawe.isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_2_Perfect.mp4" },
  { id: 3, name: "Episode 3", aired: "9/2/2026", link: "http://yawe.isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_3.mp4" },
  { id: 4, name: "Episode 4", aired: "9/2/2026", link: "http://yawe.isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_4_Perfect.mp4" },
  { id: 5, name: "Episode 5", aired: "9/2/2026", link: "http://yawe.isatafilez.my/files/series%2F2026%2Fkorea%2Fperf%2Fbonne%2FA_Bona_Fide_Killer_4_Perfect.mp4" }
]);
</script>

<template>
  <div class="container">                                   
    <!-- LOADER SCREEN (LDERS WAVEFORM) -->
    <div v-if="loading" class="loader-screen">
      <l-Waveform
        size="70"
        stroke="5"
        speed="0.9"
        color="#8400ff"
      ></l-Waveform>
      <h2>Loading...</h2>
    </div>

    <!-- MAIN PAGE CONTENT (Igaragara nyuma y'uko loading irangiye) -->
    <div v-else class="content">
      <div class="hero">
        <div class="overlay">
          <img src="../assets/movies/bona.webp" alt="bona field killer" loading="lazy" class="img">
          
          <div class="word">
            <div class="content-container">
              <div class="header-section">
                <h2 class="title">A Bona fide killer</h2>
                <p class="subtitle">agasobanuye by perfect</p>
              </div>

              <div class="synopsis-section">
                <h3 class="section-title">Synopsis</h3>
                <p class="synopsis-text">
                  The series centers on four Latina maids working in the homes of Beverly Hills’ wealthiest and most powerful families, 
                  and a newcomer who made it personal after a maid was murdered and determined to uncover the truth behind her demise.
                </p>
              </div>

              <div class="latest-episode-box">
                <span class="episode-label">Latest Episode</span>
                <p class="episode-name">Episode 13 Final</p>
                <a href="#" class="play-btn" title="Reba Episode">
                  <Play :size="20" fill="black" />
                </a>
              </div>
            </div>
          </div>

          <div class="side2">
            <div class="meta-sidebar">
              <div class="meta-item">
                <span class="meta-icon bg-purple">
                  <Calendar :size="18" color="white" />
                </span>
                <div class="meta-info">
                  <small>Year</small>
                  <strong>2013</strong>
                </div>
              </div>

              <div class="meta-item">
                <span class="meta-icon bg-green">
                  <Clock :size="18" color="white" />
                </span>
                <div class="meta-info">
                  <small>Runtime</small>
                  <strong>43m</strong>
                </div>
              </div>

              <div class="meta-item">
                <span class="meta-icon bg-red">
                  <Film :size="18" color="white" />
                </span>
                <div class="meta-info">
                  <small>Creator</small>
                  <strong>Marc Cherry</strong>
                </div>
              </div>

              <div class="meta-item">
                <span class="meta-icon bg-blue">
                  <Users :size="18" color="white" />
                </span>
                <div class="meta-info">
                  <small>Cast</small>
                  <strong>Ana Ortiz, Dania Ramirez...</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <h2>Latest Movies</h2>
      </div>

      <!-- EPISODES / DOWNLOAD LIST -->
      <div v-for="ep in episodes" :key="ep.id" class="down">
        <div class="hone">
          <div class="nam">
            <p>{{ ep.name }}</p>
            <p class="aird">Aired: {{ ep.aired }}</p>
          </div>
          <div class="load">
            <a :href="ep.link" target="_blank" class="link-button">
              <Download :size="16" /> Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.container {
  min-height: 100vh;
  background: #0b0f19;
  color: white;
}

/* LOADER SCREEN STYLES */
.loader-screen {
  height: 100vh;
  background: #111827;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.loader-screen h2 {
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #94a3b8;
}

.word {
  padding-top: 20px;
}

.side2 {
  margin-top: 25px;
  margin-right: 50px;
  padding-top: 20px;
}

.img {
  border-radius: 20px;
  height: 380px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 20px;
  filter: drop-shadow(0px 0px 12px #471179ba);
}

.overlay {
  display: inline-flex;
  flex-direction: row;
  gap: 60px;
}

.hero {
  background: rgba(71, 65, 65, 0.15);
  backdrop-filter: blur(7px);
  border-radius: 38px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.884);
  backdrop-filter: blur(25px);
  max-width: 1350px;
  height: 460px;
  margin: 30px auto 0 auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
/* Container yagutse ya Download list */
.down {
  background: rgba(30, 41, 59, 0.6); /* Dark blue rounded card */
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 20px 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
  
  /* Ibi bituma yaguka ikazagera ku ruhande rwose rw'ikirere cya page */
  width: 100%;
  max-width: 1350px; 
  margin: 16px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Flex layout yo gutandukanya inyandiko na bouton ku mpande zombi */
.hone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nam p {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.aird {
  font-size: 0.9rem;
  color: #94a3b8;
}

/* Bouton nshya igaragara neza */
.link-button {
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 12px;
  background: linear-gradient(135deg, #8400ff, #a855f7);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(132, 0, 255, 0.35);
}

.link-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(132, 0, 255, 0.5);
  background: linear-gradient(135deg, #7000df, #9333ea);
}

.content-container {
  gap: 15px;
  margin-top: 20px;
  max-width: 500px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 4px;
}

.subtitle {
  color: #a855f7;
  font-size: 15px;
  margin-bottom: 15px;
}

.section-title {
  color: #fbbf24;
  font-size: 15px;
  margin-bottom: 6px;
}

.synopsis-text {
  color: #cbd5e1;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.latest-episode-box {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid #334155;
  padding: 10px 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.episode-label {
  color: #60a5fa;
  font-size: 12px;
  font-weight: 600;
  display: block;
}

.episode-name {
  font-weight: bold;
  font-size: 14px;
}

.play-btn {
  background: white;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  text-decoration: none;
}

.play-btn:hover {
  transform: scale(1.05);
}

.meta-sidebar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.meta-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
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
  font-size: 12px;
  color: #f8fafc;
}

.link-button {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  background: #8400ff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.link-button:hover {
  background: #7000df;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 20px auto;
  max-width: 1350px;
  width: 100%;
}

.section-header h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  position: relative;
  padding-left: 16px;
}

.section-header h2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 6px;
  height: 32px;
  background: #3b82f6;
  border-radius: 10px;
}
</style>