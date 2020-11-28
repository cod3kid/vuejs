const app = Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false
        };
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxAselected = true
            } else if (box === 'B') {
                this.boxBselected = true
            }
        },
    }

});

app.mount('#styling');
