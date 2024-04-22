"use strict";
// making function
function make_shirt(size = "Large", print_message = " I Love Typescript ") {
    console.log(`creating a ${size} size with message "${print_message}"  on your shirt`);
}
//  calling a function with by default values.
make_shirt();
// calling a function with medium size.
make_shirt("medium");
// calling a function with small size and different message
make_shirt("small", " sky is the limit...");
make_shirt("XL", "sky is the limit");
make_shirt("XXL", "sky is the limit");
