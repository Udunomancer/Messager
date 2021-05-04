const parentNames = ["jon", "alex"];
const firstNameEndings = ["ien", "iel", "ion"];
const secondNames = ["middle"];
const thirdNames = ["third"];

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

console.log(createFirstName());