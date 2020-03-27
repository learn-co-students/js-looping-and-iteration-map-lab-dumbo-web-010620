// Code your solution in this file.
function lowerCaseDrivers(array) {
    let newArray = array.map(name => name.toLowerCase())
    return newArray
}

let exampleStart = [ 
  'Bobby Smith',
  'Sammy Watkins',
  'Sally Jenkins',
  'Annette Sawyer',
  'Sarah Hucklebee',
  'bobby ridge' 
]

  let exampleResult = [ 
    {firstName: 'Bobby', lastName: 'Smith'},
    {firstName: 'Bobby', lastName: 'Smith'},
    {firstName: 'Bobby', lastName: 'Smith'},
    {firstName: 'Bobby', lastName: 'Smith'},
    {firstName: 'Bobby', lastName: 'Smith'},
    {firstName: 'Bobby', lastName: 'Smith'} 
]

nameToAttributes = (array) => {
    let newArray = array.map( fullNameString => stringToObject(fullNameString))
    return newArray
}

function stringToObject(string) {
    let splitString = string.split(" ")
    let newObj = {
      firstName: splitString[0], 
      lastName: splitString[1]
    }
    return newObj
}

function attributesToPhrase (array) {
    return array.map(object => objectToString(object))
}

function objectToString(object) {
    return `${object.name} is from ${object.hometown}`
}

