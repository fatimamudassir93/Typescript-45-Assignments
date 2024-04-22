// Defining a function to create a car object with optional options.
type car = {
    manufacturer: string
    model : string
    [key : string]: any
}
function create_car(manufacturer:string , model : string , optional: Record<string , any>) : car{
    return {
        manufacturer,
        model,
        ...optional
    }
}
const myCar : car = create_car("Toyota", "corolla", {color: "silver", year : 2023})
console.log(myCar)