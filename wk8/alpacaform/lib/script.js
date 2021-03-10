// Add your code here
var vm = new Vue({
  el: '#alpacaForm',
  data: {
    firstName: '',
    lastName: '',
    streetAddress: '',
    cityAddress: '',
    stateOf: [],
    availableStates: [
      { value: 'being', name: 'Being' },
      { value: 'distraction', name: 'Distraction' },
      { value: 'euphoria', name: 'Euphoria' },
      { value: 'exhaustion', name: 'Exhaustion' },
      { value: 'mind', name: 'Mind' },
      { value: 'play', name: 'Play' }
    ],
    countryName: '',
    selectedColors: [],
    colors: [
      { name: 'Fawn (light, medium, dark)', value: 'fawn' },
      { name: 'True Black', value: 'black' },
      { name: 'Rose Gray', value: 'rose-gray' },
      { name: 'Silver Gray', value: 'silver' },
      { name: 'Variegated', value: 'variegated' },
      { name: 'Argyle', value: 'argyle' }
    ],
    alpacaStatus: '',
    rateStatus: []
  }
});
