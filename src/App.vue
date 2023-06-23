<script setup>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { auth } from'@/firebase/init.js'
import { signOut } from 'firebase/auth'
</script>

<template>
  <div v-if="!isLoggedIn">
    <!-- login -->
    <template v-if="showLogin">
      <login-form @loggedIn="isLoggedIn= true"/>
      <p>No account yet? <span @click="showLogin=false">Sign Up</span> instead.</p>
    </template>
    <!-- or register -->
    <template v-else>
      <signup-form @loggedIn="isLoggedIn= true"/>
      
      <p>Already registered? <span @click="showLogin=true">Login</span> instead.</p>
    </template>
  </div>
  <!-- is logged in -->
  <div v-else>
    <h2>Welcome {{ displayName }}</h2>
    <button @click="logOut">Sign Out</button>
  </div>
</template>

<script>
export default {
  components: { SignupForm, LoginForm },
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
  }
}
</script>

<style>
  p, h2 {
    text-align: center;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
    color: blue;
  }
  form {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    max-width: 260px;
    margin: 30px auto;
  }
  input, button {
    height: 28px;

  }
  input {
    padding-left: 10px;
  }
  button {
    width: fit-content;
    margin: auto;
    border:2px solid black;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    
  }
  p{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  span{
    font-weight:bold;
  }
</style>
