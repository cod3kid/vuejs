<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Clan Name:</strong>
        {{ clanName }}
      </li>
      <li>
        <strong>Rank:</strong>
        {{ rank }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:[
  //   'name',
  //   'clanName',
  //   'rank'
  // ],

  props: {
    name: {
      type: String,
      required: true,
    },
    clanName: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>