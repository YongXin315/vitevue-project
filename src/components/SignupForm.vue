<template>
  <form @submit.prevent="signUp" class="signup">
    <div class="signupform">
      <input type="text" class="input" placeholder="Name" required v-model="username" style="border-radius: 10px;"><br>
      <input type="email" class="input" placeholder="Email" required v-model="email" style="border-radius: 10px;"><br>
      <input type="password" class="input" placeholder="Password" required v-model="password"
        style="border-radius: 10px;"><br>
      <div class="phone-input">
        <select v-model="countryCode" class="input" type="countryCode" style="border-radius: 10px; width:50px; " required>
          <option value="+60">+60</option>
          <option value="+65">+65</option>
          <option value="+62">+62</option>
          <option value="+880">+880</option>
          <option value="+95">+95</option>
          <option value="+977">+977</option>
          <option value="+91">+91</option>
        </select>
        <input type="tel" class="input" placeholder="Phone Number" required v-model="phone"
          style="border-radius: 10px; width:110px">
      </div>

      <div class="text">
        <span style='font-size:15px;'>DOB: </span>

        <input type="date" class="input" placeholder="Date of Birth" required v-model="dob"
          style="border-radius: 10px;"><br>
      </div>
      <div>
     
        <input type="radio" id="male" value="Male" v-model="gender">
        <label for="male" style="font-size: 14px;"> Male</label> &nbsp; &nbsp;

        <input type="radio" id="female" value="Female" v-model="gender">
        <label for="female" style="font-size:14px;"> Female</label>
      </div>

      <button class="signupbut" style="font-weight:bold;">Sign Up</button>
    </div>
  </form>

  <div v-if="notification" class="notification">
    {{ notification }}
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { auth } from '../firebase/init.js'


export default {

  emits: ['loggedIn'],
  data() {
    return {
      username: '',
      email: '',
      password: '',
      countryCode: '',
      phone: '',
      gender: '',
      dob: '',
      notification: ''
    }
  },
  methods: {
    signUp() {
      const punctuation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (this.password.length <= 7 || !punctuation.test(this.password)) {
        this.notification = 'The password must be more than 7 characters long and at least one punctuation such as @#$%.';
        return;
      }
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: this.username
          })
            .then(() => {
              const userDocument = {
                username: this.username,
                email: this.email,
                countryCode: this.countryCode,
                phone: this.phone,
                gender: this.gender,
                dob: this.dob
              }

              const db = getFirestore();
              setDoc(doc(db, 'SignUpDetails', userCredential.user.uid), userDocument);
            })
            .then(() => {
              this.$emit('loggedIn')
            })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              this.notification = 'This email is already registered';
              break;

            case 'auth/invalid-email':
              this.notification = 'This email address is not valid.';
              break;
            case 'auth/operation-not-allowed':
              this.notification = 'Email/Password accounts are not enabled';
              break;
            case 'auth/weak-password':
              this.notification = 'The password is too weak,please include at least punctuation.';

              break;
            default:
              console.log(error.message);
          }
        });
    }
  }
}
</script>

<style>
.signup {
  text-align: center;
  padding: 10px;
}

.input {
  margin-bottom: 10px;
  padding: 5px;
}

.input::placeholder {
  font-family: Arial, Helvetica, sans-serif;
}

.signupbut {
  border-radius: 10px;
  padding: 5px;
  border: 1px solid transparent;
  width: 155px;
}

.notification {
  background-color: #e74c3c;
  text-align: center;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
