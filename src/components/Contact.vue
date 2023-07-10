<template>
    <div class="contact">
        <h2>Contact Us</h2>
        <p class="description">We'd love to get in touch and learn more about you. 
        So, send us a message and we'll reply as fast as we can.</p>
        <div class="formdiv">
            <form @submit.prevent="submitForm" class="form">
                <label for="name2">Name:</label>
                <input type="text" placeholder="Name" id="name2" v-model="name2" required>

                <label for="phone2">Phone:</label>
                <input type="tel" placeholder="Phone" id="phone2" v-model="phone2" required>

                <label for="email2">Email:</label>
                <input type="email" placeholder="Email" id="email2" v-model="email2" required>
                <small>example@example.com</small>

                <label for="message2">Question:</label>
                <textarea id="message2" placeholder="Write your qeustions here.." v-model="message2"></textarea>

                <div class="button">
                <button type="submit" id="submit">Submit</button>
                </div>
                <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
            </form>
        </div>
    </div>
</template>

<script>
import { getFirestore, setDoc, doc } from 'firebase/firestore';

export default {
data() {
    return {
    name2: '',
    phone2: '',
    email2: '',
    message2: '',
    successMessage: '',
    };
},
methods: {
    submitForm() {
    const userDocument = {
        Name2: this.name2,
        Phone2: this.phone2,
        Email2: this.email2,
        Message2: this.message2,
    };

    const db = getFirestore();
    setDoc(doc(db, "contact", userDocument.Name2), userDocument)
        .then(() => {
        // Reset form fields on successful submission
        this.name2 = '';
        this.phone2 = '';
        this.email2 = '';
        this.message2 = '';
        this.successMessage = 'Your message sent successfully! We will reply to you within 2 to 3 days.';
        })
        .catch((error) => {
        console.error('Error writing document: ', error);
        });
    },
},
};
</script>

<style>
.contact {
padding: 0;
width: 100%;
}
.contact h2 {
font-size: medium;
text-align: left;
}
.contact .description {
font-size: small;
text-align: justify;
color: grey;
}
.contact .formdiv {
padding: 10px 15px;
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.contact .form {
font-size: 18px;
font-size: small;
text-align: left;
padding: 10px;
padding-left: 0;
}
.contact label {
font-weight: normal;
}
.contact .form input {
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
.contact .form ::placeholder {
font-style: italic;
font-size: smaller;
}
.contact .form textarea {
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
.contact small {
display: block;
margin-top: -10px;
margin-bottom: 10px;
color: #777;
}
.contact .button {
text-align: center;
}
.contact button {
width: 50%;
background-color: #e74c3c;
color: #fff;
margin-top: 10px;
padding: 10px 25px;
border: none;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.contact .success-message {
color: green;
margin-top: 10px;
text-align: center;
}
</style>