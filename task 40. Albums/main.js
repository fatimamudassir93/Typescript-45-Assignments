"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//  calling a function three times....
let album1 = make_album("Taylor swift", "The Tortured Poet Departments", 17);
let album2 = make_album("Atif Aslam", "Doorie", 18);
let album3 = make_album("Ali Zafar", "Jhoom", 12);
console.log(album1);
console.log(album2);
console.log(album3);
