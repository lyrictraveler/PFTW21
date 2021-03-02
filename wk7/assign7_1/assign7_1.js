/* eslint-disable no-undef */
/* //This is inline style
var vm = new Vue({
  el: "#app",
  data: {
    baseStyle: {
      background: "red",
      border: "1px solid black",
    },
    overRideStyle: {
      background: "purple",
      padding: "20px",
      margin: "0 20px"
    }
  }
});
 */
var vm = new Vue({
  el: "#app",
  data: {
    currentRoute: 'features'
  }
});