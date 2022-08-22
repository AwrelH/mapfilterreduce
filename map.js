  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

//_______________________________________Using a for loop
let nums = [1,2,3,4,5];
let resultof = [];
let resultin = [];
for (let num in nums) { // when _in_ is used it uses index number
  resultin.push(num * 2)
}
for (let num of nums) { // when _of_ is used it uses the acctual numbers in array <<<< correct way
  resultof.push(num * 2)
}

console.log(resultof) //<<<< correct answer
console.log(resultin)


// ___________________________________Using map()
const multipByTwo = function(num) {
  return num * 2
}

const mapResults = nums.map(multipByTwo)
console.log(mapResults)



// ___________________________________________________________Simplified w/ map()
const simplified = nums.map(function(num) { return num * 2});
console.log(simplified)


// ___________________________________Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2)


console.log(arrow)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// const studentsWithIds = students.map(students => [students.id,students.name]); // important to array[] the result or else no id, just list of names
// console.log(studentsWithIds)

