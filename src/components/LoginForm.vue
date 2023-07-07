<template>
  <form @submit.prevent="login" class="login">
 
    <img src="imagesourcehere.png" alt="community logo" width="300" height="300"><br><br>
    <input type="email"  class="input"  placeholder="What's your email?"    required v-model="email" style="border-radius: 10px;"><br>
    <input type="password" class="input" placeholder="Password" required v-model="password" style="border-radius: 10px;"><br>
    <button class="loginbut" style="font-weight:bold;">Log in</button>
  </form>

  <div v-if="notification" class="notification">
  {{ notification }}
</div>

</template>

<script>
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../firebase/init.js'

export default {
  
  data() {
    return {
      email:    '',
      password: '',
      notification:'',
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword( auth, this.email, this.password)
      .then(() =>{

        this.$emit('loggedIn');
      })
      .catch(error => {
        switch (error.code) {
        case 'auth/user-not-found':
          this.notification='This email is still not yet register. Please register before login';
          break;
        case 'auth/wrong-password':
          this.notification='The email or password is incorrect. Please try again.';
          break;
        default:
          console.error('Login error:', error);
        }
    });
     
  }
  }
};
</script>

<style>
.login{
text-align:center;
padding:10px;
}
.loginbut{
border-radius: 10px;
padding:5px;
border:1px solid transparent;
width:155px;
}
.notification {
  background-color: #e74c3c;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>