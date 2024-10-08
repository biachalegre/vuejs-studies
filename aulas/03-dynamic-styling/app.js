const app = Vue.createApp({
  data() {
    return {
      selectedBoxA: false,
      selectedBoxB: false,
      selectedBoxC: false,
    }
  },
  computed: {
    boxAClasses() {
      return { active: this.selectedBoxA };
    },
    boxBClasses() {
      return { active: this.selectedBoxB };
    },
    boxCClasses() {
      return { active: this.selectedBoxC };
    },
  },
  methods: {
    // selectedBox(box) {
    //   if (box === 'A') {
    //     this.selectedBoxA = true;
    //   } else if (box === 'B') {
    //     this.selectedBoxB = true;
    //   } else if (box === 'C') {
    //     this.selectedBoxC = true;
    //   }
    // },
    selectedBox(box) {
      if (box === 'A') {
        this.selectedBoxA = !this.selectedBoxA;
      } else if (box === 'B') {
        this.selectedBoxB = !this.selectedBoxB;
      } else if (box === 'C') {
        this.selectedBoxC = !this.selectedBoxC;
      }
    },
  }
});

app.mount('#styling');