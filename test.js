// Part 1-----------------------------------------------------------------------------------------------------

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// Variables - to store data
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
// Cells track of commas / cells
let commas = 0;


for (let i = 0; i < str.length; i++) {
    
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
            
            cell1 += current;
        } else if (commas == 1) {
            cell2 += current;
        } else if (commas == 2) {
            cell3 += current;
        } else {
            cell4 += current;
        }
    }

    //make a check
    if (i == str.length - 1) {
        //if so, print last row
        console.log(cell1, cell2, cell3, cell4);
    }
}

// Part 2 -------------------------------------------------------------------------------------------------------------------
// Convert string to 2D array


let rows = str.split('\n');
console.log("Step 1 - Rows:", rows);

let array2D = [];

for (let i = 0; i < rows.length; i++) {

    let cells = rows[i].split(',');

   
    array2D.push(cells);
}

console.log("Step 2 - 2D Array:", array2D);

// Part 3 -------------------------------------------------------------------------------------------------------------------
// Convert 2D array to array of objects


let headers = array2D[0];
console.log(",", headers);

// this will make an empty array
let arrayOfObjects = [];

//  this is a Loop 
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