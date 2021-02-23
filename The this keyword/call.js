// call arguments one by one

var sayName= function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ' and ' + lang3 + '.')
  };
  
  var stacey = {
    name: 'Stacey',
    age: 34
  };
  
  var languages = ['JavaScript', 'Ruby', 'Python'];
  
  sayName.call(stacey, languages[0], languages[1], languages[2]);