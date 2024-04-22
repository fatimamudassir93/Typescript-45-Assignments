"use strict";
//define function to print each magician name from an array....
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
// define an array containning magicians name.
let magician_names = ["HARRY HOUDINI", "Erich Weiss", "JEAN HUGARD"];
// call the fuction to print each magician name.
show_magicians(magician_names);
