// get all female dogs less than 3 years old

var dogs = [
  {name: 'a', age: 10, gender: 'male'},
  {name: 'b', age: 2, gender: 'female'},
  {name: 'c', age: 7, gender: 'male'},
  {name: 'd', age: 1, gender: 'female'},
  {name: 'e', age: 4, gender: 'male'},
  {name: 'f', age: 6, gender: 'female'}
];

var youngFemales = [];

function Dogs(){

}

Dogs.getYoungFemales = function(dogsArray){
  return dogsArray.filter(function(d){
    return d.gender === 'female' && d.age < 3
  });
};

youngFemales = Dogs.getYoungFemales(dogs);
console.log('youngFemales: ', youngFemales);
