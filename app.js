var app = new Vue({
  el: '#app',
  data: {
    name: 'monjer',
    homeURL: 'http://www.monjer.me',
    vueHomeURL: '<a href="http://vuejs.org">Vue</a>',
    github: 'https://www.github.com/monjer'
  },
  methods:{
    greet: function(name){
      return this.name + ' say hello to '+ name
    }
  }
});