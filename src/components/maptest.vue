<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'Map',
  props: {
    filteredCampaigns: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const map = ref(null);
    const markers = ref([]);

    const initMap = () => {
      const center = { lat: 3.06484594571016, lng: 101.61692563544386 }; // Default center coordinates

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            center.lat = position.coords.latitude;
            center.lng = position.coords.longitude;
            showMap(center);
          },
          () => {
            showMap(center);
            console.error('Error getting current location');
          }
        );
      } else {
        showMap(center);
        console.error('Geolocation is not supported by this browser');
      }
    };

    const showMap = (center) => {
      map.value = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 15,
      });

      updateMarkers();
    };

    const updateMarkers = () => {
      markers.value.forEach((marker) => {
        marker.setMap(null);
      });

      markers.value = [];

      props.filteredCampaigns.forEach((campaign) => {
        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${campaign.name}</h3><p>${campaign.description}</p>`,
        });

        const position = new google.maps.LatLng(campaign.latitude, campaign.longitude);

        const googleMarker = new google.maps.Marker({
          position: position,
          map: map.value,
        });

        googleMarker.addListener('click', () => {
          infoWindow.open(map.value, googleMarker);
        });

        markers.value.push(googleMarker);
      });
    };

    onMounted(() => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBWddpINsAJJplhhkUxmc_qvenPkKVaQKY&callback=initMap`;      script.defer = true;
      script.async = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    });

    watch(props.filteredCampaigns, () => {
      updateMarkers();
    });

    return { map };
  },
};
</script>

<style>
#map {
  height: 400px;
}
</style>
