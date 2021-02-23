//window binding
var sayAge = function(){
  'use strict';
  console.log(this.age);
};

var me = {
  age: 25
};

sayAge();
window.age = 35;
sayAge();