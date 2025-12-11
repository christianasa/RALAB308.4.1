// Part 1-----------------------------------------------------------------------------------------------------

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Variables - to store data
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
// Cells track of commas / cells
let commas = 0;

// Looped over entire string.
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

    //Check if its the last index of loop.
    if (i == str.length - 1) {
        //if so, print last row
        console.log(cell1, cell2, cell3, cell4);
    }
}

// Part 2 -------------------------------------------------------------------------------------------------------------------
// Convert string to 2D array

// Step 1: Split the string by newlines (\n) to get an array of rows
let rows = str.split('\n');
console.log("Step 1 - Rows:", rows);

// Step 2: Create an empty array to store the 2D array
let array2D = [];

// Step 3: Loop through each row
for (let i = 0; i < rows.length; i++) {
    // Step 4: Split each row by commas to get individual cells
    let cells = rows[i].split(',');

    // Step 5: Add the array of cells to our 2D array
    array2D.push(cells);
}

console.log("Step 2 - 2D Array:", array2D);

// Part 3 -------------------------------------------------------------------------------------------------------------------
// Convert 2D array to array of objects

// Get the headers
let headers = array2D[0];
console.log(",", headers);

// Make an empty array
let arrayOfObjects = [];

//  Loop 
for (let i = 1; i < array2D.length; i++) {
    //  Get the current row
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