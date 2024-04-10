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
function renameOdds(p) {
  for (let i = 0; i < p.length; i++) {
    if (p[i].id % 2 !== 0) {
      p[i].name = "Odd Name";
    }
  }

  return p;
}

console.log(renameOdds(people));