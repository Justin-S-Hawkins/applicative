/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let empty = []
  let frequencyOfYears ={};
  let maxFrequency = 0;
  let mostFrequent = null;
  const asteroids = data.asteroids.filter((object) =>{ 
    empty.push(object.discoveryYear)
  })
  for (const year of empty){
    frequencyOfYears[year] = (frequencyOfYears[year] || 0) + 1;
    if (frequencyOfYears[year] > maxFrequency) {
      maxFrequency = frequencyOfYears[year];
      mostFrequent = year;
    }
  }
   return mostFrequent
  }


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
