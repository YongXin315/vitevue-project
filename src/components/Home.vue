<template>
    <h1 class="">Welcome to the Blood Donation Community</h1>
    <p class="description">
      This app is dedicated to promoting blood donation<br>and raising awareness about its importance in saving lives.
    </p>
    <p class="join">
      Together, we can make a difference and help those in need.<br>Join us in the noble cause of donating blood!
    </p>
    <button @click="goToOrganization">Create Camp Now</button>
    <Discover />
    <Education />
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
.description {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: #ffa07a;
  text-align: center;
}

.join {
  font-size: 1.3rem;
  color: #f08080;
  text-align: center;
  font-weight: bold;
}
</style>

