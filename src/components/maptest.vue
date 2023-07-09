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
        { lat: 3.06484594571016, lng: 101.61692563544386, name: "Blood Donation Week at Taylor's University", description: "2023-08-17 to 2023-08-25" },
        { lat: 2.970786212821712, lng: 101.7137324675521, name: "Blood Donation Week at IOI City Mall", description: "2023-07-22 to 2023-07-29" },
        { lat: 3.1856896992217107, lng: 101.63501319960115, name: "Blood Donation Hero at Desa Parkcity", description: "2023-08-08 to 2023-08-15" },
        { lat: 3.05032462984594, lng: 101.6709347088716, name: "Blood Donation Hero 2.0 at Pavillion Bukit Jalil", description: "2023-09-05 to 2023-09-12" },
        { lat: 3.072168678003126, lng: 101.60651263901032, name: "Donate & SaveALive at Sunway Pyramid", description: "2023-09-15 to 2023-09-20" },
        { lat: 2.970786212821712, lng: 101.7137324675521, name: "Donation Event Fair at IOI City Mall", description: "2023-08-10 to 2023-08-15" },
        { lat: 3.1178008669063475, lng: 101.67829379439459, name: "Donate & SaveALive 2.0 at Mid Valley", description: "2023-08-22 to 2023-08-25" },
        { lat: 3.072423538426663, lng: 101.60711634232759, name: "Give Blood, Give Life at Sunway Pyramid", description: "2023-09-22 to 2023-09-25" },
        { lat: 3.06484594571016, lng: 101.61692563544386, name: "Blood Donation Drive at Taylor's University", description: "2023-09-11 to 2023-09-18" },
        { lat: 3.1096774042592807, lng: 101.46019634232759, name: "Donate & SaveALive 3.0 at Setia City Mall", description: "2023-10-11 to 2023-10-18" },
        { lat: 3.065219035588563, lng: 101.60088926556641, name: "Blood Donation Drive at Monash University", description: "2023-10-13 to 2023-10-18" },
        { lat: 3.028803020070358, lng: 101.71924683068966, name: "Kempen Derma Darah at The Mines", description: "2023-10-03 to 2023-10-10" },
        { lat: 3.1491803090213537, lng: 101.71339104232759, name: "Project 'Share Your Love & Care' at Pavillion KL", description: "2023-12-11 to 2023-12-16" },
        { lat: 3.1491803090213537, lng: 101.71339104232759, name: "Donate N Go at Pavillion KL", description: "2023-11-11 to 2023-11-16" },
        { lat: 3.1491803090213537, lng: 101.71339104232759, name: "Donate N Go 2.0 at Pavillion KL", description: "2023-12-05 to 2023-12-10" },
        { lat: 2.970786212821712, lng: 101.7137324675521, name: "Blood Fun Walk at IOI City Mall", description: "2023-12-05 to 2023-12-12" },
        { lat: 3.1929226997331814, lng: 101.63277088650862, name: "Be a Lifesaver at Village Mall Kepong", description: "2023-12-02 to 2023-12-08" },
        { lat: 3.05032462984594, lng: 101.6709347088716, name: "Uniting for Blood Donation at Pavilion Bukit Jalil", description: "2023-11-02 to 2023-11-08" },
        { lat: 3.06743561256955, lng: 101.60381954232759, name: "Be a Hero, Donate Blood at Sunway University", description: "2023-11-02 to 2023-11-05" },
        { lat: 3.148298221852806, lng: 101.6164738865086, name: "Blood Donation Journey at One Utama", description: "2023-11-22 to 2023-11-28" },
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
          const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${marker.name}</h3><p>${marker.description}</p>`,
          });

          const position = new google.maps.LatLng(marker.lat, marker.lng);

          const googleMarker = new google.maps.Marker({
            position: marker,
            map: map.value,
          });

          googleMarker.addListener('click', () => {
            infoWindow.open(map.value, googleMarker);
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
  