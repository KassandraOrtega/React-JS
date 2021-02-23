var user = ['Kassandra Ortega', '@KassieO', 'Chicago, Illinois'];

// var name = user[0];
// var handle = user[1];
// var location = user[2];

var [name, hanadle, location] = user;

var csv = "1997, Ford, F350, Must Sell!"
var [year, make, model, description] = csv.split(',');