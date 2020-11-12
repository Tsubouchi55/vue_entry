Vue.component('user-item', {
  props: ['user'],
  template: '<li>{{ user.name }}</li>'
})

new Vue({
  el: "#app-user",
  data: {
    users: [
      {id: 001, name: "AAA"},
      {id: 002, name: "BBB"},
      {id: 003, name: "CCC"},
    ]
  }
});

Vue.component('user-table', {
  props: ['user'],
  template: '\
    <tr>\
      <td>{{ user.id }}</td>\
      <td>{{ user.name }}</td>\
    </tr>\
    '
})

new Vue({
  el: "#app-table",
  data: {
    users: [
      {id: 001, name: "ABC"},
      {id: 002, name: "DEF"},
      {id: 003, name: "GHI"},
    ]
  }
});