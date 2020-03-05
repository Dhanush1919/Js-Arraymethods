//For Each
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

const temp=array1.forEach(element => element*2);
console.log(temp);


//Map
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

//Filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//include
console.log(array1.includes(9))
console.log(array1.includes(3))

//indexof
console.log(array1.indexOf(9))
console.log(array1.indexOf(16))

//findIndex
const fun=element => (element)>5
console.log(array1.findIndex(fun))

//find
const f=element => (element)>=10
console.log(array1.find(f))

//slice
const sli=array1.slice(1,3)
cons



