const person = {
    name: "Mieke",
    age: 38
};
const evaluations = [7, 10, 9];
const selectedColors = ["groen", "blauw", "rood"];
/*
console.log(person);
console.log(person.name);
console.log(person.age);
console.log["name"];
console.log["age"];

console.log(evaluations);
*/
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);
console.log(selectedColors[2]);
console.log(selectedColors.lastIndexOf("rood"));
console.log(selectedColors[selectedColors.length - 1]);
selectedColors.push("geel");
selectedColors.push(5);
console.log(selectedColors);
selectedColors.push({greeting: "Hi ik ben een object"});
console.log(selectedColors[5]);
console.log(selectedColors[5].greeting);



