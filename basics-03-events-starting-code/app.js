const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      return this.counter = this.counter + num;
    },
    remove(num) {
      return this.counter = this.counter - num;
    },
    setName(event, lastName) {
      return this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
