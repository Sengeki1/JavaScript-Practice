let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []; // empty array to store data

for (let i = 0; i < input.length; i++){
//  console.log(`i is ${i}`); cheak's how many elements there are 
  for (let j = 0; j < vowels.length; j++){
//    console.log(`j is `+ j); cheak's how many elements there are
    if (input[i] === vowels[j]){
      resultArray.push(input[i])
    } 
  } if (input[i] === 'e'){ // double the 'e'
    resultArray.push(input[i])
  } if (input[i] === 'u'){ // double the 'u'
    resultArray.push(input[i])
  }
}
const resultString = resultArray.join(' ')
console.log(resultString.toUpperCase());