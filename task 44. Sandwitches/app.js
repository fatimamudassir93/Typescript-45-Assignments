"use strict";
// define a function with rest parameter
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwitch(...items) {
    console.log("\n make a sandwitch with following items: \n");
    items.forEach(single_item => console.log(single_item));
    console.log("\n now enjoy your sandwitch");
}
// calling the function 3 times each time with different arguments.
makeSandwitch("Beef patty", "cheese", "tomato ketchup", "salad leave", "garlic mayo", "Bun");
makeSandwitch("CHicken patty", "tomato ketchup", "garlic mayo", "bun");
makeSandwitch("chicken patty", "bun");
