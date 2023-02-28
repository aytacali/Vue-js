const app = Vue.createApp({

  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
      if (value < 0) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   }
    //   this.fullName = this.name + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   }
    //   this.fullName = this.name + ' ' + value;
    // }
  },

  computed: {
    fullName() {
      console.log('Running again!!!');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    outputFullName() {
      console.log('Running again!!!');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Aliyeva';
    }
  }
});

app.mount('#events');
