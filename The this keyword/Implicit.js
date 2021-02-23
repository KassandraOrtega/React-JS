// Implicit Binding 
// Left of the Dot at Call Time

var me = {
    name: 'Kassie',
    age: 23,
    sayName: function(){
        console.log(this.name);
  }
};
me.sayName();



var sayNameMixin = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    };
};
var me = {
    name:'Kassie',
    age: 23
};
var you = {
    name: 'Yessenia',
    age: 23
};
sayNameMixin(me);
sayNameMixin(you);
me.sayName();
you.sayName();



var Person = function(name, age){
    return{
        name: name,
        age: age,
        sayName: function(){
        console.log(this.name);
        },
        mother: {
        name: 'Stacey',
        sayName: function(){
            console.log(this.name);
            }
        }
    };
};
var jim = Person('Jim', 42);
jim.sayName();
jim.mother.sayName();