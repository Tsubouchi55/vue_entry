Vue.use(VTooltip);

var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.js 入門",
  },
});

var app1 = new Vue({
  el: "#app-1",
  data: {
    seen: true,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    users: [
      { id: "001", name: "Tanaka" },
      { id: "002", name: "Tamura" },
      { id: "003", name: "Nakata" },
    ],
    error: false,
  },

  methods: {
    doAdd: function () {
      var newName = this.$refs.newName;
      var usersLen = this.users.length + 1;
      if (!newName.value.length) {
        return;
      }
      if (!this.users.some((e) => e.name == newName.value)) {
        this.users.push({
          id: ("000" + usersLen).slice(-3),
          name: newName.value,
        });
        this.error = false;
        newName.value = "";
      } else {
        this.error = true;
      }
    },
  },
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

new Vue({
  el: "#app-3",
  data: {
    groceryList: [
      { id: 0, text: "meet" },
      { id: 1, text: "fish" },
      { id: 2, text: "egg" },
    ],
  },
});

Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

new Vue({ el: "#component-demo" });

Vue.component("blog-post", {
  props: ["title"],
  template: "<h3>{{ title }}</h3>",
});

new Vue({ el: "#component-prop" });
