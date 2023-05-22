let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); // Removes the last element of an array, decrements the array length, and returns the value that it removed.
console.log(secretMessage.length);

secretMessage.push('to','Program'); // Adds one or more elements to the end of the array and returns the new length.
secretMessage[7] = 'right'; // Accessing the index and replacing it.

const removed = secretMessage.shift(); // Removes and returns the first element of the array. All subsequent elements will shift down one place.

secretMessage.unshift('Programing'); // Adds one or more elements to beginning of array and returns new length.
secretMessage.splice(6, 5, 'know'); // Modifies an array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements.

console.log(secretMessage.join(' ')); // Elements of an array are converted to strings and concatenated together, returning the resulting string.