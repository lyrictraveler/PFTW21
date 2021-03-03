var myTodos = [
  {
    "userId": 1,
    "id": 1,
    "title": "tidy bedroom",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "mop kitchen floor",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "pick up studio",
    "completed": true
  }
];
var vm = new Vue({
    el: "#app",
    data: {
        todos: myTodos
    }
});
