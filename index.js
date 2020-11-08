Vue.use(VTooltip);

var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.js 入門",
    seen: true,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
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
      if(!newName.value.length){
        return
      }
      if (!this.users.some(e => e.name == newName.value)) {
        this.users.push({
          id: ( '000' + usersLen ).slice( -3 ),
          name: newName.value,
        });
        this.error = false;
        newName.value = "";
      } else {
        this.error = true;
        newName.value = "";
        return
      }
      
    },
  },
});
