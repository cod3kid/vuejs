const app = Vue.createApp({
    data() {
        return {
            courseName:"Learn Vue JS",
            courseName2:"<h1>Blah</h1>",
            link:"https://www.vuejs.org"
        }
    },
    methods:{
        outputGoal(){
            return this.courseName
        }
    }
})

app.mount("#user-goal")