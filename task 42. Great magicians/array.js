"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ["HARRY HOUDINI", "Erich Weiss", "JEAN HUGARD"];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "The great" + "   " + magicianArray[i];
    }
}
function show_magician(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
