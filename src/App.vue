<script setup>
  import SignupForm from './components/SignupForm.vue'
  import LoginForm from './components/LoginForm.vue'
  import Discover from './components/Discover.vue'
  import Education from './Education.vue'
  import { RouterLink } from 'vue-router'
  //import GoogleMap from './components/GoogleMap.vue'
  import Campaign from './components/Campaign.vue'
  import Organization from './components/Organization.vue'
  import Maptest from './components/maptest.vue'
  import HamburgerMenu from './components/HamburgerMenu.vue'
  import Community from './components/Community.vue'
  import Home from './components/Home.vue'

</script>

<template>
  <div v-if="!isLoggedIn">
    <!-- login -->
    <template v-if="showLogin">
      <login-form @loggedIn="logInOrSignUp" class="login"/>
      <p style="text-align: center;">No account yet? <span @click="showLogin=false" style="font-weight: bold; text-decoration: underline;">Sign Up</span> instead.</p>
    </template>
    <!-- or register -->
    <template v-else>
      <signup-form @loggedIn="logInOrSignUp" class="signup"/>
      <p style="text-align:center;">Already registered? <span @click="showLogin=true" style="font-weight: bold; text-decoration: underline;">Login</span> instead.</p>
    </template>
  </div>
  <!-- is logged in -->
  <div v-else>
    <div>
      <div style="position: fixed; height:50px; width: 100%; background-color: red;">
        &nbsp;
      </div>
    </div>
    <div id="app1">
      <h2 class="welcome">Welcome, {{ displayName }}</h2>
      <router-view></router-view>
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
      this.displayName = auth.currentUser.displayName
    }
  },
  mounted() {
    const lastVisitedPage = localStorage.getItem('lastVisitedPage');
    if (lastVisitedPage && this.$route.path !== lastVisitedPage) {
      this.$router.push(lastVisitedPage);
    }
  },
  methods:{
    logInOrSignUp() {
      this.isLoggedIn = true;
      const lastVisitedPage = localStorage.getItem('lastVisitedPage');
      if (lastVisitedPage) {
        this.$router.push(lastVisitedPage);
      } else {
        this.$router.push('/home');
      }
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
background-color: #f9f9f9;
height: 100%;
}
.welcome {
text-align: left;
}
</style>
