// Code your solution in this file.
function lowerCaseDrivers(driver) {
    return driver.map( function(array) {
        return array.toLowerCase();
    });
}

function nameToAttributes(list) {
    return list.map(function(driver) {
      const driverFirst = driver.split(' ')[0];
      const driverLast = driver.split(' ')[1];
  
      return { firstName: driverFirst, lastName: driverLast };
    });
  }

function attributesToPhrase(list) {
return list.map( function(phrase) {
    return `${phrase.name} is from ${phrase.hometown}`;
});
}