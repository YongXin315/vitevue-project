<template>
    <form @submit.prevent="login" class="login">
    <input type="email"  class="input"  placeholder="What's your email?"    required v-model="email"><br>
      <input type="password" class="input" placeholder="Password" required v-model="password"><br>
      <button class="loginbut">Log in</button>
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

<style>
  .login{
    text-align:center;
    border:1px solid black;
    padding:10px;
  }

  .loginbut{
    --c:  #E95A49; /* the color*/
  
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;
  font-family: system-ui, sans-serif;
  font-size:normal;
  cursor: pointer;
  padding: 5px;
   
  border: 2px solid #E95A49;

  }

  .loginbut:hover{
    --_p: 100%;
  transition: background-position .4s, background-size 0s;
  }

  .loginbut:active{
    box-shadow: 0 0 9e9q inset #0009; 
  background-color: var(--c);
  color: #fff;
  }
</style>