const findTheOldest = function(people) {
    people.sort((person1, person2) => {
        return (person2.yearOfDeath - person2.yearOfBirth) - 
            (person1.yearOfDeath - person1.yearOfBirth)
            
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
