const findTheOldest = function(people) {
    people.sort((person1, person2) => {
        let person1Age;
        let person2Age;
        if (!person1.yearOfDeath) {
            person1Age = (new Date()).getFullYear() - person1.yearOfBirth;
        } else {
            person1Age = person1.yearOfDeath - person1.yearOfBirth;
        }

        if (!person2.yearOfDeath) {
            person2Age = (new Date()).getFullYear() - person2.yearOfBirth;
        } else {
            person2Age = person2.yearOfDeath - person2.yearOfBirth;
        }
        return (person2Age) - 
            (person1Age);
            
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
