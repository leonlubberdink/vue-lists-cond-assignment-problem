const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: "",
      listIsVisible: true,
    };
  },
  computed: {
    buttonText() {
      return this.listIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleList() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
});

app.mount("#assignment");
