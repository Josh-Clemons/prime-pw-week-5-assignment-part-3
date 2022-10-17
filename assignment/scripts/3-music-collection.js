console.log('***** Music Collection *****')
let collection = [];

function addToCollection (title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push (album)
    return album;
} //end addToCollection

function findByArtist ( artist ) {
    let match = [];
    for ( i=0; i<collection.length; i++) {
        if ( artist===collection[i].artist ) {
            match.push( collection[i].title );
            console.log( 'added album to match:', collection[i].title );
        }
    }
    return match;
} //end findByArtist

function search (arg) {
    let match = [];
    for ( i=0; i<collection.length; i++ ) {
        if ( arg == null) {
            return collection;
        } else if (arg.artist == collection[i].artist && arg.year == collection[i].yearPublished) {
            match.push (collection[i] );
        } else if ( (arg.artist == "" || arg.artist == null) && (arg.year == "" || arg.year == null ) ) {
            return collection;
        }
    }
    return match;
} //end search function


function showCollection ( collectionArray ) {
    console.log( 'Collection length:' , collectionArray.length );
    for (i=0; i<collectionArray.length; i++) {
        console.log( collectionArray[i].title, 'by', collectionArray[i].artist, 'published in', collectionArray[i].yearPublished );
    }
} //end showCollection

console.log( 'added', addToCollection ('title1', 'artist1', 1999), 'to collection' );
console.log( 'added', addToCollection ('title2', 'artist1', 2000), 'to collection' );
console.log( 'added', addToCollection ('title3', 'artist1', 1999), 'to collection' );
console.log( 'added', addToCollection ('title4', 'artist2', 1979), 'to collection' );
console.log( 'added', addToCollection ('title5', 'artist2', 1699), 'to collection' );
console.log( 'added', addToCollection ('title6', 'artist3', 1959), 'to collection' );
console.log( 'current collection:', collection )

showCollection (collection);

console.log( 'Testing findByArtist, looking for albums by artist1: ', findByArtist( 'artist1') );
console.log( 'Testing findByArtist, should return empty array: ', findByArtist( 'aerosmith') );

console.log( 'Searching for Ray Charles albums from 1957, returning results:', search ({ artist: 'Ray Charles', year: 1957 } ) );
console.log( 'Searching for albums by artist1 in year 1999:', search ({ artist: 'artist1', year: 1999 } ) );
console.log( 'Searching empty search object:', search () );