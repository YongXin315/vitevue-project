<template>
    <div>
      <div class="community">
        <div class="transition-text1">
          <h1
            style="font-size:15px; font-weight:bold; background-color: #990000 ; color:white; border-radius:10px; padding:10px;">
            Everyone has the power to save a life.</h1>
        </div>
        <div class="transition-text2">
          <h2 style="font-size:small; font-weight:bold;">Engage in an interactive experience that empowers you to aid
            yourself and others every day.</h2><br>
        </div>
      </div>
      <div class="announce">
        <div class="blur-background" v-if="showNotice">
          <div class="notice-container" v-if="showNotice">
            <div class="notice" :class="{ 'jump': showNotice }">
              <div class="notice-content">
                <button class="close-button" @click="closeNotice"><i class="fa fa-close" style="font-size: 20px; color: white;"></i></button><br><br>
                <img :src="imagePaths.congrats" alt="Congrats Icon" style="height: 50px;">
                <h1 style="font-weight:bold; font-size:15px;">Over 1 Million in funding for our local bank!</h1>
                <p style="font-size: smaller; text-align: justify; text-align-last: center; padding: 20px; margin: 0;">
                  <b>Dear community members,</b><br>
                  Thanks to your incredible support, we have surpassed a monumental milestone - over $1 million in funding
                  for our local blood bank! Your generosity has directly impacted lives, providing life-saving blood
                  products for critical treatments, transfusions, and surgeries. While we're grateful for your support, we
                  still need 20,000 more blood packs to meet ongoing demand. Please consider donating blood or encouraging
                  others to do so, as together we can make a positive impact.
                </p>
                <br>
                <button class="read-more-button" @click="goToReadMorePage" style="font-style: italic; padding: 6px 15px; font-size: small;">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import congrats from '../assets/home-congrats.png';
  export default {
    setup() {
      const showNotice = ref(true);
      const router = useRouter();
  
      const closeNotice = () => {
        showNotice.value = false;
      };
      return {
        showNotice,
        closeNotice,
      };
    },
    methods: {
        goToReadMorePage() {
        this.$router.push('/announcement');
      }
    },
    data() {
    return {
      imagePaths: {
        congrats: congrats,
      },
    };
  },
  };
</script>

<style>
.announce {
font-size: 15px;
}
.community .transition-text h2 {
opacity: 0;
animation: fade-in 1s forwards;
font-weight: bold;
}
@keyframes fade-in {
from {
opacity: 0;
transform: translateY(-20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
.community .transition-text1 h1 {
opacity: 0;
animation: wipe-in 1s forwards;
animation-delay: 0.2s;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
@keyframes wipe-in {
from {
clip-path: polygon(0 0, 0% 0, 0% 100%, 0% 100%);
}

to {
clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
opacity: 1;
}
}
.community .transition-text2 h2 {
opacity: 0;
transform: translateY(100%);
animation: push-up 1s forwards;
}
.announce .transition-text3 h1 {
opacity: 0;
transform: translateY(100%);
animation: push-up 3s forwards;
}
.announce .transition-text4 h2 {
opacity: 0;
transform: translateY(100%);
animation: push-up 2s forwards;
}
.announce .transition-text4 p {
opacity: 0;
transform: translateY(100%);
animation: push-up 2s forwards;
}

@keyframes push-up {
from {
opacity: 0;
transform: translateY(100%);
}
to {
opacity: 1;
transform: translateY(0);
}
}
.announce .blur-background {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(5px);
z-index: 1;
}
.announce .notice-container {
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
}
.announce .notice {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scale(0);
opacity: 0;
border-radius: 5px;
padding: 10px;
transition: transform 0.3s ease, opacity 0.3s ease;
filter: blur(5px);
background-color: #e74c3c;
color: white;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.announce .jump {
transform: translate(-50%, -50%) scale(1);
opacity: 1;
filter: none;
animation: jump-out 0.3s forwards;
width: 80%;
}
@keyframes jump-out {
0% {
transform: translate(-50%, -50%) scale(1);
}
70% {
transform: translate(-50%, -50%) scale(1.1);
}
100% {
transform: translate(-50%, -50%) scale(1);
}
}
.announce .notice-content {
position: relative;
}
.announce .close-button {
position: absolute;
top: 5px;
right: 5px;
padding: 2px 6px;
border: none;
background-color: transparent;
color: #888;
font-size: 16px;
cursor: pointer;
}
</style>
  