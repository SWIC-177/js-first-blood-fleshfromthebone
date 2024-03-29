const people = [
    {
      name: "John",
      age: 17,
    },
    {
      name: "Jane",
      age: 20,
    },
    {
      name: "Mary",
      age: 25,
    },
    {
      name: "Peter",
      age: 30,
    },
    {
      name: "Paul",
      age: 35,
    },
  ];
  
  for (i = 0;i<5;i+=1 ) {
      console.log(   verifyAdulthood(people[i].name,people[i].age)   )
  }
  function verifyAdulthood(personName,personAge) {
    if (personAge >= 18) return `Welcome, ${personName}!`;
  
    return `You are not old enough to enter, ${personName}.`;
  }