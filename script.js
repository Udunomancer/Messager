const parentNames = ["jon"];
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

console.log(randomComponent(firstNameEndings))