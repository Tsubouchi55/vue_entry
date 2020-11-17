Vue.component('input-form', {
  props: ['form'],
  template: `
  <form>
    <input type="text" ref="newName">
    <button v-on:click="doAdd">Add</button>
  </form>
  `,
  methods: {
    doAdd: function() {
      this.$emit('add', this.$refs.newName.value)
    }
  }
});

var appForm = new Vue({
  el: "#app-form",
  methods: {
    handleAdd: function(newName) {
      alert("イベントキャッチ")
      // var newName = this.$refs.newName.value;
      var newId = appTable.users.length + 1;
      if (!newName.length) {
        return;
      }
      if (!appTable.users.some((e) => e.name == newName)) {
        appTable.users.push ({
          id: (000 + newId).slice(-3),
          name: newName
        });
      }
    }
  }
})

Vue.component('user-table', {
  props: ['user'],
  template: `
    <tr>
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
    </tr>
    `
})

var appTable = new Vue({
  el: "#app-table",
  data: {
    users: [
      {id: 001, name: "Sato"},
      {id: 002, name: "Tanaka"},
      {id: 003, name: "Suzuki"},
    ]
  }
});