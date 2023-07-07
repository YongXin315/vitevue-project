<template>
    <div>
        <div class="community">
          <div class="transition-text1">
              <h1 style="font-size:15px; font-weight:bold; background-color: #990000 ; color:white; border-radius:10px; padding:10px;">Everyone have power, to save a life.</h1>
          </div>
          <div class="transition-text2">
              <h2 style="font-size:15px; font-weight:bold;">Engage in an interactive experience that empowers you to aid yourself and others every day.</h2>
          </div>
       </div>
       <div class="announce">
          <div class="transition-text3">
              <h1 style="font-weight:bold; font-size:15px;">
                Over 1 Million of funding for our local bank!</h1>
         </div>
         <div class="transition-text4">
              <h2 style="font-weight:bold; font-size:15px">Dear community members,</h2>
              <p>We are thrilled to announce a monumental achievement that would not have been possible without your incredible support. Thanks to your unwavering generosity, we have surpassed a significant milestone – over $1 million in funding for our beloved local blood bank!</p><br>
              <p>Your contributions have directly impacted lives in our community and beyond. With these funds, our blood bank has been able to provide a constant supply of life-saving blood products to those in need, ensuring critical treatments, emergency transfusions, and surgeries can take place.</p><br>
              <p>We want to thank you for your incredible support towards our local blood bank. Your generosity has been instrumental in helping us meet the demand for blood packs in our community.</p><br>
              <p>However, we still need more blood packs to ensure we can adequately serve those in need. We require 20,000 more blood packs to fulfill the ongoing demand.</p><br>
              <p>We kindly request you to consider donating blood or encouraging others to do so. Together, we can ensure our local blood bank remains well-equipped to support our community.</p><br>
           <p>Let's come together and make a positive impact by reaching our goal</p><br>
           <p>Community Name</p>
           <p>Publised Date: <span style="font-style: italic;">26/06/2022</span></p>
          </div>
       </div>
    </div>
</template>

<style>
.header{
font-size: 15px;
}

.announce{
font-size: 15px;
}

.transition-text h2 {
opacity: 0;
animation: fade-in 1s forwards;
font-weight:bold;
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

.transition-text1 h1 {
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
.transition-text2 h2 {
opacity: 0;
transform: translateY(100%);
animation: push-up 1s forwards;
}

.transition-text3 h1 {
opacity: 0;
transform: translateY(100%);
animation: push-up 3s forwards;
}

.transition-text4 h2 {
opacity: 0;
transform: translateY(100%);
animation: push-up 2s forwards;
}

.transition-text4 p {
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
</style>