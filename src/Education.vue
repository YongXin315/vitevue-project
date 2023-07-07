<template>
  <div class="education">
    <h2>WHY BLOOD?</h2>
    <div class="edu-div">
      <img :src="imagePaths.bloodType" alt="Blood Type Image">
      <div class="edu-div-content">
        <p><b>WHAT BLOOD TYPES MATCH?</b><br>
          There are four main blood types: A, B, AB and O. Combinations of proteins and sugars, called antigens, on the 
          surface of red blood cells are what makes the blood type either compatible or incompatible with other blood types.</p>
        <div><button @click="goToBloodType"><i class='fas fa-arrow-right'></i></button></div>
      </div>
    </div>

    <div class="edu-div">
      <img :src="imagePaths.eligibility" alt="Blood Donation Image">
      <div class="edu-div-content">
        <p><b>AM I ELIGIBLE TO DONATE?</b><br>
          Curious about your eligibility to donate blood? Find out if you meet the criteria to make a life-saving contribution.</p>
        <div><button @click="goToEligibility"><i class='fas fa-arrow-right'></i></button></div>
      </div>
    </div>

    <div class="edu-div">
      <img :src="imagePaths.perks" alt="Body Checkup Image">
      <div class="edu-div-content">
        <p><b>MALAYSIAN BLOOD DONOR PRIVILEGES</b><br>
          Donating blood just once can save up to 3 lives but did you know regular blood donors get special medical privileges in Malaysia? 
        Click 'Learn More' to explore the health benefits and medical privileges given to blood donors in Malaysia.</p>
        <div><button @click="goToPerks"><i class='fas fa-arrow-right'></i></button></div>
      </div>
    </div>

    <div class="edu-div">
      <div class="edu-div-content">
        <p><b>FREQUENTLY ASKED QUESTIONS</b><br>
          Answers to our most frequently asked questions are just one click away.</p>
        <div><button @click="goToFAQ">Go to FAQ</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  import bloodType from './assets/edu-bloodtype.jpg';
  import eligibility from './assets/edu-eligibility.jpg';
  import perks from './assets/edu-perks.jpg';

  export default {
    methods: {
      goToBloodType() {
        this.$router.push('/education/bloodtype');
      },
      goToEligibility() {
        this.$router.push('/education/eligibility');
      },
      goToPerks() {
        this.$router.push('/education/perks');
      },
      goToFAQ() {
        this.$router.push('/education/faq');
      }
    },
  data() {
    return {
      imagePaths: {
        bloodType: bloodType,
        eligibility: eligibility,
        perks: perks,
      },
    };
  },
};
</script>

<style>
.education h2 {
font-size: medium;
text-align: left;
}
.edu-div {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.edu-div-content {
  padding: 15px;
  background-color: white;
}
.edu-div img {
  width: 100%;
}
.edu-div b {
  color: black;
}
.edu-div p {
  color: grey;
  text-align: justify;
  font-size: small;
  margin-top: 0;
}
.edu-div div {
  text-align: right;
}
.edu-div button {
  color: white;
  background-color: red;
  font-size: small;
  padding: 12px 16px;
  font-style: italic;
  border-radius: 20px;
}
.edu-div button:hover {
  color: black;
}
</style>
  
  