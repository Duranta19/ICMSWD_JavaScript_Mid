let book_title = []
let author_name = []
let num_copies = []

function createBookList(title,author,copies){
    book_title.push(title);
    author_name.push(author);
    num_copies.push(copies);
}

function addItem(title,copies){
    const i = book_title.indexOf(title)
    let current = num_copies[i];
    let update = num_copies[i]+copies;
    num_copies[i] = update;
}
function sellItem(title,copies){
    const i = book_title.indexOf(title)
    let current = num_copies[i];
    let update = num_copies[i]-copies;
    num_copies[i] = update;
}
function getDetails(){
    for(let i =0; i< book_title.length; i++){
        console.log(book_title[i] + " by " + author_name[i] + " number of copies available :" + num_copies[i])
    }
}

createBookList('Bohubrihi', 'Humayun Ahmed', 10)
addItem('Bohubrihi', 5)
sellItem('Bohubrihi', 3)
getDetails()