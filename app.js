var data = {
   name: 'Jane'
};
var app = new Vue({
  el: '#app',
  data: data,
  methods:{
    greet: function(name){
      return this.name + ' say hello to '+ name
    }
  }
});

console.log(app.name == data.name);
app.name = "Jim"
console.log(data.name)