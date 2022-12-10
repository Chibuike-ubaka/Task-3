
// The measures of central tendency: 3 of them

//--------------------------------------------------------------
// Function to calculate the mean
function mean(numbers) {
    let sum = 0;
  
    // Iterate over the array of numbers and calculate their sum
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // Return the mean by dividing the sum by the number of elements in the array
    return sum / numbers.length;
  }
  
  // Function to calculate the median
  function median(numbers) {
    // First, we need to sort the array in ascending order
    numbers.sort((a, b) => a - b);
  
    // If the length of the array is odd, return the middle element
    if (numbers.length % 2 === 1) {
      return numbers[Math.floor(numbers.length / 2)];
    }
  
    // If the length of the array is even, return the average of the two middle elements
    return (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
  }
  
  // Function to calculate the mode
  function mode(numbers) {
    // Create an object to store the frequency of each number in the array
    let frequency = {};
  
    // Iterate over the array and store the frequency of each number
    for (let i = 0; i < numbers.length; i++) {
      if (frequency[numbers[i]]) {
        frequency[numbers[i]]++;
      } else {
        frequency[numbers[i]] = 1;
      }
    }
  
    // Create a variable to store the mode
    let mode = 0;
  
    // Iterate over the frequency object and find the number with the highest frequency
    for (let key in frequency) {
      if (frequency[key] > mode) {
        mode = key;
      }
    }
  
    // Return the mode
    return mode;
  }
  
  // Example:
  
  // Calculate the mean of the array [1, 2, 3, 4, 5]
  console.log(mean([1, 2, 3, 4, 5])); // 3
  
  // Calculate the median of the array [1, 2, 3, 4, 5]
  console.log(median([1, 2, 3, 4, 5])); // 3
  
  // Calculate the mode of the array [1, 2, 3, 4, 5]
  console.log(mode([1, 2, 3, 4, 5])); // 1
  
  
  