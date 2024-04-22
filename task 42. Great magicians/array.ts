let magician :string[] = ["HARRY HOUDINI" ,"Erich Weiss" , "JEAN HUGARD"];

function make_great ( magicianArray :string[] ){
    for( let i=0; i< magicianArray.length; i++){
        magician[i] = "The great" + "  " +  magicianArray[i]
    }

}




function show_magician (magicians : string[]){
    magician.forEach(element => {
        console.log(element);
    });
}

make_great(magician);
show_magician(magician);