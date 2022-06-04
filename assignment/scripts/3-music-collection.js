console.log('***** Music Collection *****')

//add function

let collection = [];


function addToCollection(title, artist, yearPublished){
    collection.push('albumOne','albumTwo','albumThree','albumFour','albumFive','albumSix','albumSeven');
        return {
            'albumOne': {
                title: title,
                artist:  artist,
                yearPublished: yearPublished
            },
            'albumTwo': {
                title: 'Crazy',
                artist: 'Rozes',
                yearPublished: '2022'
            },
            'albumThree': {
                title: 'Crazy',
                artist: 'Rozes',
                yearPublished: '2022'
            },
            'albumThree': {
                title: 'Crazy',
                artist: 'Rozes',
                yearPublished: '2022'
            },
            'albumFour': {
                title: 'Crazy',
                artist: 'Rozes',
                yearPublished: '2022'
            },
            'albumFive': {
                title: 'Crazy',
                artist: 'Rozes',
                yearPublished: '2022'
            },
            'albumSix': {
                title: 'Crazy',
                artist: 'Rozes',
                yearPublished: '2022'
        }
    };

//collection.push(title, artist, yearPublished);

console.log(addToCollection('The best','Miley','2023'));
console.log(`${collection}`);

//end funtion

//test function

/*
let music = {
    collection.push('albumTwo');
        return {
        'albumTwo': {
            title: 'Crazy',
            artist: 'Rozes',
            yearPublished: '2020'

        }
    }
}
*/