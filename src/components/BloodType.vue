<template>
    <div class="bloodtype-table">
      <br>
      <img :src="imagePaths.bticon" alt="Blood Type Icon">
      <br>
      <b>Matching Blood Types</b>
      <p>A blood type is a classification of blood based on the presence or absence of antigens on the surface of red blood cells. 
        Human blood is divided into one of four main blood types: A, B, AB, and O, and is further divided into Rh+ or Rh-.</p>
      <div class="table-border">
        <table>
        <thead>
          <tr>
            <th class="left-column">Type</th>
            <th>You can give blood to</th>
            <th class="right-column">You can receive blood from</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
            <td class="left-column">{{ row.column1 }}</td>
            <td>{{ row.column2 }}</td>
            <td class="right-column">{{ row.column3 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import bticon from '../assets/bt-icon.png';
export default {
  data() {
    return {
      tableData: [
        { column1: 'A+', column2: 'A+, AB+', column3: 'A+, A-, O+, O-' },
        { column1: 'O+', column2: 'O+, A+, B+, AB+', column3: 'O+, O-' },
        { column1: 'B+', column2: 'B+, AB+', column3: 'B+, B-, O+, O-' },
        { column1: 'AB+', column2: 'AB+', column3: 'ALL BLOOD TYPES' },
        { column1: 'A-', column2: 'A+, A-, AB+, AB-', column3: 'A-, O-' },
        { column1: 'O-', column2: 'ALL BLOOD TYPES', column3: 'O-' },
        { column1: 'B-', column2: 'B+, B-, AB+, AB-', column3: 'B-, O-' },
        { column1: 'AB-', column2: 'AB+, AB-', column3: 'AB-, A-, B-, O-' }
        ],
        imagePaths: {
        bticon: bticon,
      },
    };
  }
};
</script>

<style>
.bloodtype-table {
border-radius: 5px;
margin: auto;
}
.bloodtype-table img {
height: 50px;
}
.bloodtype-table p {
font-size: small;
text-align: justify;
}
.bloodtype-table .table-border {
padding: 10px;
background-color: white;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.bloodtype-table table {
width: 100%;
border-collapse: collapse;
font-size: small;
}
.bloodtype-table th, td {
padding: 8px;
text-align: center;
}
.bloodtype-table th {
background-color: #e74c3c;
color: white;
font-weight: bold;
}
.bloodtype-table .left-column {
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
}
.bloodtype-table .right-column {
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
}
.bloodtype-table .odd-row {
background-color: #F2F2F2;
}
</style>