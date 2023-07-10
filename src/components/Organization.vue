<template>
  <div class="organization">
    <h2>Create a Campaign</h2>
    <p class="description">
      We welcome collaboration with any organization to do blood donation campaign.<br>
      Fill in the form below to create a new blood donation campaign. Provide detailed information about your campaign and its objectives. 
      This will help users understand the purpose and goals of your campaign. Make sure to fill in all the required fields.
    </p>
    <div class="formdiv">
    <form @submit.prevent="submitForm" class="form">
        <label for="name">Hospital Name:</label>
        <input type="text" placeholder="Hospital Name" id="name" v-model="name" required>
        <br>
        <label for="phone">Phone:</label>
        <input type="tel" placeholder="Phone" id="phone" v-model="phone" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" placeholder="Email" id="email" v-model="email" required>
        <small>example@example.com</small>
        <br>
        <p style="font-weight:bold; margin: 0;">Location</p>
        <label for="street">Street:</label>
        <input type="text" placeholder="Street" id="street" v-model="street" required>
        <br>
        <label for="city">City:</label>
        <input type="text" placeholder="City" id="city" v-model="city" required>
        <br>
        <label for="state">State:</label>
        <input type="text" placeholder="State" id="state" v-model="state" required>
        <br>
        <label for="postalCode">Postal Code:</label>
        <input type="text" placeholder="Postal Code" id="postalCode" v-model="postalcode" required>
        <br>
        <label for="message">Message:</label>
        <textarea id="message" placeholder="Leave your message here.." v-model="message"></textarea>
        <br>
        <p style="font-weight:bold; margin: 0;">Campaign</p>
        <label for="campname">Camp Name:</label>
        <input type="text" placeholder="Camp Name" id="campname" v-model="campname" required>
        <br>
        <label for="info">Camp Information:</label>
        <input type="text" placeholder="Camp Information" id="info" v-model="info" required>
        <br>
        <label for="startDate">Start Date of the Campaign:</label>
        <input type="date" id="startDate" v-model="startDate" required>
        <br>
        <label for="endDate">End Date of the Campaign:</label>
        <input type="date" id="endDate" v-model="endDate" required>
        <br>
        <label for="time1">Time Start:</label>
        <input type="time" id="time1" v-model="time1" required>
        <br>
        <label for="time2">Time End:</label>
        <input type="time" id="time2" v-model="time2" required>
        <br>
        <label for="venue">Campaign Venue:</label>
        <input type="text" placeholder="Full address" id="venue" v-model="venue" required>
        <br>
        <div class="button">
          <button type="submit" id="submit">Submit</button>
        </div>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </div>
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
      successMessage: '',
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
        this.successMessage = 'Form submitted successfully!';
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
.organization .formdiv {
padding: 10px 15px;
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
margin-bottom: 25px;
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
border: 1px solid #f0f0f0;
height: 28px;
width: 100%;
padding: 5px;
margin-bottom: 10px;
resize: none;
font-size: small;
border-radius: 6px;
background-color: #f0f0f0;
}
.organization .form ::placeholder {
font-style: italic;
font-size: smaller;
}
.organization .form textarea {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border: 1px solid #f0f0f0;
height: 70px;
width: 100%;
padding: 5px;
margin-bottom: 10px;
resize: none;
font-size: small;
border-radius: 10px;
background-color: #f0f0f0;
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
background-color: #e74c3c;
color: #fff;
margin-top: 10px;
padding: 10px 25px;
border: none;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.organization .success-message {
color: green;
margin-top: 10px;
text-align: center;
}
</style>