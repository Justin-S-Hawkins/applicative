import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
  // Your code goes here...
  const allPlanets = data.planets;
  let newName =[];
  const planetsNames = allPlanets.filter(
  object => newName.push(object.name)
  )
                                        
  
  return newName

  }





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
