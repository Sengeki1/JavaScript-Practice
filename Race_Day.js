let raceNumber = Math.floor(Math.random() * 1000);

const runnerRegistered = true;
const runnerAge = 18;

if (runnerAge > 18 && runnerRegistered === true){
  raceNumber += 1000;
}

if (runnerAge > 18 && runnerRegistered === true){
  console.log(`Number ${raceNumber} will race at 9:30 am`);
} else if (runnerAge > 18 && runnerRegistered === false){
  console.log(`Number ${raceNumber} will race at 11:00 am`)
} else if (runnerAge < 18){
  console.log(`Number ${raceNumber}, youth registrants run at 12:30 pm (regardless of registration)`)
} else {
  console.log(`See the registration desk`)
}
