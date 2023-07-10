<template>
    <div class="profile">
        <div v-if="user">
            <h2>Profile
                <span style="float: right;">
                    <button v-if="!editing" @click="editUser"><i class='fas fa-edit'></i></button>
                    <button v-if="editing" @click="updateUser"><i class='fas fa-save'></i></button>
                    <button v-if="editing" @click="cancelEdit"><i class="fa fa-close"></i></button>
                </span>
            </h2>
            <table class="table" style='width:100%;'>
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>
                        <input v-if="editing" type="text" v-model="editedUser.username">
                        <span v-else>{{ user.username }}</span>
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>{{ user.email }}</td>
                </tr>
                <tr>
                    <th>Mobile Number</th>
                </tr>
                <tr>
                    <td>
                        <select v-if="editing" v-model="editedUser.countryCode">
                            <option value="+60">+60</option>
                            <option value="+65">+65</option>
                            <option value="+62">+62</option>
                            <option value="+880">+880</option>
                            <option value="+95">+95</option>
                            <option value="+977">+977</option>
                            <option value="+91">+91</option>
                        </select>
                        <input v-if="editing" type="number" v-model="editedUser.phone" maxlength="10">
                        <span v-else>{{ user.countryCode }}{{ user.phone }}</span>
                    </td>
                </tr>
                <tr>
                    <th>Gender</th>
                </tr>
                <tr>
                    <td>
                        <select v-if="editing" v-model="editedUser.gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <span v-else>{{ user.gender }}</span>
                    </td>
                </tr>
                <tr>
                    <th>Date of birth</th>
                </tr>
                <tr>
                    <td>
                        <input v-if="editing" type="date" v-model="editedUser.dob">
                        <span v-else>{{ user.dob }}</span>
                    </td>
                </tr>
            </table>
            <br>
            <table class="table" style='width:100%;'>
                <tr>
                    <th style="text-align:left;">Health Records
                    </th>
                </tr>
                <tr>
                    <th>Weight</th>
                </tr>
                <tr v-if="editing">
                    <td>
                        <input type="number" v-model="editedUser.weight">
                    </td>
                </tr>
                <tr v-else>
                    <td>
                        <span>{{ user.weight }} kg</span>
                    </td>
                </tr>
                <tr>
                    <th>Height</th>
                </tr>
                <tr v-if="editing">
                    <td>
                        <input type="number" v-model="editedUser.height">
                    </td>
                </tr>
                <tr v-else>
                    <td><span>{{ user.height }} cm</span>
                    </td>
                </tr>
                <tr>
                    <th>BMI</th>
                </tr>
                <tr v-if="editing">
                    <td>
                        <span>{{ calculatedBmi }}</span>
                    </td>
                </tr>
                <tr v-else>
                    <td>
                        <span>{{ user.calculatedBmi }}</span>
                    </td>
                </tr>
            </table>
            <p class="success-message-holder">
                <span v-if="successMessage" class="success-message">Profile updated successfully!</span>
            </p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, nextTick, computed } from 'vue';
import { db, auth } from '../firebase/init.js';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
export default {
    setup() {
        const user = ref(null);
        const editing = ref(false);
        const editedUser = ref(null);
        const successMessage = ref(false);
        
        onMounted(async () => {
            console.log('Component has been mounted');
            try {
                const userDoc = doc(db, 'SignUpDetails', auth.currentUser.uid);
                const userSnapshot = await getDoc(userDoc);
                if (userSnapshot.exists()) {
                    user.value = { id: userSnapshot.id, ...userSnapshot.data() };
                    editedUser.value = { ...user.value };
                } else {
                    console.log('No such user!');
                }
            } catch (error) {
                console.log('Error fetching user:', error);
            }
        });

        const editUser = () => {
            editing.value = true;
            successMessage.value = false;
            console.log('Editing mode activated.');
        };
        const cancelEdit = () => {
            editing.value = false;
            editedUser.value = { ...user.value };
            console.log('Editing mode cancelled.');
        };
        const updateUser = async () => {
            try {
                const userDoc = doc(db, 'SignUpDetails', auth.currentUser.uid);
                editedUser.value.calculatedBmi= calculatedBmi.value;
                await updateDoc(userDoc, editedUser.value);
                user.value = { ...editedUser.value };
             
                editing.value = false;
                successMessage.value = true; ``
                await nextTick();
                setTimeout(() => {
                    successMessage.value = false;
                }, 3000);


            } catch (error) {
                console.log('Error updating user:', error);
            }
        };

        const calculatedBmi= computed(() =>{
            if(editedUser.value && editedUser.value.height && editedUser.value.weight){
                const heightcm= editedUser.value.height / 100;
                return (editedUser.value.weight / (heightcm ** 2)).toFixed(2);
            }
            return 'Not available';

        });
        
        return { user, editing, editedUser, editUser, cancelEdit, updateUser, successMessage, calculatedBmi };
    },
};
</script>
  
<style>
.profile h2 {
font-size: medium;
text-align: left;
}
.profile .success-message-holder {
height: 20px;
font-size: small;
margin-bottom: 10px;
}
.profile .success-message {
animation: appear 1s ease-out forwards;
visibility: hidden;
}
@keyframes appear {
0% {
opacity: 0;
visibility: hidden;
}
1% {
opacity: 0;
visibility: visible;
}
100% {
opacity: 1;
visibility: visible;
}
}
.profile .table {
padding: 15px;
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.profile td {
background-color: #F2F2F2;
border: 1px solid #F2F2F2;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 5px;
text-align: left;
border-radius: 5px;
}
.profile th {
text-align: left;
font-size: small;
}
.profile input {
border: none;
background-color: transparent;
}
.profile select {
border: none;
background-color: transparent;
}
.profile button {
padding: 4px 15px;
margin-left: 10px;
background-color: white;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
  