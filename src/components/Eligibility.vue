<template>
    <div>
        <div class="eli-content-container">
        <button class="nav-button" @click="previousContent" :disabled="currentIndex === 0">&lt;</button>
        <div class="content-eligibility" v-html="currentContent"></div>
        <button class="nav-button" @click="nextContent" :disabled="currentIndex === contents.length - 1">&gt;</button>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
    contents: [
        "<h2>AGE</h2><h1>18-60 years old</h1><p>*Parental consent required for 17 years old and below</p>",
        "<h2>MEDICINE &amp; ALCOHOL</h2><h1>alcohol-free</h1><p>Avoid consuming alcohol a day before donating</p>",
        "<h2>HEALTHY</h2><h1>physical &amp; mental</h1><p>No chronic diseases</p>",
        "<h2>WEIGHT</h2><h1>&GT; 45kg</h1>",
        "<h2>SUFFICIENT SLEEP</h2><h1>&gt; 5 hours</h1><p>Donors must have at least five hours of sleep before donating</p>",
        "<h2>RESIDING IN MALAYSIA</h2><h1>&gt; 1 year</h1><p>for non-Malaysians</p>",
        "<h2>HIGH-RISK ACTIVITIES</h2><h1>do not engage</h1><p>Do not use drugs or engage in sexual intercourse with many partners</p>",
        "<h2>WOMEN</h2><h1>not pregnant or during menstrual cycle</h1><p>including breastfeeding</p>"
    ],
    currentIndex: 0
    };
},
computed: {
    currentContent() {
    return this.contents[this.currentIndex];
    }
},
methods: {
    previousContent() {
    if (this.currentIndex > 0) {
        this.currentIndex--;
    }
    },
    nextContent() {
    if (this.currentIndex < this.contents.length - 1) {
        this.currentIndex++;
    }
    }
}
};
</script>
  
<style>
.eli-content-container {
display: flex;
align-items: center;
}

.nav-button {
border: none;
background: none;
font-size: 24px;
cursor: pointer;
padding: 5px 10px;
}

.content-eligibility {
padding: 20px;
border: none;
background-color: white;
box-shadow: 3px 3px 5px lightgrey;
border-radius: 20px;
width: 80%;
margin: auto;
position: relative;
}

.content-eligibility h1 {
font-weight: bold;
font-size: 5vmin;
text-align: left;
line-height: 100%;
}

.content-eligibility h2 {
color: red;
font-weight: bold;
font-size: 3vmin;
}

.content-eligibility p {
font-weight: 500;
font-size: 2.5vmin;
}
</style>