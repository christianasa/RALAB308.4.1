// Part 1-----------------------------------------------------------------------------------------------------
// Refactoring Old Code

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Variables - to store data
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
// Cells track of commas / cells
let commas = 0;

// Looped entire string
for (let i = 0; i < str.length; i++) {
    //Saving value current char at the current index into a variable to make easier to use.
    let current = str[i];

    if (current == ",") {
        // Move to the next cell
        commas++;
    } else if (current == "\n") {
        console.log(cell1, cell2, cell3, cell4);
        // Print all cells & reset cell/comma values for next line
        commas = 0;
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
    } else {
        // For all other chars
        // Add data to a cell
        if (commas == 0) {
            // If 0 commas add current char first cell
            cell1 += current;
        } else if (commas == 1) {
            cell2 += current;
        } else if (commas == 2) {
            cell3 += current;
        } else {
            cell4 += current;
        }
    }
// ABT
    if (i == str.length - 1) {
        
        console.log(cell1, cell2, cell3, cell4);
    }
}

// Part 2 -------------------------------------------------------------------------------------------------------------------
// Expanding Functionality
//becomes
//[["ID", "Name", "Occupation", "Age"],
 //["42", "Bruce", "Knight", "41"],
 //["57", "Bob", "Fry Cook", "19"],
 //["63", "Blaine", "Quiz Master", "58"],
 //["98", "Bill", "Doctor’s Assistant", "26"]]


let rows = str.split('\n');
console.log(",", rows);


let array2D = [];

for (let i = 0; i < rows.length; i++) {

    let cells = rows[i].split(',');

    array2D.push(cells);
}

console.log(",", array2D);

// Part 3 --------------------------------------------------------------------------------------------------------------------
// Transforming Data

let headers = array2D[0];
console.log(",", headers);

let arrayOfObjects = [];


for (let i = 1; i < array2D.length; i++) {

    let row = array2D[i];
    console.log(",", row);


    let obj = {};

   
    for (let j = 0; j < row.length; j++) {
       
        let key = headers[j].toLowerCase();
        let value = row[j];

        obj[key] = value;
    }

    arrayOfObjects.push(obj);
    console.log(",", obj);
}

console.log(",", arrayOfObjects);

//Part Four
// 1. Remove the last element from the sorted array


console.log("Before removing Bill:", arrayOfObjects);

// Remove the last element
arrayOfObjects.pop();

console.log("After removing Bill:", arrayOfObjects);

// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

// Insert the object at index 1
arrayOfObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

console.log("After inserting Barry:", arrayOfObjects);


// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

arrayOfObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("After adding Bilbo:", arrayOfObjects);


// Part Five
// As a final task, transform the final set of data back into CSV format.

let header = Object.keys(arrayOfObjects[0]);
let firstString = header.join(",") + "\n";

firstString += arrayOfObjects.map(obj => {
    return header.map(h => obj[h]).join(",");
}).join("\n");

console.log(firstString);