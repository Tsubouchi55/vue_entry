Vue.component('user-form', {
  template: `
  <form v-on:submit.prevent="doAdd">
    <label for="new-user">Add a user</label>
    <input type="text" ref="newName" id="new-user">
    <button>Add</button>
  </form>
  `,
  methods: {
    doAdd: function() {
      this.$emit('add', this.$refs.newName.value)
    }
  }
});

Vue.component('user-table', {
  props: ['user'],
  template: `
    <tr>
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
    </tr>
    `
})

var appForm = new Vue({
  el: "#app",
  data: {
    users: [
      { id: "001", name: "Sato" },
      { id: "002", name: "Tanaka" },
      { id: "003", name: "Suzuki" },
    ]
  },
  methods: {
    handleAdd: function(newName) {
      var newId = this.users.length + 1;
      if (!newName.length) {
        return;
      }
      if (!this.users.some((e) => e.name == newName)) {
        this.users.push ({
          id: ("000" + newId).slice(-3),
          name: newName
        });
      }
    }
  }
})