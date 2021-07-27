//tossCoin generates a random number and if it is greater than 0.5, it returns "heads"
//else it returns "tails"
const tossCoin =()=> {
  return Math.random() > 0.5 ? "heads" : "tails";
}

//fiveHeads is a Promise that 
//1. initializes headsCount at 0
//2. initializes attempts at 0
//3. while headsCount is less than 5
    //3a. increment attempts by 1
    //3b. initialize result to tossCoin's return
    //3c. log coin face flipped this flip to console
    //3d. if result === "heads"
      //increment headsCount by 1
    //else
      //set headsCount to 0
//4.fiveHeads called and will run .then block if successful or .catch block if not
const fiveHeads = new Promise((resolve, reject) => {
  let headsCount = 0;
  let attempts = 0;

  while(headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if(result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  if(headsCount === 5 && attempts < 100) {
    resolve(`Success! It took ${attempts} tries to flip 5 heads in a row`);
  } else {
    reject("Did not complete in less than 100 attempts!")
  }
});
fiveHeads
  .then(res => console.log(res))
  .catch(err=>console.log(err));

console.log("When does this run now?");