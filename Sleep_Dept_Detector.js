/*Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.*/

const getSleepHours = (day) => {
    if (day === 'monday'){
      return 8
    } else if (day === 'tuesday'){
      return 7
    } else if (day === 'wednesday'){
      return 7
    } else if (day === 'thursday'){
      return 8
    } else if (day === 'friday'){
      return 9
    } else if (day === 'saturday'){
      return 9
    } else if (day === 'sunday'){
      return 8
    } else {
      return 'Invalid'
    }
  }
  
  const getActualSleepHours = () =>
  8 + 7 + 7 + 8 + 9 + 9 + 8;
  
  const getIdealSleepHours = idealHours =>  
  idealHours * 7
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(8)
    if(actualSleepHours === idealSleepHours){
      console.log('Perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours){
      console.log('You got ' + (actualSleepHours - idealSleepHours) +  ' more hour(s) of sleep than usual')
    } else if (actualSleepHours < idealSleepHours){
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed. Get some rest')
    }
  }
  calculateSleepDebt();