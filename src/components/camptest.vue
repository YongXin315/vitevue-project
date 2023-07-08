<template>
    <div class="camptest">
      <input class="search" type="text" v-model="searchQuery" placeholder="Search by location" />
      <label><i class="fa fa-filter"></i>&nbsp;&nbsp;</label>
      <input class="date" type="date" v-model="searchDate" />
  
      <ul>
        <li v-for="campaign in filteredCampaigns" :key="campaign.id">
            <h3>{{ campaign.name }}</h3>
            <p class="camporganizer">by {{ campaign.description }}</p>
            <p><span class="data">Address</span><br> {{ campaign.location }}</p>
            <p><span class="data">Date</span><br> {{ campaign.startDate }} to {{ campaign.endDate }}</p>
            <div style="width: 100%; text-align: right; margin-bottom: 3px;">
                <a class="register" href= "https://forms.gle/znWG6ZWZZXfAoLXN6" target="_blank">Register</a>
            </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        searchDate: '',
        campaigns: [
          {
            id: 1,
            name: "Blood Donation Week at Taylor's University",
            location: '1, Jln Taylors, 47500 Subang Jaya, Selangor',
            startDate: '2023-08-17',
            endDate: '2023-08-25',
            description: 'PUSAT DARAH NEGARA',
          },
          {
            id: 2,
            name: 'Blood Donation Week at IOI City Mall',
            location: 'City Sepang, 2AT-3A, Level 3, IOI City Mall, Lbh IRC, Ioi Resort, 62502 Putrajaya',
            startDate: '2023-07-22',
            endDate: '2023-07-29',
            description: 'PUSAT KOMUNITI ST JOHN AMBULANS MALAYSIA',
          },
          // Add more campaign data here
        ],
      };
    },
    computed: {
      filteredCampaigns() {
        return this.campaigns.filter((campaign) => {
          const locationMatch = campaign.location.toLowerCase().includes(this.searchQuery.toLowerCase());
          const dateMatch = !this.searchDate || (this.searchDate >= campaign.startDate && this.searchDate <= campaign.endDate);
  
          return locationMatch && dateMatch;
        });
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
height: 30px;
width: 99%;
margin-bottom: 7px;
}
.camptest .date {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border: 1px solid white;
border-radius: 7px;
height: 30px;
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
background-color: lightgrey;
padding: 6px 20px;
color: black;
border-radius: 7px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
font-size: small;
}
</style>
  