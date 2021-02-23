// exactly like call, but instead of immediately invoking the function
// it returns a brand new function that you can invoke later
var sayName= function(lang1, lang2, lang3){
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ' and ' + lang3 + '.')
};

var stacey = {
  name: 'Stacey',
  age: 34
};

var languages = ['JavaScript', 'Ruby', 'Python'];

var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
newFn();