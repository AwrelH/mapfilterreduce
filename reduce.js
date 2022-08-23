/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// nums = [0,1,2,3,4,];
// let sum = nums.reduce((acc, curr) => acc + curr, 1); //<-- the 1 is optional and initial value is set to 1, will iterate 5 times instead of 4
// console.log(sum)

// same function as above but simplified, dissected 
nums = [0,1,2,3,4,];
let sum = nums.reduce((acc, curr) => {
    console.log(
        'acc:', acc,
        'curr:', curr,
        'total:', acc + curr);
        return acc + curr;
}, 1); //<-- the 1 is optional and initial value is set to 1, will iterate 5 times instead of 4
console.log(sum)

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  const totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience,0)
  console.log(totalExperience)
  
  // Grouping by a property, and totaling it too

  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if(!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;

  }, {}) //{}<<---is the initial value an object

  console.log(experienceByProfession)