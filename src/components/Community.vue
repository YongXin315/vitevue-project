<template>
    <div>
        <div class="community">
            <div class="transition-text1">
                <h1 style="font-size:15px; font-weight:bold; background-color: #990000 ; color:white; border-radius:10px; padding:10px;">
                    Everyone have power, to save a life.
                </h1>
            </div>
            <div class="transition-text2">
                <h2 style="font-size:15px; font-weight:bold;">
                    Engage in an interactive experience that empowers you to aid yourself and others every day.
                </h2>
            </div>
       </div>
       <div class="announce">
            <div class="transition-text3">
                <h1 style="font-weight:bold; font-size:15px;">
                    Over 1 Million of funding for our local bank!
                </h1>
            </div>
            <div class="transition-text4">
                <h2 style="font-weight:bold; font-size:15px">Dear community members,</h2>
                <p>
                    Thanks to your incredible support, we have surpassed a monumental milestone - over $1 million in 
                    funding for our local blood bank! Your generosity has directly impacted lives, providing life-saving 
                    blood products for critical treatments, transfusions, and surgeries. While we're grateful for your support, 
                    we still need 20,000 more blood packs to meet ongoing demand. Please consider donating blood or encouraging 
                    others to do so, as together we can make a positive impact.
                </p>
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