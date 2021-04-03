Vue.component('met-departments', {
  template: `<div class="department">
        <h3>{{displayName}}</h3>
        <small>{{departmentId}}</small>
        </div>`,
  props: ['departmentId', 'displayName']
});

const vm = new Vue ({
  el: '#artApp',
  data: {
    departments: [],
    foo:"bar"
  },
  mounted:function () {
    console.log("mounted")
    axios.get('./data/met-departments.json').then((response) => {
      console.log('response', response);
      vm.departments = response.data;
      console.log(vm.departments);
    });
  }
})
