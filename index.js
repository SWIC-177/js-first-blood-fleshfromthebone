const person = [personName= "John", personAge= 24,];
  
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