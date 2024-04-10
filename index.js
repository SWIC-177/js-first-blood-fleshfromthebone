// I am not able to provide a video due to unseen events (dying internet) I shall leave notes throughout this code that explain what they do

const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];
// function checks to see if the ID of anyone in the people array is an even number

//I am not getting errors on my end, but I have a good clue of what the errors posted on the class threads mean.


function renameOdds(p) {
  //the code i++ increments a value by just one. ESlint would rather have a proper increment code so I changed it to a simple i+=1
  for (let i = 0; i < p.length; i+=1) {
    if (p[i].id % 2 !== 0) {
      p[i].name = "Odd Name";
    }
  }

  return p;
}
//the function mutates the original value to people. and overwrites the data in them. A new variable was added (oddPeople), and the value assigned is the people array run through the function.
const oddPeople = renameOdds(people)
console.log(oddPeople);