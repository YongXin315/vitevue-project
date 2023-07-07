<template>
  <div class="organization">
    <h2>Create a Campaign</h2>
    <p class="description">
      Fill in the form below to create a new blood donation campaign. Provide detailed information about your campaign and its objectives. 
      This will help users understand the purpose and goals of your campaign. Make sure to fill in all the required fields.
    </p>
    <form @submit.prevent="submitForm" class="form">
        <label for="name">Hospital Name:</label>
        <input type="text" id="name" v-model="name" required>

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="phone" required>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <small>example@example.com</small>

        <p style="font-weight:bold; margin: 0;">Location</p>
        <label for="street">Street:</label>
        <input type="text" id="street" v-model="street" required>

        <label for="city">City:</label>
        <input type="text" id="city" v-model="city" required>

        <label for="state">State:</label>
        <input type="text" id="state" v-model="state" required>

        <label for="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" v-model="postalcode" required>

        <label for="message">Message:</label>
        <textarea id="message" v-model="message"></textarea>

        <p style="font-weight:bold; margin: 0;">Campaign</p>
        <label for="campname">Camp Name:</label>
        <input type="text" id="campname" v-model="campname" required>

        <label for="info">Camp Information:</label>
        <input type="text" id="info" v-model="info" required>

        <label for="startDate">Start Date of the Campaign:</label>
        <input type="date" id="startDate" v-model="startDate" required>

        <label for="endDate">End Date of the Campaign:</label>
        <input type="date" id="endDate" v-model="endDate" required>

        <label for="time1">Time Start:</label>
        <input type="time" id="time1" v-model="time1" required>

        <label for="time2">Time End:</label>
        <input type="time" id="time2" v-model="time2" required>

        <label for="venue">Campaign Venue:</label>
        <input type="text" id="venue" v-model="venue" required>

        <div class="button">
          <button type="submit" id="submit">Submit</button>
        </div>
    </form>
  </div>
</template>


  <script>
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      street: '',
      city: '',
      state: '',
      postalcode: '',
      message: '',
      campname: '',
      info: '',
      startDate: '',
      endDate: '',
      time1: '',
      time2: '',
      venue: '',
    };
  },
  methods: {
    async submitForm() {
      const userDocument = {
        Name: this.name,
        Phone: this.phone,
        Email: this.email,
        Street: this.street,
        City: this.city,
        State: this.state,
        PostalCode: this.postalcode,
        Message: this.message,
        CampName: this.campname,
        Information: this.info,
        StartDate: this.startDate,
        EndDate: this.endDate,
        StartTime: this.time1,
        EndTime: this.time2,
        Venue: this.venue,
      };

      try {
        const db = getFirestore();
        await addDoc(collection(db, "Apply2"), userDocument);
        // Reset form fields on successful submission
        this.name = '';
        this.phone = '';
        this.email = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.postalcode = '';
        this.message = '';
        this.campname = '';
        this.info = '';
        this.startDate = '';
        this.endDate = '';
        this.time1 = '';
        this.time2 = '';
        this.venue = '';
      } catch (error) {
        console.error('Error writing document: ', error);
      }
    },
  },
};
</script>

<style>
.organization {
padding: 0;
width: 100%;
}
.organization h2 {
font-size: medium;
text-align: left;
}
.organization .description {
font-size: small;
text-align: justify;
color: grey;
}
.organization .form {
  font-size: 18px;
  font-size: small;
  text-align: left;
  padding: 10px;
  padding-left: 0;
}

.organization label {
  font-weight: normal;
}

.organization .form input {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #F2F2F2;
  height: 28px;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  resize: none;
  font-size: small;
  border-radius: 6px;
}

.organization .form textarea {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #F2F2F2;
  height: 70px;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  resize: none;
  font-size: small;
  border-radius: 6px;
}

.organization small {
  display: block;
  margin-top: -10px;
  margin-bottom: 10px;
  color: #777;
}

.organization .button {
text-align: center;
}

.organization button {
  width: 50%;
  background-color: red;
  color: #fff;
  margin: 10px;
  padding: 10px 25px;
  border: none;
  cursor: pointer;
}

</style>