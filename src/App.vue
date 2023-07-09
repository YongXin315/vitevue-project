<script setup>
  import SignupForm from './components/SignupForm.vue'
  import LoginForm from './components/LoginForm.vue'
  import { RouterLink } from 'vue-router'
  //import GoogleMap from './components/GoogleMap.vue'
  import HamburgerMenu from './components/HamburgerMenu.vue'
</script>

<template>
  <div v-if="!isLoggedIn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <!-- login -->
    <template v-if="showLogin">
      <login-form @loggedIn="logInOrSignUp" class="login"/>
      <p style="text-align: center; font-size: small;">No account yet? <span @click="showLogin=false" style="font-weight: bold; text-decoration: underline;">Sign Up</span> instead.</p>
    </template>
    <!-- or register -->
    <template v-else>
      <signup-form @loggedIn="logInOrSignUp" class="signup"/>
      <p style="text-align:center; font-size: small;">Already registered? <span @click="showLogin=true" style="font-weight: bold; text-decoration: underline;">Login</span> instead.</p>
    </template>
  </div>
  <!-- is logged in -->
  <div v-else>
    <div>
      <div style="z-index: 999; position: fixed; height:50px; width: 100%; background-color: red;">
        &nbsp;
      </div>
    </div>
    <div id="app1">
      <router-view :displayName="displayName"></router-view>
      <HamburgerMenu :isLoggedIn="isLoggedIn" @logOut="logOut" />
      <!--<Discover /><GoogleMap /><Organization /><Maptest /><Campaign /><Education /><Home />
      -->
    </div>
  </div>
</template>

<script>
import { auth } from'./firebase/init.js'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default {
  name: 'App',
  components: { SignupForm, LoginForm, HamburgerMenu },
  data() {
    return {
      isLoggedIn: false,
      showLogin: true,
      displayName: ''
    }
  },
  beforeUpdate(){
    if(auth.currentUser){
      this.displayName = auth.currentUser.displayName;
    }
  },
  methods:{
    logInOrSignUp() {
      this.isLoggedIn = true;
      this.$router.push('/home'); // Redirect to the home page
    },
    logOut(){
      signOut(auth)
      .then(() => {
        this.isLoggedIn=false;
        const router = useRouter();
          router.push('/');
        })
    }
  },
}
</script>

<style>
#app1 {
padding: 10px 20px;
padding-top: 50px;
height: 100%;
background-color: #f9f9f9;
}
</style>
