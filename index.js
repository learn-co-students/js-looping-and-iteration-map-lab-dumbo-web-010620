// Code your solution in this file.
function lowerCaseDrivers(drivers){
    const newArr = [];
    drivers.map(function (driver) {
        newArr.push(driver.toLowerCase());
    })
    return newArr;
}

function nameToAttributes(drivers){
    return drivers.map(function (driver){
        const driverFn = driver.split(" ")[0];
        const driverLn = driver.split(" ")[1];
        return {firstName: driverFn, lastName: driverLn};
    })
   
}

function attributesToPhrase(drivers){
    return drivers.map(function (driver){
        const driverName = driver["name"];
        const hometown = driver["hometown"];
        return `${driverName} is from ${hometown}`
    })
    
}