// Describing a function..
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling a funtion
describe_city("karachi");
describe_city("Quetta");
describe_city("Lahore");
describe_city("California", "United States Of America");
