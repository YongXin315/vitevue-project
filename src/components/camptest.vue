<template>
  <div class="camptest">
    <h1 class="title">Discover</h1>
    <MapTest :filteredCampaigns="filteredCampaigns" /><br>
    <input class="search" type="text" v-model="searchQuery" placeholder=" Search by location" />
    <input class="date" type="date" v-model="searchDate" />
    <div style="float: right;">
      <button class="button" @click="toggleSortOrder">
        <i :class="sortOrder === 'asc' ? 'fa fa-sort-amount-asc' : 'fa fa-sort-amount-desc'"></i>  
      </button>
      <button class="button" v-if="!showFavorites" @click="toggleFavoritesView"><i class='fas fa-heart'></i></button>
    </div>
    
    <ul v-if="paginatedCampaigns.length > 0 && !showFavorites">
      <li v-for="campaign in paginatedCampaigns" :key="campaign.id">
          <h3>{{ campaign.name }}</h3>
          <p class="camporganizer">by {{ campaign.description }}</p>
          <p><span class="data">Address</span><br> {{ campaign.location }}</p>
          <p><span class="data">Date</span><br> {{ campaign.startDate }} to {{ campaign.endDate }}</p>
          <div style="width: 100%; text-align: right; margin-bottom: 3px;">
            <button style="margin-right: 10px; background-color: transparent;" @click="toggleFavorite(campaign)">
              <i :class="campaign.isFavorite ? 'fas fa-heart' : 'far fa-heart'" style="font-size: large; color: #e74c3c;"></i>
            </button>
            <a v-for="formUrl in campaign.formUrls" :key="formUrl.id" class="register" :href="formUrl.url" target="_blank">Register</a>
          </div>
      </li>
    </ul>

    <div v-if="showFavorites">
      <h2 style="font-size: medium;">Your Favorite Campaigns</h2>
      <ul v-if="favorites.length > 0">
        <li v-for="favorite in favorites" :key="favorite.id">
          <h3>{{ favorite.name }}</h3>
          <p class="camporganizer">by {{ favorite.description }}</p>
          <p><span class="data">Address</span><br> {{ favorite.location }}</p>
          <p><span class="data">Date</span><br> {{ favorite.startDate }} to {{ favorite.endDate }}</p>
          <div style="width: 100%; text-align: right; margin-bottom: 3px;">
            <a v-for="formUrl in favorite.formUrls" :key="formUrl.id" class="register" :href="formUrl.url" target="_blank">Register</a>
          </div>
        </li>
      </ul>
      <div v-else style="margin-top: 20px; margin-bottom: 20px; color: grey; text-align: center; font-size: small;">
        No favorite campaigns found.
      </div>
      <div style="text-align: center; margin-bottom: 20px;">
        <button class="button" style="font-size: small;" @click="toggleFavoritesView">Back to Campaign List</button>
      </div>
    </div>

    <div v-else>
      <div v-if="filteredCampaigns.length === 0" style="margin-top: 20px; margin-bottom: 20px; color: grey; text-align: center; font-size: small;">
        <i class="fa fa-search" style="font-size: 35px;"></i><br>
        No results found.
      </div>

      <div class="pagination" v-if="filteredCampaigns.length > 0">
        <button @click="goToPreviousPage" :disabled="currentPage === 1"><i class="fa fa-angle-left"></i></button>
        <span>{{ currentPage }}</span>
        <button @click="goToNextPage" :disabled="currentPage === totalPages"><i class="fa fa-angle-right"></i></button>    
      </div>
    </div>
  </div>
</template>

<script>
import MapTest from '../components/maptest.vue';
export default {
  components: { MapTest },
  data() {
    return {
      searchQuery: '',
      searchDate: '',
      sortOrder: 'asc',
      currentPage: 1,
      pageSize: 8,
      favorites: [],
      showFavorites: false,
      campaigns: [
        {
          id: 1,
          name: "Blood Donation Week at Taylor's University",
          location: '1, Jln Taylors, 47500 Subang Jaya, Selangor',
          startDate: '2023-08-17',
          endDate: '2023-08-25',
          description: 'PUSAT DARAH NEGARA',
          formUrls: [
            { id: 1, url: 'https://forms.gle/znWG6ZWZZXfAoLXN6' },
          ],
          latitude: 3.06484594571016,
          longitude: 101.61692563544386
        },
        {
          id: 2,
          name: 'Blood Donation Week at IOI City Mall',
          location: 'City Sepang, 2AT-3A, Level 3, IOI City Mall, Lbh IRC, Ioi Resort, 62502 Putrajaya',
          startDate: '2023-07-22',
          endDate: '2023-07-29',
          description: 'PUSAT KOMUNITI ST JOHN AMBULANS MALAYSIA',
          formUrls: [
            { id: 2, url: 'https://forms.gle/6DCNrWcpjiiDTVZSA' },
          ],
          latitude: 2.970786212821712,
          longitude: 101.7137324675521
        },
        {
          id: 3,
          name: "Blood Donation Hero at Desa Parkcity",
          location: ' Desa Parkcity 52200 Kuala Lumpur, Federal Territory of Kuala Lumpur ',
          startDate: '2023-08-08',
          endDate: '2023-08-15',
          description: 'BULAN SABIT MERAH MALAYSIA CAWANGAN SELANGOR',
          formUrls: [
            { id: 3, url: 'https://forms.gle/rfbBYvxGLepFSGPc7' },
          ],
          latitude: 3.1856896992217107,
          longitude: 101.63501319960115
        },
        {
          id: 4,
          name: "Blood Donation Hero 2.0 at Pavillion Bukit Jalil ",
          location: '2, Persiaran Jalil 8, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
          startDate: '2023-09-05',
          endDate: '2023-09-12',
          description: 'VEDO WELLNESS SDN BHD',
          formUrls: [
            { id: 4, url: 'https://forms.gle/ppf4aaGm453Cx6Gy9' },
          ],
          latitude: 3.05032462984594, 
          longitude: 101.6709347088716
        },
        {
          id: 5,
          name: "Donate & SaveALive at Sunway Pyramid ",
          location: '3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor',
          startDate: '2023-09-15',
          endDate: '2023-09-20',
          description: 'A-MED CLINIC SG CHUA KAJANG',
          formUrls: [
            { id: 5, url: 'https://forms.gle/UnBSFTCa58vzhPCE9' },
          ],
          latitude: 3.072168678003126, longitude: 101.60651263901032
        },
        {
          id: 6,
          name: "Donation Event Fair at IOI City Mall ",
          location: 'Management Office, Unit T2-3A-3 & Unit T2-3A-3A Level 3A, IOI City Tower Two, Lbh IRC, Ioi Resort, 62502 Putrajaya, Selangor',
          startDate: '2023-08-10',
          endDate: '2023-08-15',
          description: 'SUITE DERMA DARAH PUSPANITA, PUTRAJAYA',
          formUrls: [
            { id: 6, url: 'https://forms.gle/JSnk7ABbLpbfMWnm8' },
          ],
          latitude: 2.970786212821712, longitude: 101.7137324675521
        },
        {
          id: 7,
          name: "Donate & SaveALive 2.0 at Mid Valley ",
          location: 'Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
          startDate: '2023-08-22',
          endDate: '2023-08-25',
          description: 'PUSAT DARAH NEGARA DONATION SUITE MIDVALLEY',
          formUrls: [
            { id: 7, url: 'https://forms.gle/MrhdMDwWZrDPuVCC7' },
          ],
          latitude: 3.1178008669063475, longitude: 101.67829379439459
        },
        {
          id: 8,
          name: "Give Blood, Give Life at Sunway Pyramid ",
          location: '3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor',
          startDate: '2023-09-22',
          endDate: '2023-09-25',
          description: 'SUNWAY TCM CENTRE',
          formUrls: [
            { id: 8, url: 'https://forms.gle/k95mZQmoEUxSgdWX6' },
          ],
          latitude: 3.072423538426663, longitude: 101.60711634232759
        },
        {
          id: 9,
          name: "Blood Donation Drive at Taylor's University ",
          location: '1, Jln Taylors, 47500 Subang Jaya, Selangor',
          startDate: '2023-09-11',
          endDate: '2023-09-18',
          description: 'HOSPITAL SULTAN IDRIS SHAH',
          formUrls: [
            { id: 9, url: 'https://forms.gle/SakCZcrduTZRuQGa8' },
          ],
          latitude: 3.06484594571016, longitude: 101.61692563544386
        },
        {
          id: 10,
          name: "Donate & SaveALive 3.0 at Setia City Mall ",
          location: '7, Persiaran Setia Dagang, Setia Alam, 40170 Shah Alam, Selangor',
          startDate: '2023-10-11',
          endDate: '2023-10-18',
          description: 'BAHAGIAN HAL EHWAL ISLAM UiTM SHAH ALAM',
          formUrls: [
          { id: 10, url: 'https://forms.gle/XrkqcNnzeSU3bWXT7' },
          ],
          latitude: 3.1096774042592807, longitude: 101.46019634232759
        },
        {
          id: 11,
          name: "Blood Donation Drive at Monash University ",
          location: 'Jalan Lagoon Selatan, Bandar Sunway, 47500 Subang Jaya, Selangor',
          startDate: '2023-10-13',
          endDate: '2023-10-18',
          description: 'KOI TROPIKA MANAGEMENT CORPORATION',
          formUrls: [
            { id: 11, url: 'https://forms.gle/FzcWpoaZqUy8oedx8' },
          ],
          latitude: 3.065219035588563, longitude: 101.60088926556641
        },
        {
          id: 12,
          name: "Kempen Derma Darah at The Mines ",
          location: 'L1-07A, Jalan Dulang, Mines Wellness City, 43300 Seri Kembangan, Selangor',
          startDate: '2023-10-03',
          endDate: '2023-10-10',
          description: 'ALPS MEDICAL CENTRE',
          formUrls: [
            { id: 12, url: 'https://forms.gle/UWN12v8CkMamKEgq7' },
          ],
          latitude: 3.028803020070358, longitude: 101.71924683068966
        },
        {
          id: 13,
          name: "Project 'Share Your Love & Care' at Pavillion KL ",
          location: '168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
          startDate: '2023-12-11',
          endDate: '2023-12-16',
          description: 'QI SERVICES (M) SDN BHD',
          formUrls: [
            { id: 13, url: 'https://forms.gle/bcorf17t7nqPQSTr6' },
          ],
          latitude: 3.1491803090213537, longitude: 101.71339104232759
        },
        {
          id: 14,
          name: "Donate N Go at Pavillion KL ",
          location: '168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
          startDate: '2023-11-11',
          endDate: '2023-11-16',
          description: 'LIONS CLUB OF KUALA LUMPUR',
          formUrls: [
            { id: 14, url: 'https://forms.gle/FTUozNa4UDfp7L5B6' },
          ],
          latitude: 3.1491803090213537, longitude: 101.71339104232759
        },
        {
          id: 15,
          name: "Donate N Go 2.0 at Pavillion KL ",
          location: '168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
          startDate: '2023-12-05',
          endDate: '2023-12-10',
          description: 'LIONS CLUB OF AMPANG',
          formUrls: [
            { id: 15, url: 'https://forms.gle/cSZxT2ycooRb4vKX7' },
          ],
          latitude: 3.1491803090213537, longitude: 101.71339104232759
        },
        {
          id: 16,
          name: "Blood Fun Walk at IOI City Mall ",
          location: 'Management Office, Unit T2-3A-3 & Unit T2-3A-3A Level 3A, IOI City Tower Two, Lbh IRC, Ioi Resort, 62502 Putrajaya, Selangor',
          startDate: '2023-12-05',
          endDate: '2023-12-12',
          description: 'JUNIOR CHAMBER INTERNATIONAL PUCHONG (JCI)',
          formUrls: [
            { id: 16, url: 'https://forms.gle/oHXHXvsjex68p48Y9' },
          ],
          latitude: 2.970786212821712, longitude: 101.7137324675521
        },
        {
          id: 17,
          name: "Be a Lifesaver at Village Mall Kepong ",
          location: 'Lot GOL-01, Tesco Kepong, 3, Jalan 7A/62A, Bandar Menjalara, 52200 Kuala Lumpur',
          startDate: '2023-12-02',
          endDate: '2023-12-08',
          description: 'CHINESE METHODIST CHURCH KEPONG',
          formUrls: [
            { id: 17, url: 'https://forms.gle/fFEwsmKnD51GDSbd8' },
          ],
          latitude: 3.1929226997331814, longitude: 101.63277088650862
        },
        {
          id: 18,
          name: "Uniting for Blood Donation at Pavilion Bukit Jalil ",
          location: '2, Persiaran Jalil 8, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
          startDate: '2023-11-02',
          endDate: '2023-11-08',
          description: 'PERSATUAN KEBAJIKAN DAN SOSIAL SEJAHTERA MASYARAKAT MALAYSIA',
          formUrls: [
            { id: 18, url: 'https://forms.gle/YaevGxHXGB1gYHL99' },
          ],
          latitude: 3.05032462984594, longitude: 101.6709347088716
        },
        {
          id: 19,
          name: "Be a Hero, Donate Blood at Sunway University ",
          location: '5, Jalan Universiti, Bandar Sunway, 47500 Petaling Jaya, Selangor',
          startDate: '2023-11-02',
          endDate: '2023-11-05',
          description: 'UCOS LOGISTICS SDN BHD',
          formUrls: [
            { id: 19, url: 'https://forms.gle/h2N6j7djBRJG65Gk7' },
          ],
          latitude: 3.06743561256955, longitude: 101.60381954232759
        },
        {
          id: 20,
          name: "Blood Donation Journey at One Utama ",
          location: '1, Lebuh Bandar Utama, Bandar Utama, 47800 Petaling Jaya, Selangor',
          startDate: '2023-11-22',
          endDate: '2023-11-28',
          description: 'BANDAR SETIA ALAM SDN BHD (SP SETIA)',
          formUrls: [
            { id: 20, url: 'https://forms.gle/3pnyAvv99eYRbGSBA' },
          ],
          latitude: 3.148298221852806, longitude: 101.6164738865086
        },
      ],
    };
  },
  computed: {
    filteredCampaigns() {
      const searchQuery = this.searchQuery.toLowerCase();
      const searchDate = this.searchDate;
      return this.campaigns.filter((campaign) => {
        const locationMatch = campaign.location.toLowerCase().includes(searchQuery);
        const dateMatch = !this.searchDate || (this.searchDate >= campaign.startDate && this.searchDate <= campaign.endDate);
        return locationMatch && dateMatch;
      });
    },
    sortedCampaigns() {
      return this.filteredCampaigns.sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return new Date(a.startDate) - new Date(b.startDate);
        } else {
          return new Date(b.startDate) - new Date(a.startDate);
        }
      });
    },
    paginatedCampaigns() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.sortedCampaigns.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredCampaigns.length / this.pageSize);
    },
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    toggleFavorite(campaign) {
      campaign.isFavorite = !campaign.isFavorite;
      if (campaign.isFavorite) {
        this.favorites.push(campaign);
      } else {
        const index = this.favorites.findIndex(item => item.id === campaign.id);
        if (index !== -1) {
          this.favorites.splice(index, 1);
        }
      }
    },
    toggleFavoritesView() {
      this.showFavorites = !this.showFavorites;
    },
  },
};
</script>

<style>
.camptest {
text-align: left;
width: 100%;
}
.camptest .search {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border: 1px solid white;
border-radius: 7px;
height: 40px;
width: 99%;
margin-bottom: 7px;
}
.camptest .date {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border: 1px solid white;
border-radius: 7px;
height: 40px;
}
.camptest .button {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border: 1px solid white;
border-radius: 7px;
margin: 0 0 0 5px;
background-color: white;
}
.camptest ul {
padding-top: 0;;
}
.camptest li {
display: block;
padding: 10px 15px;
background-color: white;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
margin-bottom: 10px;
border-radius: 8px;
}
.camptest li:hover {
background-color: white;
}
.camptest h3 {
margin: 0;
font-size: 14px;
text-align: left;
}
.camptest p {
padding: 2px 0;
margin: 0;
font-size: small;
text-align: left;
}
.camptest .camporganizer {
font-size: smaller;
}
.camptest .data {
font-size: x-small;
color: rgb(128, 128, 128);
font-weight: normal;
}
.camptest .register {
background-color: red;
padding: 6px 20px;
color: white;
border-radius: 7px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
font-size: small;
font-weight: bold;
}
.camptest .title {
font-size: medium;
}
.camptest .pagination {
text-align: center;
}
</style>
  