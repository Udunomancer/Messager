const parentNames = ["Aegn", "Amar", "Cele", "Daer", "Ecthel", "Eol", "Gil"];
const firstNameEndings = ["ien", "iel", "ion"];
const secondNames = ["Ambarussa", "Arakáno", "Ingoldo", "Turcáno"];
const thirdNames = ["Maedhros", "Gil-galad", "Cirdan", "Felagund"];

function randomComponent(componentList) {
    // Function that returns a random name component from a given array
    // Input: one arg; the array to select a component from
    // Output: String

    const index = Math.floor(Math.random() * componentList.length);
    return componentList[index];
}

function createFirstName() {
    // Function that returns a randomly assembled First name from parent name array and first name endings
    // Input: n/a
    // Output: String

    const pName = randomComponent(parentNames);
    const ending = randomComponent(firstNameEndings);

    return pName + ending;
}

function createFullName() {
    // Function that returns a randomly generated name with first, second and third names
    // Input: n/a
    // Output: String

    const fName = createFirstName();
    const mName = randomComponent(secondNames);
    const lName = Math.floor(Math.random() * 2) === 1 ? randomComponent(thirdNames) : "";

    return `${fName} ${mName} ${lName}`;
}

console.log(createFullName());