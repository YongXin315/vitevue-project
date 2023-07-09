<template>
    <div>
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Map',
    setup() {
      const map = ref(null);
      const markers = [
        { lat: 3.06484594571016, lng: 101.61692563544386 },
        { lat: 2.970786212821712, lng: 101.7137324675521 },
        { lat: 3.1856896992217107, lng: 101.63501319960115 },
        { lat: 3.05032462984594, lng: 101.6709347088716 },
        { lat: 3.072168678003126, lng: 101.60651263901032 },
      ];
  
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
  
        markers.forEach((marker) => {
          new google.maps.Marker({
            position: marker,
            map: map.value,
          });
        });
      };
  
      onMounted(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBWddpINsAJJplhhkUxmc_qvenPkKVaQKY&callback=initMap`;
        script.defer = true;
        script.async = true;
        window.initMap = initMap;
        document.head.appendChild(script);
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
  