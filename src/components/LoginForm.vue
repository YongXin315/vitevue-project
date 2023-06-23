<template>
    <form @submit.prevent="login">
    <h2></h2>
      <input type="email"    placeholder="What's your email?"    required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">
      <button>Log in</button>
    </form>
  </template>
  
  <script>
  import { signInWithEmailAndPassword } from '@firebase/auth'
  import { auth } from '../firebase/init.js'
  export default {
    data() {
      return {
        email:    '',
        password: ''
      }
    },
    methods: {
      login() {
        signInWithEmailAndPassword( auth, this.email, this.password)
        .then(() =>{

          this.$emit('loggedIn');
        })
        .catch(error => {
        console.error('Login error:', error);
        });
    }
    }
  };
  </script>