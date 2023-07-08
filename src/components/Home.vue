<template>
  <div class="homecomm">
    <h2 class="welcome">Welcome, {{ displayName }}</h2>
    <h1 class="">Welcome to the Blood Donation Community</h1>
    <p class="description">
      This app is dedicated to promoting blood donation<br>and raising awareness about its importance in saving lives.
    </p>
    <p class="join">
      Together, we can make a difference and help those in need.<br>Join us in the noble cause of donating blood!
    </p>
    <Community />
    <div class="homenews">
      <h2 class="homenewstitle">HIGHLIGHTS
        <span style="float: right" @click="goToDiscover">See More <i class='fas fa-angle-double-right'></i></span>
      </h2>
      <div class="section">
      <a href= "https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"><img src="https://media.freemalaysiatoday.com/wp-content/uploads/2021/06/03-BLOOD-DONATION-.jpg" width="100%" 
       height="100%"></a>
      <h2>A guide to donating blood for the first time</h2>
      <p><a href= "https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank">
        PETALING JAYA: Drawing blood may seem daunting to first-time donors, but rest assured it is a simple, quick and safe process that is capable of saving lives...
        <p><span class="click">(Click to read more)</span></p>
      </a></p>
    </div>
    </div>
    
    <table>
      <tr>
        <td style="padding: 0; padding-right: 5px; width: 50%;">
          <div class="viewcamp" @click="goToCampaign">
          <p style="font-size: medium; font-weight: bold;">View Campaign</p>
          <p>View blood donation campaigns held near you.</p>
          <div class="button">
            <button>View</button>
          </div>
          </div>
        </td>
        <td style="padding: 0; padding-left: 5px; width: 50%">
          <div class="createcamp" @click="goToOrganization">
          <p style="font-size: medium; font-weight: bold;">Create Campaign</p>
          <p>We welcome collaboration with any organization to do blood donation campaign.</p>
          <div class="button">
            <button>Create</button>
          </div>
          </div>
        </td>
      </tr>
    </table>
      
    
    <Education />
  </div>
</template>

<script>
import Education from '../Education.vue';
import Community from './Community.vue';

export default {
    components: { Education, Community },
    props: {
      displayName: {
        type: String,
        required: true,
      },
    },
    methods: {
        goToOrganization() {
          this.$router.push('/home/organization');
        },
        goToDiscover() {
          this.$router.push('/highlight');
        },
        goToCampaign() {
          this.$router.push('/campaign');
        }
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
background-image: linear-gradient(rgb(255, 115, 0),rgb(128, 78, 49));
border-radius: 15px;
height: 200px;
position: relative;
}
.homecomm .viewcamp {
color: white;
line-height: normal;
font-size: small;
padding: 10px;
background-image: linear-gradient(red,rgb(128, 49, 49));
border-radius: 15px;
height: 200px;
position: relative;
}
.homenews .homenewstitle {
font-size: medium;
text-align: left;
}
.homenews span {
font-style: italic;
font-weight: normal;
font-size: small;
color: red;
}
.homenews .section {
margin-bottom: 20px;
background-color: #fff;
padding: 10px;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.homenews h2 {
font-size: small;
margin: 0;
margin-bottom: 10px;
text-align: left;
}
.homenews p {
color: grey;
line-height: 1.5;
font-size: small;
text-align: justify;
}

.homenews .click {
color: blue;
font-weight: bold;
}

.homenews a { 
text-decoration: none;
color: grey;
font-weight: normal;
}

.homenews a:hover {
text-decoration: underline;
}
.createcamp .button, .viewcamp .button {
height: 50px;
position: absolute;
bottom: 5px;
right: 12px;
}
.createcamp button, .viewcamp button {
background-color: white;
color: black;
font-size: small;
font-style: italic;
margin-top: 6px;
margin-bottom: 6px;
border-radius: 15px;
width: 100px;
mix-blend-mode: screen;
}
.homecomm .welcome {
text-align: left;
}
</style>

