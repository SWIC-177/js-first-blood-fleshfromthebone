
  function verifyAdulthood(person) {
    if (personAge >= 18) {
        return `Welcome, ${personName}!`;
    }
    else {
    return `You are not old enough to enter, ${personName}.`;
    }
  }
  
  const adultMessage = verifyAdulthood(personName, personAge);
  
  console.log(adultMessage);

  // note: if i was supposed to do part two on this code on this, oopsie :/. you. you can see what i attempted in weekten.js 