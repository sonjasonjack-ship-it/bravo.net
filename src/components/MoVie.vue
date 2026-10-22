<script>
export default{
  name:MoVie
}
</script>
<script setup>
import { ref, onMounted } from "vue";
import "ldrs/Waveform";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000); // Loader irabura nyuma ya 3 seconds
});
</script>

<template>
  <div class="container">
    <!-- Loader -->
    <div v-if="loading" class="loader-screen">
      <l-Waveform
        size="70"
        stroke="5"
        speed="2"
        color="#4F46E5"
      ></l-Waveform>

      <h2>Loading...</h2>
    </div>

    <!-- Main Page -->
    <div v-else class="content">
      <h1>🎉 Murakaza neza!</h1>
      <p>Page imaze gufunguka neza.</p>

      <button>Get Started</button>
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
  height: 100vh;
}

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

.content {
  height: 100vh;
  background: linear-gradient(135deg, #4F46E5, #06B6D4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 20px;
}

button {
  padding: 12px 25px;
  border: none;
  border-radius: 10px;
  background: white;
  color: #4F46E5;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
}
</style>