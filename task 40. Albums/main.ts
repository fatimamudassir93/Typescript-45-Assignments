// Describing function:

function make_album(artist_name : string , album_title : string , tracks?: number){
let album: { artist : string , title : string, tracks?: number} = {
     artist :   artist_name ,
     title  : album_title ,
},
if (tracks !== undefined) {
    album.tracks = tracks;
}
return album ;
}
//  calling a function three times....

let album1 = make_album("Taylor swift", "The Tortured Poet Departments", 17);
let album2 = make_album("Atif Aslam", "Doorie", 18);
let album3 = make_album("Ali Zafar", "Jhoom", 12);

// printing variables:

console.log(album1);
console.log(album2);
console.log(album3);
