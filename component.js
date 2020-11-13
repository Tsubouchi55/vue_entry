Vue.component('user-table', {
  props: ['user'],
  template: '\
    <tr>\
      <td>{{ user.id }}</td>\
      <td>{{ user.name }}</td>\
    </tr>\
    '
})

var apptable = new Vue({
  el: "#app-table",
  data: {
    users: [
      {id: 001, name: "Sato"},
      {id: 002, name: "Tanaka"},
      {id: 003, name: "Suzuki"},
    ]
  }
});

Vue.component('input-form', {
  props: ['form'],
  template: '\
  <form>\
    <input type="text" ref="newName">\
    <button v-on:click="doAdd">Add</button>\
  </form>\
    '
});

var appform = new Vue({
  el: "#app-form",

  methods: {
    doAdd: function() {
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
  }
})