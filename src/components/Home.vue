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

    <table>
      <tr>
        <td style="padding: 0; padding-right: 5px; width: 50%;">
          <div class="viewcamp" @click="goToCampaign">
          <p style="font-size: medium; font-weight: bold;">View Campaign</p>
          <p style="font-size: smaller;">View blood donation campaigns held near you.</p>
          <div class="button">
            <button>View</button>
          </div>
          </div>
        </td>
        <td style="padding: 0; padding-left: 5px; width: 50%">
          <div class="createcamp" @click="goToOrganization">
          <p style="font-size: medium; font-weight: bold;">Create Campaign</p>
          <p style="font-size: smaller;">We welcome collaboration with any organization to do blood donation campaign.</p>
          <div class="button">
            <button>Create</button>
          </div>
          </div>
        </td>
      </tr>
    </table>
    <br>
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
    
    
    <div class="homeedu">
      <h2 style="text-align: left; font-size: medium;">WHY BLOOD?</h2>
      <div class="content"  @click="goToBloodType">
        <table width="100%">
          <tr>
            <td width="35px" style="text-align: left;"><img :src="imagePaths.bticon" alt="Blood Type Icon"></td>
            <td style="text-align: left;"><p>Matching Blood Types</p></td>
            <td style="text-align: right;"><button><i class='fas fa-arrow-right' style="font-size: large;"></i></button></td>
          </tr>
        </table>
      </div>
      <div class="content" @click="goToEligibility">
        <table width="100%">
          <tr>
            <td width="35px" style="text-align: left;"><img :src="imagePaths.eliicon" alt="Eligibility Icon"></td>
            <td style="text-align: left;"><p>Blood Donor Eligibility Criteria</p></td>
            <td style="text-align: right;"><button><i class='fas fa-arrow-right' style="font-size: large;"></i></button></td>
          </tr>
        </table>
      </div>
      <div class="content" @click="goToPerks">
        <table width="100%">
          <tr>
            <td width="35px" style="text-align: left;"><img :src="imagePaths.privileges" alt="Privilege Icon"></td>
            <td style="text-align: left;"><p>Blood Donor Privileges</p></td>
            <td style="text-align: right;"><button><i class='fas fa-arrow-right' style="font-size: large;"></i></button></td>
          </tr>
        </table>
      </div>
      <div class="content" @click="goToFAQ">
        <table width="100%">
          <tr>
            <td width="35px" style="text-align: left;"><img :src="imagePaths.faqicon" alt="FAQ Icon"></td>
            <td style="text-align: left;"><p>Frequently Asked Questions</p></td>
            <td style="text-align: right;"><button><i class='fas fa-arrow-right' style="font-size: large;"></i></button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Community from './Community.vue';
import bticon from '../assets/bt-icon.png';
import eliicon from '../assets/eli-icon.png';
import privileges from '../assets/perks-privilege.png';
import faqicon from '../assets/faq-icon.png';

export default {
    components: { Community },
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
        },
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
          bticon: bticon,
          eliicon: eliicon,
          privileges: privileges,
          faqicon: faqicon,
        },
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
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
line-height: normal;
font-size: small;
padding: 10px;
background-image: linear-gradient(rgb(255, 255, 255),rgb(255, 170, 120));
border-radius: 10px;
height: 200px;
position: relative;
}
.homecomm .viewcamp {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
line-height: normal;
font-size: small;
padding: 10px;
background-image: linear-gradient(rgb(255, 255, 255),rgb(255, 146, 146));
border-radius: 10px;
height: 200px;
position: relative;
}
.homenews .homenewstitle {
font-size: medium;
text-align: left;
}
.homenews span {
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
font-size: small;
font-style: italic;
margin-top: 6px;
margin-bottom: 6px;
border-radius: 15px;
width: 100px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.homecomm .welcome {
text-align: left;
}
.homeedu .content {
background-color: white;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 15px;
margin-bottom: 10px;
border-radius: 10px;
display: flex;
justify-content: left;
align-items: center;
}
.homeedu .content p {
font-weight: bold;
font-size: small;
margin: 0;
text-align: left;
display: inline;
}
.homeedu .content table tr td {
padding: 0;
}
.homeedu .content img {
height: 30px;
width: 30px;
}
.homeedu .content button {
padding: 0;
background-color: transparent;
}
</style>

