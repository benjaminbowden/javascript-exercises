const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {

        if (Object.keys(oldest).length !== 0) {
            if (!person.hasOwnProperty('yearOfDeath')) {
                person.yearOfDeath = new Date().getFullYear();
            }
            if (!oldest.hasOwnProperty('yearOfDeath')) {
                oldest.yearOfDeath = new Date().getFullYear(); // Assign current year only if yearOfDeath is missing
            }
            console.table(person)
            return oldest.yearOfDeath - oldest.yearOfBirth > person.yearOfDeath - person.yearOfBirth ? oldest : person
        }
        else {
            return person
        }
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
