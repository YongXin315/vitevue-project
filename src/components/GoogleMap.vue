<template>
    <GoogleMap api-key="AIzaSyBWddpINsAJJplhhkUxmc_qvenPkKVaQKY" style="width: 100%; height: 500px" :center="center" :zoom="15">
        <!--<Marker :options="{ position: center }" />-->

        <MarkerCluster>
            <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
        </MarkerCluster>
    </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, MarkerCluster } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster },
  setup() {
    const center = { lat: 3.065343973943992, lng: 101.61675471737257 }

    const locations = [
      { lat: -31.56391, lng: 147.154312 },
      { lat: -33.718234, lng: 150.363181 },
      { lat: -33.727111, lng: 150.371124 },
      { lat: -33.848588, lng: 151.209834 },
    ]
    return { center, locations };
  },
});
</script>