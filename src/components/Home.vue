<template>
  <div class="homecomm">
    <h1 class="">Welcome to the Blood Donation Community</h1>
    <p class="description">
      This app is dedicated to promoting blood donation<br>and raising awareness about its importance in saving lives.
    </p>
    <p class="join">
      Together, we can make a difference and help those in need.<br>Join us in the noble cause of donating blood!
    </p>
    <div class="createcamp">
      <p style="font-size: medium; font-weight: bold;">Blood Donation Campaign</p>
      <p>We welcome collaboration with any organization to do blood donation campaign</p>
      <button @click="goToOrganization">Create Camp Now</button>
    </div>
    <br>
    <Discover />
    <Education />
  </div>
</template>

<script>
import Discover from '../components/Discover.vue';
import Education from '../Education.vue';
export default {
    components: { Discover, Education },
    methods: {
        goToOrganization() {
        this.$router.push('/home/organization');
        },
    }
}
</script>

<style>
.homecomm .description {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: #ffa07a;
  text-align: center;
}

.homecomm .join {
  font-size: 1.3rem;
  color: #f08080;
  text-align: center;
  font-weight: bold;
}
.homecomm .createcamp {
color: white;
line-height: normal;
font-size: small;
padding: 10px;
background-image: url("../assets/home-redmap.jpg");
background-repeat: no-repeat;
background-size: 100% 100%;
}
.createcamp button {
background-color: red;
color: white;
font-size: small;
margin-top: 6px;
margin-bottom: 6px;
padding: 5px 20px;
}
</style>

