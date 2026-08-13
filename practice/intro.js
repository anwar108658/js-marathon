/*
 stack vs heap memory

 stack memory associated with primitive data types and they gave copy of the value.
 
 heap memory associated with reference data types and they gave value as a reference to the object in memory.
*/

const d = new Date();

// console.table([d.toDateString(), d.toJSON(), d.toLocaleDateString(), d.toLocaleString(), d.toLocaleTimeString(), d.toString(), d.toTimeString(), d.toUTCString()]);

const date = new Date();

// console.log(date.toDateString());


console.log(Array.from())