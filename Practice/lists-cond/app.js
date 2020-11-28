const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: '',
      shinobi:{
        name:"Itachi Uchiha",
        clan:"Uchiha",
        village:"Leaf Village",
        rank:"S Rank"
      }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal)
      this.enteredGoal = ''
    },
    deleteGoal(index) {
      this.goals.splice(index,1)
    }
  }
});

app.mount('#user-goals');
