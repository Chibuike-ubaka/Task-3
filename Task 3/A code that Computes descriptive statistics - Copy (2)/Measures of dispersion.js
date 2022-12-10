// This is a JavaScript code that computes the measures of dispersion: (all of them).

// To Compute the mean of an array of numbers
function mean(numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
  }
  
  // To Compute the median of an array of numbers
  function median(numbers) {
    const sorted = numbers.sort();
    if (sorted.length % 2 === 0) {
      return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    } else {
      return sorted[Math.floor(sorted.length / 2)];
    }
  }
  
  // To Compute the mode of an array of numbers
  function mode(numbers) {
    const counts = {};
    for (const number of numbers) {
      if (counts[number]) {
        counts[number] += 1;
      } else {
        counts[number] = 1;
      }
    }
  
    let maxCount = 0;
    let maxNumber;
    for (const [number, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        maxNumber = number;
      }
    }
  
    return maxNumber;
  }
  
  // To Compute the range of an array of numbers
  function range(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
  }
  
  // To Compute the variance of an array of numbers
  function variance(numbers) {
    const meanValue = mean(numbers);
    const differences = numbers.map(n => n - meanValue);
    const squaredDifferences = differences.map(d => d * d);
    const varianceValue = mean(squaredDifferences);
    return varianceValue;
  }
  
  // To Compute the standard deviation of an array of numbers
  function standardDeviation(numbers) {
    return Math.sqrt(variance(numbers));
  }
  
  // To use these functions, you can call them on an array of numbers, like this:
  
  const numbers = [1, 2, 3, 4, 5];
  
  console.log(mean(numbers)); // 3
  console.log(median(numbers)); // 3
  console.log(mode(numbers)); // 1
  console.log(range(numbers)); // 4
  console.log(variance(numbers)); // 2.5
  console.log(standardDeviation(numbers)); // 1.5811388300841898
  
  // These functions compute the following measures of dispersion:
  
  // 1. Mean: the average value of the numbers in the array.
  // 2. Median: the middle value of the numbers in the array, after they are sorted.
  // 3. Mode: the most common value of the numbers in the array.
  // 4. Range: the difference between the largest and smallest numbers in the array.
  // 5. Variance: the average of the squared differences between the numbers in the array and their mean.
  // 6. Standard deviation: the square root of the variance