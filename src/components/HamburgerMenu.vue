<template>
      <div class="hamburger" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div :class="['sidebar', { 'open': isMenuOpen }]">
        <ul>
          <li @click="navigate('/home')">Home</li>
          <li @click="navigate('/highlight')">Highlights</li>
          <li @click="navigate('/education')">Why Blood?</li>
          <li @click="navigate('/campaign')">Campaign</li>
          <li @click="navigate('/profile')">Profile</li>
        </ul>
        <div style="position: absolute; width: 100%; bottom: 0;">
          <ul>
            <li @click="navigate('/organization')" style="border-top: 1px solid #ccc; ">Create Camp</li>
            <li v-if="isLoggedIn" @click="logOut" style="border-bottom: none; ">Sign Out</li>
          </ul>
        </div>
      </div>
</template>
  
<script>
import { useRouter } from 'vue-router';
import { auth } from '../firebase/init.js';
import { signOut } from 'firebase/auth';
export default {
    props: {
        isLoggedIn: {
        type: Boolean,
        required: true,
        },
    },
    data() {
        return {
        isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        },
        navigate(path) {
        this.$router.push(path);
        this.isMenuOpen = false; // Close the menu after navigation
        },
        logOut() {
        this.$emit('logOut'); // Emit the logOut event to the parent component
        },  
    },
    created() {
    auth.onAuthStateChanged((user) => {
      this.isLoggedIn = user !== null;
    });
}
};
</script>
  
<style>
.hamburger {
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 18px;
width: 32px;
position: fixed;
top: 15px;
left: 15px;
z-index: 999;
}
.line {
height: 3px;
background-color: #333;
}
.sidebar {
width: 200px;
height: 100%;
position: fixed;
top: 0;
left: -200px;
background-color: #f2f2f2;
transition: left 0.3s ease;
}
.sidebar.open {
left: 0;
}
ul {
list-style-type: none;
padding: 0;
padding-top: 40px;
}
li {
padding: 10px;
border-bottom: 1px solid #ccc;
transition: background-color 0.3s ease;
cursor: pointer;
}
li:hover {
background-color: #d6d6d6;
}
</style>
  