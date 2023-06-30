<template>
    <form @submit.prevent="signUp" class="signup">
    <h2></h2>
      <input type="text" class="input" placeholder="Username" required v-model="username">
      <input type="email" class="input" placeholder="Email" required v-model="email">
      <input type="password" class="input" placeholder="Password" required v-model="password">
      <button class="signupbut">Sign Up</button>
    </form>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
  import { auth } from '../firebase/init.js'
  export default {
    emits: ['loggedIn'],
    data() {
      return {
        username: '',
        email:    '',
        password: ''
      }
    },
    methods: {
      signUp() {
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(()=>{

            updateProfile(auth.currentUser,{
                displayName: this.username
            })
            .then(() => {
                this.$emit('loggedIn')
            })
        })
        
        .catch((error) =>{
            console.log(error.message)
        })
      }
    }
  }
  </script>

<style>
.signup{
text-align:center;
padding:10px;
border:1px solid black;
}

.input{
margin-bottom:10px;
padding:5px;
}

.signupbut{
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

.signupbut:hover{
--_p: 100%;
transition: background-position .4s, background-size 0s;
}

.signupbut:active{
box-shadow: 0 0 9e9q inset #0009; 
background-color: var(--c);
color: #fff;
}

.input::placeholder {
font-family: Arial, Helvetica, sans-serif;
}
</style>