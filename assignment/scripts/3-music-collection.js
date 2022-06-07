console.log('***** Music Collection *****')

//start function 1
console.log('---Function 1---');

let collection = [];


// function addToCollection(title, artist, yearPublished){
//         return {
//             title: title,
//             artist:  artist,
//             yearPublished: yearPublished

//         }
            
// };


function addToCollection(title, artist, yearPublished){
        let album = {
            title: title,
            artist:  artist,
            yearPublished: yearPublished

        }
        collection.push(album);    
        return album
};

// let collectOne = addToCollection('The best','Miley','2023');
console.log('Miley:', addToCollection('The best','Miley','2023'));


//end function 1


//start test function
console.log('---Test Function 1 ---');


// let collectTwo = addToCollection('YOU','Ali Gatie','2019');
console.log('Ali 2019:', addToCollection('YOU','Ali Gatie','2019'));
// collection.push(collectTwo);

// let collectThree = addToCollection('The Idea of Her','Ali Gatie','2021');
console.log('Ali 2021:', addToCollection('The Idea of Her','Ali Gatie','2021'));
// collection.push(collectThree);

// let collectFour = addToCollection('Stripped','Faouzia','2020');
console.log('Faouzia:', addToCollection('Stripped','Faouzia','2020'));
// collection.push(collectFour);

// let collectFive = addToCollection('Trying Not To Think About it','JoJo','2021');
console.log('JoJo:', addToCollection('Trying Not To Think About it','JoJo','2021'));
// collection.push(collectFive);

// let collectSix = addToCollection('From the Outside','Hey Violet','2017');
console.log('Hey Violet:', addToCollection('From the Outside','Hey Violet','2017'));
// collection.push(collectSix);

// let collectSeven = addToCollection('Crazy','Rozes','2022');
console.log('Rozes:', addToCollection('Crazy','Rozes','2022'));
// collection.push(collectSeven);

console.log('Music options:', collection);

//end test function

//start function 2
console.log('---Function 2---');


function showCollection(array) {
    console.log('Numbers in array is:', 7);
    let i = 0;
    for (let i=0; i < collection.length; i++){
            console.log(collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);

    }

}

// function showCollection(array) {
//     console.log('Number of items:', 7);
//     let i = 0;
//         while (i < collection.length) {
//             console.log(collection[i].title + 'by' + collection[i].artist + 'published in' + collection[i].yearPublished);
//             i++;
//     }
// };

showCollection(collection);
//console.log(showCollection('collection'));

//end function 2




//start function 3
console.log('---Function 3---');



function findByArtist(artist) {
    let findIt = [];
    for (let i=0; i < collection.length; i++){
        if (collection[i].artist === artist) {
            findIt.push(artist);
            break;
        }
    }
    return findIt;
}



//findByArtist('JoJo');
console.log('Match!:', findByArtist('JoJo'));




//end function 3