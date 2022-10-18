console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished, tracks) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push (album);
    return album;
} //end addToCollection

function findByArtist ( artist ) {
    let match = [];
    for ( i=0; i<collection.length; i++) {
        if ( artist===collection[i].artist ) {
            match.push( collection[i] );
            console.log( 'added album to match:', collection[i].title );
        }
    }
    return match;
} //end findByArtist

function search (arg) {
    let match = [];
    for ( i=0; i<collection.length; i++ ) {
        if ( arg == null) { // if no value entered then returns entire collection
            return collection;
        } else if (arg.artist == collection[i].artist && arg.year == collection[i].yearPublished) { //returns all albums with matching artist and yearPublished
            match.push (collection[i] );
        } else if ( arg.artist == "" && arg.year == "" ) { // if empty artist and year string is entered, returns collection
            return collection;
        } else if (arg.tracks) { // returns albums where the track name matches
            for ( k=0; k<collection[i].tracks.length; k++ ) {
                if ( arg.tracks.name === collection[i].tracks[k].name ) {
                    match.push( collection[i]);
                }
            }
        }
    }
    return match;
} //end search function


function showCollection ( collectionArray ) {
    console.log( 'Collection length:' , collectionArray.length );
    for (i=0; i<collectionArray.length; i++) {
        console.log( collectionArray[i].title, 'by', collectionArray[i].artist, 'published in', collectionArray[i].yearPublished + ':' );
        for ( k=0; k<collection[i].tracks.length; k++ ) {
            console.log( k+1 + '. NAME:', collection[i].tracks[k].name, collection[i].tracks[k].duration );
        }
    }
} //end showCollection

console.log( 'added', addToCollection ('title1', 'artist1', 1999, [{name: 'track1', duration: '42:13'}, {name: 'track2', duration: '2:33'}, {name: 'track3', duration: '4:13'}] ), 'to collection' );
console.log( 'added', addToCollection ('title2', 'artist1', 2000, [{name: 'back1', duration: '2:13'}, {name: 'back2', duration: '1:33'}, {name: 'back3', duration: '5:13'}] ), 'to collection' );
console.log( 'added', addToCollection ('title3', 'artist1', 1999, [{name: 'pack1', duration: '12:13'}, {name: 'crack2', duration: '7:33'}, {name: 'crack3', duration: '1:13'}] ), 'to collection' );
console.log( 'added', addToCollection ('title4', 'artist2', 1979, [{name: 'stack1', duration: '2:34'}, {name: 'stack2', duration: '9:33'}, {name: 'stack3', duration: '3:33'}] ), 'to collection' );
console.log( 'added', addToCollection ('title5', 'artist2', 1699, [{name: 'knack1', duration: '2:56'}, {name: 'knack2', duration: '12:33'}, {name: 'knack3', duration: '2:23'}] ), 'to collection' );
console.log( 'added', addToCollection ('title6', 'artist3', 1959, [{name: 'pack1', duration: '2:51'}, {name: 'pack3', duration: '8:13'}] ), 'to collection' );
console.log( 'current collection:', collection )

showCollection (collection);

console.log( 'Testing findByArtist, looking for albums by artist1: ', findByArtist( 'artist1') );
console.log( 'Testing findByArtist, should return empty array: ', findByArtist( 'aerosmith') );

console.log( 'Searching for Ray Charles albums from 1957, returning results:', search ({ artist: 'Ray Charles', year: 1957 } ) );
console.log( 'Searching for albums by artist1 in year 1999:', search ({ artist: 'artist1', year: 1999 } ) );
console.log( 'Searching empty search object:', search () );
console.log( 'Search by track name, returning albums with tracks named "pack1":', search( {tracks: {name: 'pack1'}} ) );


