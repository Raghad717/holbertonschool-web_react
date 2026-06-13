/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object called row with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Create a const variable named newRowID with type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create updatedRow with age field set to 23
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

// Call updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// Log the results to match expected output
console.log('\\nExpected output:');
console.log('// Insert row {firstName: "Guillaume", lastName: "Salva"}');
console.log(`// Update row ${newRowID} {firstName: "Guillaume", lastName: "Salva", age: 23}`);
console.log(`// Delete row id ${newRowID}`);
