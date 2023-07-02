<template>
    <div class="perks">
      <img :src="imagePaths.privileges" alt="Privilege Icon">
      <br>
      <b>Malaysian Blood Donor Privileges</b>
      <p>There are many health benefits to donating blood and those who donate 
        blood in Malaysia can benefit from many medical perks offered by the Ministry of Health:</p>
      <div class="perks-table">
        <table>
          <thead>
            <tr>
              <th class="left-column">Donation Frequency</th>
              <th class="right-column">Medical Privileges</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
              <td class="left-column">{{ row.column1 }}</td>
              <td class="right-column">{{ row.column2 }}</td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import privileges from '../assets/perks-privilege.png';
export default {
  data() {
    return {
      tableData: [
        { column1: '1 time', column2: 'Free outpatient treatment and medical treatment (excluding X-ray and surgical charges) and second class wards for a period of * 4 months.' },
        { column1: '2 times (within 12 months)', column2: 'Free Hepatitis B preventive injection.' },
        { column1: '2 ~ 5 times', column2: 'Free outpatient treatment and medical treatment and second class wards for a period of * 4 months.' },
        { column1: '6 ~ 10 times', column2: 'Free * year outpatient treatment and second class medical treatment for a * 6 months period.' },
        { column1: '11 ~ 15 times', column2: 'Free * 2 year outpatient treatment and second class medical treatment for a * 6 month period.' },
        { column1: '16 ~ 20 times', column2: 'Free outpatient treatment and medical treatment and second class wards for a * 2 year period.' },
        { column1: '21 ~ 30 times', column2: 'Free outpatient treatment and medical treatment and second class wards for a period of * 3 years.' },
        { column1: '31 ~ 40 times', column2: 'Free outpatient treatment and medical treatment and first class wards for a period of * 4 years.' },
        { column1: '41 ~ 50 times', column2: 'Free outpatient treatment and medical treatment and first class wards for a period of * 6 years.' },
        { column1: 'Over 50 times (for "Whole Blood") and Over 150 times (for aferesis donors)', column2: 'Free outpatient treatment and first-class medical treatment and wards for 10 years and second-class wards of life after 10 years in first-class ward.' },
      ],
      imagePaths: {
        privileges: privileges,
      },
    };
  }
};
</script>

<style>
.perks p {
  font-size: small;
  text-align: justify;
}

.perks img {
  height: 50px;
}
.perks-table {
padding: 10px;
background-color: white;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.perks-table table {
  width: 100%;
  border-collapse: collapse;
}

.perks-table th, td {
  padding: 8px;
  font-size: small;
}

.perks-table th {
  background-color: red;
  color: white;
  font-weight: bold;
  text-align: left;
}

.perks-table .odd-row {
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}

.perks-table .left-column {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  text-align: left;
}

.perks-table .right-column {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: left;
}
</style>