<template>
    <div class="faq">
      <img :src="imagePaths.faqicon" alt="FAQ Icon">
      <br>
      <b>Frequently Asked Questions</b><br><br>
      <div>
        <input class="search" type="text" v-model="searchQuery" placeholder="Search your question">
          <div v-for="item in filteredItems" :key="item.id" class="faqborder">
            <div class="title" :class="{'open':item.showContent}" @click="toggleContent(item.id)">
                {{ item.title }}
                <span class="toggleIcon">
                  {{ item.showContent ? '-' : '+' }}
                </span>
            </div>
            <div class="content-edu" v-if="item.showContent">
                {{ item.content }}
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import faqicon from '../assets/faq-icon.png';
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "1. What should I do if I need to claim my privilege as a blood donor?",
          content: "Kindly proceed to the nearest blood bank for verification in order to claim your privilege.",
          showContent: false
        },
        {
          id: 2,
          title: "2. Why should I donate blood?",
          content: "Every day blood is needed to save lives. Blood may be needed for surgery, accident victims or to treat patients with leukemia, cancer, heart disease, liver disease and hemophilia. Your contribution could save a life.",
          showContent: false
        },
        {
          id: 3,
          title: "3. Am I eligible to donate blood?",
          content: "Yes, if you are over 17 years old (age verification required) and weight more than 45kg. In general, taking medication is not an obstacle to donating blood because acceptance and rejection are based on medical reports. If you are taking any medication, please inform before donating blood.",
          showContent: false
        },
        {
          id: 4,
          title: "4. Am I healthy enough to donate blood?",
          content: "You must be healthy enough to donate blood. Your health and safety is very important to us. You will be asked to fill up a blood donation questionnaire where your medical history will be asked. Blood pressure and a drop of blood will be taken for a hemoglobin test. All information provided by you is confidential.",
          showContent: false
        },
        {
          id: 5,
          title: "5. How long does it take to donate blood?",
          content: "The process of donating blood will take between 7-10 minutes, but you are advised to be at the blood collection site for approximately one hour.",
          showContent: false
        },
        {
          id: 6,
          title: "6. Does the needle hurt?",
          content: "You only feel a little pain when the needle is inserted and nothing after.",
          showContent: false
        },
        {
          id: 7,
          title: "7. How much blood will be taken?",
          content: "A total of 450ml, which is less than 1 pint (586ml). Adults usually have about 5 liters (10-12 pints) of blood in the body.",
          showContent: false
        },
        {
          id: 8,
          title: "8. How does it feel after donating blood?",
          content: "Most people feel comfortable after donating blood. You are advised to have a light meal before donating blood.",
          showContent: false
        },
        {
          id: 9,
          title: "9. Can I do sports after donating blood?",
          content: "Yes. Just avoid doing heavy activities for 5 hours after donating blood. Drink plenty of water within 24 hours.",
          showContent: false
        },
        {
          id: 10,
          title: "10. How long does it take to replace the donated blood?",
          content: "Plasma is replaced within 24 hours. You need to drink 4 glasses of water without alcohol and do not do heavy work with your hands for a period of 5 hours. Red blood takes 4-8 weeks to be replaced and you can donate again after that.",
          showContent: false
        },
        {
          id: 11,
          title: "11. What will be done to the donated blood?",
          content: "Your blood will be tested to determine blood group, viral infwhich is used in 22 blood collection centers nationwideections such as syphilis, hepatitis (B & C) and AIDS (HIV). Then, stored for patient use. Blood can also be separated into several blood components and can be used to treat more than one patient.",
          showContent: false
        }
      ],
      imagePaths: {
        faqicon: faqicon,
      },
      searchQuery: '',
    };
  },
  computed: {
    filteredItems() {
      // Filter the items based on the search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.items.filter(item => item.title.toLowerCase().includes(query));
      }
      // If no search query, return all items
      return this.items;
    }
  },
  methods: {
    toggleContent(itemId) {
      this.items.forEach(item => {
        if (item.id === itemId) {
          item.showContent = !item.showContent;
        } else {
          item.showContent = false;
        }
      });
    }
  }
};
</script>

<style>
.faq img {
height: 50px;
}
.faq .search {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border: 1px solid white;
border-radius: 7px;
height: 30px;
width: 99%;
margin-bottom: 7px;
}
.faq .faqborder {
padding: 5px 0;
}
.faq .toggleIcon {
font-size: 20px;
padding-left: 5px;
}
.faq .title.open {
color: red;
}
.faq .title {
padding: 6px 10px;
border: 1px solid lightgrey;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
font-size: small;
text-align: left;
}
.faq .content-edu {
padding: 10px;
border: 1px solid lightgrey;
text-align: justify;
font-size: small;
background-color: white;
}
</style>