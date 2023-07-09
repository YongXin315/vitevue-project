<template>
  <form @submit.prevent="login" class="login">
    <img :src="imagePaths.appicon" alt="community logo" width="50"><br><br>
    <input type="email" class="input" placeholder="What's your email?" required v-model="email" style="border-radius: 10px;"><br>
    <input type="password" class="input" placeholder="Password" required v-model="password" style="border-radius: 10px;"><br>
    <button class="loginbut">Log in</button>
  </form>

  <div v-if="notification" class="login-notification">
    {{ notification }}
  </div>

</template>

<script>
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../firebase/init.js'
import appicon from '../assets/appicon.png';

export default {
  data() {
    return {
      email: '',
      password: '',
      notification:'',
      imagePaths: {
      appicon: appicon,
      }
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
.login input {
box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
border: 1px solid white;
height: 28px;
padding: 5px;
margin-bottom: 10px;
resize: none;
font-size: small;
border-radius: 6px;
background-color: white;
}
.login .loginbut{
border-radius: 10px;
padding:5px;
border:1px solid transparent;
width:150px;
color: white;
font-weight: bold;
background-color: #e74c3c;
margin-top: 5px;
}
.login-notification {
color: #e74c3c;
padding: 10px;
border-radius: 5px;
font-size: small;
margin-bottom: 10px;
}
</style>