<script>
import HoMe from "@/components/HoMe.vue";
import AccouNt from "./components/AccouNt.vue";
export default{
  components: {
    HoMe,AccouNt
  },
data(){
  return{
    navigation:'HoMe'
  }
}
}
</script>

<template>
  <div class="">
    <!-- Navbar -->
   
    <nav class="navbar">
      <a href="./App.vue" class="logo">Bravo.net</a>

      <ul class="menu">
        <li><button  class="menu" @click="navigation=`HoMe`">Home</button></li>
        <li><button  class="menu" @click="navigation=`AccouNt`">Movies</button></li>
        <li><button  class="menu">Series</button></li>
        <li><button  class="menu">About</button></li>
      </ul>
       <div class="search-box">
          <input type="text" placeholder="Search movies..." />
        </div>
    </nav>
<HoMe v-if="navigation===`HoMe`"></HoMe>
<AccouNt v-else></AccouNt>
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.navbar{
  height:70px;
  background:#111827;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 40px;
  width: auto;
   box-shadow: 0 4px 10px rgba(103, 26, 116, 0.24);
}

.logo{
  font-size:1.5rem;
  font-weight:bold;
}

.menu{
  display:flex;
  list-style:none;
  gap:30px;
}

.menu button{
  color:white;
  text-decoration:none;
  font-size: large;
}
.menu button:focus {
    color: #a855f7;
border-bottom:1px solid #430d76 ;
 font-size: large;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.menu button:hover {
    color: #a855f7;
}
.content{
  padding:30px;
}

/* Mobile */
@media(max-width:768px){
  .navbar{
    flex-direction:column;
    height:auto;
    padding:15px;
  }

  .menu{ 
    margin-top:15px;
    flex-wrap:wrap;
    justify-content:center;
  }
}
</style>