<script setup>
  import SignupForm from './components/SignupForm.vue'
  import LoginForm from './components/LoginForm.vue'
  import { auth } from'./firebase/init.js'
  import { signOut } from 'firebase/auth'
  import Discover from './components/Discover.vue'
  import Education from './Education.vue'
  import { RouterLink } from 'vue-router'
  import GoogleMap from './components/GoogleMap.vue'
  import Campaign from './components/Campaign.vue'
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <div v-if="!isLoggedIn">
    <!-- login -->
    <template v-if="showLogin">
      <login-form @loggedIn="isLoggedIn= true" class="login"/>
      <p style="text-align: center;">No account yet? <span @click="showLogin=false" style="font-weight: bold; text-decoration: underline;">Sign Up</span> instead.</p>
    </template>
    <!-- or register -->
    <template v-else>
      <signup-form @loggedIn="isLoggedIn= true" class="signup"/>
      <p style="text-align:center;">Already registered? <span @click="showLogin=true" style="font-weight: bold; text-decoration: underline;">Login</span> instead.</p>
    </template>
  </div>
  <!-- is logged in -->
  <div v-else>
    <h2>Welcome {{ displayName }}</h2>
    
    <!--<Campaign />
    <GoogleMap /><Discover />-->
    <Education />
    <button @click="logOut">Sign Out</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { SignupForm, LoginForm, 'router-link': RouterLink },
  data() {
    return {
      isLoggedIn: false,
      showLogin: true,
      displayName: ''
    }
  },
  beforeUpdate(){
    if(auth.currentUser){
      this.displayName = auth.currentUser.displayName
    }
  },
  methods:{
    logOut(){
      signOut(auth)
      .then(() => {
        this.isLoggedIn=false})
    }
  },
}
</script>

<style>
  #app {
    padding: 10px;
  }
</style>
