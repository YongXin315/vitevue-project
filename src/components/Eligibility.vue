<template>
    <div class="eligibility">
        <b>Blood Donation Eligibility Requirements</b>
        <p style="font-size: small;"><b>REMEMBER!</b> Drink plenty of fluids and eat something light. It takes <b>4-8 weeks</b> to regenerate the red blood cells lost during a blood donation.</p>
        <table class="eli-table">
            <tr>
                <td style="width: 50%">
                    <img :src="imagePaths.age" alt="Age Icon">
                    <p class="type">AGE</p>
                    <p class="eli">18-60 years old</p>
                    <p class="desp">*Parental consent required for 17 years old and below</p>
                </td>
                <td style="width: 50%">
                    <img :src="imagePaths.alcohol" alt="Alcohol free Icon">
                    <p class="type">MEDICINE &amp; ALCOHOL</p>
                    <p class="eli">alcohol-free</p>
                    <p class="desp">Avoid consuming alcohol a day before donating</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img :src="imagePaths.healthy" alt="Healthy Icon">
                    <p class="type">HEALTHY</p>
                    <p class="eli">physical &amp; mental</p>
                    <p class="desp">No chronic diseases</p>
                </td>
                <td>
                    <img :src="imagePaths.weight" alt="Weight Icon">
                    <p class="type">WEIGHT</p>
                    <p class="eli">&GT; 45kg</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img :src="imagePaths.sleep" alt="Sleep Icon">
                    <p class="type">SUFFICIENT SLEEP</p>
                    <p class="eli">&gt; 5 hours</p>
                    <p class="desp">Donors must have at least five hours of sleep before donating</p>
                </td>
                <td>
                    <img :src="imagePaths.malaysia" alt="Malaysia Icon">
                    <p class="type">RESIDING IN MALAYSIA</p>
                    <p class="eli">&gt; 1 year</p>
                    <p class="desp">for non-Malaysians</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img :src="imagePaths.gender" alt="Gender Icon">
                    <p class="type">HIGH-RISK ACTIVITIES</p>
                    <p class="eli">do not engage</p>
                    <p class="desp">Do not use drugs or engage in sexual intercourse with many partners</p>
                </td>
                <td>
                    <img :src="imagePaths.woman" alt="Woman Icon">
                    <p class="type">WOMEN</p>
                    <p class="eli">not pregnant or during menstrual cycle</p>
                    <p class="desp">including breastfeeding</p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import age from '../assets/eli-age.png';
import alcohol from '../assets/eli-alcohol.png';
import gender from '../assets/eli-gender.png';
import healthy from '../assets/eli-healthy.png';
import malaysia from '../assets/eli-malaysia.png';
import sleep from '../assets/eli-sleep.png';
import weight from '../assets/eli-weight.png';
import woman from '../assets/eli-woman.png';
export default {
    data() {
    return {
      imagePaths: {
        age: age,
        alcohol: alcohol,
        gender: gender,
        healthy: healthy,
        malaysia: malaysia,
        sleep: sleep,
        weight: weight,
        woman: woman,
      },
    };
  }
}
</script>

<style>
.eli-table td {
background-color: #FFF5F5;
border: 6px solid white;
padding: 10px 20px;
}
.eli-table .type {
font-weight: bold;
margin: 0;
color: red;
}
.eli-table .eli {
font-weight: bold;
font-size: medium;
margin: 0;
}
.eli-table .desp {
color: black;
margin: 0;
}
.eli-table img {
    height: 50px;
    padding-top: 7px;
}
</style>