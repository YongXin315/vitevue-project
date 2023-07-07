<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="content">
      <label for="name">Hospital Name:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="phone" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <small>example@example.com</small>

      <p style="font-weight:bold">Location</p>
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

      <p style="font-weight:bold">Campaign</p>
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
    </div>
  </form>
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

<style scoped>
.form {
  border: 1px solid #ccc;
  padding: 20px;
  width: 95%;
  margin: 0 auto;
  font-size: 18px;
}

.content {
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  resize: none;
}

small {
  display: block;
  margin-top: -10px;
  margin-bottom: 10px;
  color: #777;
}

.button {
  text-align: right;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

</style>