<script>
import axios from 'axios';
export default{
  name:"LoGin",
  data(){
    return{
      form:{
        firstname:"",
        password:"",
        email:""

      },
    }
  },
  methods:{
    send(){
      axios.post("http://localhost:300/insert",this.form).
      then((res)=>{res.data}).catch((err)=>{
        console.log("faill now please try again",err);
      });
    }
  }
}
</script>

<template>
  <div class="signUpContainer">
    <div class="helloform">
      <h3 class="signhead">Sign Up</h3>
      <p>Sign up to get account on our application for future plan</p>

      <form class="forminput">
        <!-- First Name -->
        <div class="forminput-box">
          <label for="firstname">👨‍🏫</label>
          <input 
            id="firstname"
            type="text" 
             v-model="form.firstname"
            placeholder="First name"
            required
          >
        </div>

        <!-- Password -->
        <div class="forminput-box">
          <label for="password">🔐</label>
          <input 
            id="password"
            type="password" 
           v-model="form.password"
            placeholder="password"
            required
          >
        </div>

        <!-- Email -->
        <div class="forminput-box">
          <label for="email">📧</label>
          <input 
            id="email"
            type="email" 
            v-model="form.email"
            placeholder="youremail@gmail.com"
            required
          >
        </div>

        <!-- Remember Me & Account Link -->
        <div class="remember-account-box">
          <label for="remember">
            <input 
              id="remember" 
              type="checkbox" 
              
            >
            Remember me
          </label>
          <a href="#">I have an account !</a>
        </div>

        <button type="submit" @click="send">Sign up</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: cursive, sans-serif;
}

/* Background setup for Vue component layout */
.signUpContainer {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('./assets/toto.png'); /* Shaka ko ishusho iri muri assets folder */
  background-size: cover;
  background-position: center;
  width: 100%;
}

.helloform {
  background: rgba(64, 64, 64, 0.15);
  border: 3px solid rgba(255, 255, 255, 0.3);
  padding: 30px;
  border-radius: 16px;
  backdrop-filter: blur(25px);
  text-align: center;
  color: white;
  width: 400px;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.15);
}

.signhead {
  font-size: 40px;
  margin-bottom: 40px;
}

.forminput-box {
  margin: 20px 0;
  position: relative;
}

.forminput-box input {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 12px 12px 12px 45px;
  border-radius: 95px;
  outline: 3px solid transparent;
  transition: 0.3s;
  font-size: 17px;
  color: white;
  font-weight: 600;
}

.forminput-box input::placeholder {
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
  font-weight: 500;
}

.forminput-box input:focus {
  outline: 3px solid rgba(255, 255, 255, 0.3);
}

.forminput-box label {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
}

.remember-account-box {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 15px;
}

.remember-account-box label {
  display: flex;
  gap: 8px;
  cursor: pointer;
}

.remember-account-box input {
  accent-color: white;
  cursor: pointer;
}

.remember-account-box a {
  color: white;
  text-decoration: none;
}

.remember-account-box a:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  padding: 10px 0;
  background: blanchedalmond;
  border: none;
  border-radius: 95px;
  color: black;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: beige;
}
</style>