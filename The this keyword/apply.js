// call arguments as an array

var sayName= function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ' and ' + lang3 + '.')
  };
  
  var stacey = {
    name: 'Stacey',
    age: 34
  };
  
  var languages = ['JavaScript', 'Ruby', 'Python'];
  
  sayName.apply(stacey, languages);