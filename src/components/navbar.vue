<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">MySite</div>

      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Series</a></li>
        <li><a href="#">About</a></li>
      </ul>
       <div class="search-box">
          <input type="text" placeholder="Search movies..." />
        </div>
    </nav>

    <!-- Content -->
    <main class="content">
      <h1>Welcome</h1>
      <p>Content ya website iri hano.</p>
    </main>
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

.menu a{
  color:white;
  text-decoration:none;
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