<template>
    <form @submit.prevent="signUp">
    <h2></h2>
      <input type="text"     placeholder="Username" required v-model="username">
      <input type="email"    placeholder="Email"    required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">
      <button>Sign Up</button>
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