const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num
    },
    reduce(num) {
      this.counter -= num
    },
    setName(event, lastName) {
      this.name = event.target.value 
    },
    confirmName() {
      this.confirmedName = this.name
    }
  }

});

app.mount('#events');
