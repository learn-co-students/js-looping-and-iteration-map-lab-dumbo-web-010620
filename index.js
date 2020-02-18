// Code your solution in this file.

function lowerCaseDrivers(driversArray){
    return driversArray.map(function(driver){ // works the same way as ruby's "driversArray.map do |driver|"
        return driver.toLowerCase(); // must explicitly "return" the actual item.
    });
}

function nameToAttributes(driversArray){
    return driversArray.map(function(driver){
        const driverFirstName = driver.split(" ")[0]
        const driverLastName = driver.split(" ")[1]

        return { firstName: driverFirstName, lastName: driverLastName } // key-value pair hash <-- also known as objects. 
    });
}

function attributesToPhrase(driversArray){
    return driversArray.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`;
    });
}