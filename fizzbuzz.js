let number = 0
while (number <= 100) {
    number += 1
    if (moreNumber % 3==0) {
        console.log("Fizz")
    }
    else if (moreNumber % 5== 0){
        console.log("Buzz")
    }
    else {
        console.log(moreNumber)
    }
}


for (let moreNumber= 0; moreNumber <= 100; moreNumber +=1) {
    if (moreNumber % 3==0) {
        console.log("Fizz")
    }
    else if (moreNumber % 5== 0){
        console.log("Buzz")
    }
    else {
        console.log(moreNumber)
    }

}