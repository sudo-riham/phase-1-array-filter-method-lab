function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

function matchName(array,name) {
    console.log(name)
    console.log(array)
let results = array.filter(object => object.name === name);
console.log(results)
return results
}