
'use strict'
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true, useUnifiedTopology: true })


//mongoose.connect('mongodb://localhost:27017/FavoriteBooks', {useNewUrlParser: true, useUnifiedTopology: true});

const BookSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String
});

const UserSchema = new mongoose.Schema({
    email: String,
    book: [BookSchema]
});

const book = mongoose.model('Book', BookSchema);
const user = mongoose.model('User', UserSchema);


function seedBookCollection() {
    const Book1 = new book({
        name: 'Jane Eyre',
        description: 'Charlotte Brontë’s Jane Eyre, another novel often assigned for reading in school, was initially published in 1847 under the pseudonym Currer Bell to disguise the fact that the writer was a woman. Fortunately, a lot has changed with regard to women in literature since 1847, and Brontë now receives the credit she deserves for one of the most-groundbreaking novels about women in history. At a time when the author felt compelled to hide her true identity, Jane Eyre provided a story of individualism for women.',
        img: 'https://cdn.britannica.com/s:800x1000/94/98994-050-2E304987/Illustration-edition-Fritz-Eichenberg-American-Jane-Eyre.jpg'
    })

    const Book2 = new book({
        name: 'One Hundred Years of Solitude',
        description: 'Charlotte Brontë’s Jane Eyre, another novel often assigned for reading in school, was initially published in 1847 under the pseudonym Currer Bell to disguise the fact that the writer was a woman. Fortunately, a lot has changed with regard to women in literature since 1847, and Brontë now receives the credit she deserves for one of the most-groundbreaking novels about women in history. At a time when the author felt compelled to hide her true identity, Jane Eyre provided a story of individualism for women.',
        img: 'https://cdn.britannica.com/s:800x1000/03/11603-050-85A0D5EA/Gabriel-Garcia-Marquez-1982.jpg'
    })
    const Book3 = new book({
        name: 'Anna Karenina',
        description: 'Written by Russian novelist Leo Tolstoy, the eight-part towering work of fiction tells the story of two major characters: a tragic, disenchanted housewife, the titular Anna, who runs off with her young lover, and a lovestruck landowner named Konstantin Levin, who struggles in faith and philosophy. Tolstoy molds together thoughtful discussions on love, pain, and family in Russian society with a sizable cast of characters regarded for their realistic humanity.',
        img: 'https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg'
    })
    const Book4 = new book({
        name: 'Don Quixote',
        description: 'Miguel de Cervantes’s Don Quixote, perhaps the most influential and well-known work of Spanish literature, was first published in full in 1615. The novel, which is very regularly regarded as one of the best literary works of all time, tells the story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels about chivalry to revive the custom and become a hero himself.',
        img: 'https://cdn.britannica.com/s:800x1000/12/154812-050-D4E47005/Don-Quixote-Sancho-Panza-illustration-Miguel-de.jpg'
    })
    const Book5 = new book({
        name: 'The Color Purple',
        description: 'Though the epistolary novel  was most popular before the 19th century, Alice Walker became a champion of the style with her 1982 Pulitzer Prize- and National Book Award-winning novel The Color Purple. Set in the post-Civil War American South, the novel follows a young African American girl named Celie into adulthood in letters she writes to God and to her sister Nettie.',
        img: 'https://cdn.britannica.com/s:800x1000/54/90554-050-7E28D1ED/Oprah-Winfrey-The-Color-Purple.jpg'
    })
    Book1.save();
    Book2.save();
    Book3.save();
    Book4.save();
    Book5.save();
}
function seedUserCollection() {
    const user1 = new user({
        email: 'arahal81@gmail.com',
        book: [
            {
                name: 'One Hundred Years of Solitude',
                description: 'Charlotte Brontë’s Jane Eyre, another novel often assigned for reading in school, was initially published in 1847 under the pseudonym Currer Bell to disguise the fact that the writer was a woman. Fortunately, a lot has changed with regard to women in literature since 1847, and Brontë now receives the credit she deserves for one of the most-groundbreaking novels about women in history. At a time when the author felt compelled to hide her true identity, Jane Eyre provided a story of individualism for women.',
                img: 'https://cdn.britannica.com/s:800x1000/03/11603-050-85A0D5EA/Gabriel-Garcia-Marquez-1982.jpg'
            },
            {
                name: 'Don Quixote',
                description: 'Miguel de Cervantes’s Don Quixote, perhaps the most influential and well-known work of Spanish literature, was first published in full in 1615. The novel, which is very regularly regarded as one of the best literary works of all time, tells the story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels about chivalry to revive the custom and become a hero himself.',
                img: 'https://cdn.britannica.com/s:800x1000/12/154812-050-D4E47005/Don-Quixote-Sancho-Panza-illustration-Miguel-de.jpg'
            },
            {
                name: 'Jane Eyre',
                description: 'Charlotte Brontë’s Jane Eyre, another novel often assigned for reading in school, was initially published in 1847 under the pseudonym Currer Bell to disguise the fact that the writer was a woman. Fortunately, a lot has changed with regard to women in literature since 1847, and Brontë now receives the credit she deserves for one of the most-groundbreaking novels about women in history. At a time when the author felt compelled to hide her true identity, Jane Eyre provided a story of individualism for women.',
                img: 'https://cdn.britannica.com/s:800x1000/94/98994-050-2E304987/Illustration-edition-Fritz-Eichenberg-American-Jane-Eyre.jpg'
            }
        ]
    });
    const user2 = new user({
        email: 'mahmoudalhariri1994@gmail.com',
        book: [{
                name: 'The Color Purple',
                description: 'Though the epistolary novel  was most popular before the 19th century, Alice Walker became a champion of the style with her 1982 Pulitzer Prize- and National Book Award-winning novel The Color Purple. Set in the post-Civil War American South, the novel follows a young African American girl named Celie into adulthood in letters she writes to God and to her sister Nettie.',
                img: 'https://cdn.britannica.com/s:800x1000/54/90554-050-7E28D1ED/Oprah-Winfrey-The-Color-Purple.jpg'
            },
            {
                name: 'One Hundred Years of Solitude',
                description: 'Charlotte Brontë’s Jane Eyre, another novel often assigned for reading in school, was initially published in 1847 under the pseudonym Currer Bell to disguise the fact that the writer was a woman. Fortunately, a lot has changed with regard to women in literature since 1847, and Brontë now receives the credit she deserves for one of the most-groundbreaking novels about women in history. At a time when the author felt compelled to hide her true identity, Jane Eyre provided a story of individualism for women.',
                img: 'https://cdn.britannica.com/s:800x1000/03/11603-050-85A0D5EA/Gabriel-Garcia-Marquez-1982.jpg'
            },
            {
                name: 'Anna Karenina',
                description: 'Written by Russian novelist Leo Tolstoy, the eight-part towering work of fiction tells the story of two major characters: a tragic, disenchanted housewife, the titular Anna, who runs off with her young lover, and a lovestruck landowner named Konstantin Levin, who struggles in faith and philosophy. Tolstoy molds together thoughtful discussions on love, pain, and family in Russian society with a sizable cast of characters regarded for their realistic humanity.',
                img: 'https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg'
            }]
    });
    const user3 = new user({
        email: 's.ammous@ltuc.com',
        book: [{
                name: 'One Hundred Years of Solitude',
                description: 'Charlotte Brontë’s Jane Eyre, another novel often assigned for reading in school, was initially published in 1847 under the pseudonym Currer Bell to disguise the fact that the writer was a woman. Fortunately, a lot has changed with regard to women in literature since 1847, and Brontë now receives the credit she deserves for one of the most-groundbreaking novels about women in history. At a time when the author felt compelled to hide her true identity, Jane Eyre provided a story of individualism for women.',
                img: 'https://cdn.britannica.com/s:800x1000/03/11603-050-85A0D5EA/Gabriel-Garcia-Marquez-1982.jpg'
            },
            {
                name: 'The Color Purple',
                description: 'Though the epistolary novel  was most popular before the 19th century, Alice Walker became a champion of the style with her 1982 Pulitzer Prize- and National Book Award-winning novel The Color Purple. Set in the post-Civil War American South, the novel follows a young African American girl named Celie into adulthood in letters she writes to God and to her sister Nettie.',
                img: 'https://cdn.britannica.com/s:800x1000/54/90554-050-7E28D1ED/Oprah-Winfrey-The-Color-Purple.jpg'
            },
            {
                name: 'Don Quixote',
                description: 'Miguel de Cervantes’s Don Quixote, perhaps the most influential and well-known work of Spanish literature, was first published in full in 1615. The novel, which is very regularly regarded as one of the best literary works of all time, tells the story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels about chivalry to revive the custom and become a hero himself.',
                img: 'https://cdn.britannica.com/s:800x1000/12/154812-050-D4E47005/Don-Quixote-Sancho-Panza-illustration-Miguel-de.jpg' }]
    })
    const user4 = new user({
        email: 'r.abusamhan@ltuc.com',
        book: [{
                name: 'One Hundred Years of Solitude',
                description: 'Charlotte Brontë’s Jane Eyre, another novel often assigned for reading in school, was initially published in 1847 under the pseudonym Currer Bell to disguise the fact that the writer was a woman. Fortunately, a lot has changed with regard to women in literature since 1847, and Brontë now receives the credit she deserves for one of the most-groundbreaking novels about women in history. At a time when the author felt compelled to hide her true identity, Jane Eyre provided a story of individualism for women.',
                img: 'https://cdn.britannica.com/s:800x1000/03/11603-050-85A0D5EA/Gabriel-Garcia-Marquez-1982.jpg'
            },
            {
                name: 'The Color Purple',
                description: 'Though the epistolary novel  was most popular before the 19th century, Alice Walker became a champion of the style with her 1982 Pulitzer Prize- and National Book Award-winning novel The Color Purple. Set in the post-Civil War American South, the novel follows a young African American girl named Celie into adulthood in letters she writes to God and to her sister Nettie.',
                img: 'https://cdn.britannica.com/s:800x1000/54/90554-050-7E28D1ED/Oprah-Winfrey-The-Color-Purple.jpg'
            },
            {
                name: 'Don Quixote',
                description: 'Miguel de Cervantes’s Don Quixote, perhaps the most influential and well-known work of Spanish literature, was first published in full in 1615. The novel, which is very regularly regarded as one of the best literary works of all time, tells the story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels about chivalry to revive the custom and become a hero himself.',
                img: 'https://cdn.britannica.com/s:800x1000/12/154812-050-D4E47005/Don-Quixote-Sancho-Panza-illustration-Miguel-de.jpg'}]})
user1.save();
user2.save();
user3.save();
user4.save();
}

 //seedBookCollection();
// seedUserCollection();

function getBooks(req,res){
    let search_q = req.query.email;
    //let arrBooks=
    user.find({email:search_q},(err,booklist)=>{
        if (err) {
         res.send(err)
        }
        res.send(booklist[0].book);


    })
    /* user.find({email:search_q},function(err,ownerData){
        if(err){
            console.log('something went wrong');
        }
        else
        {
            // console.log(ownerData[0].cats);
            res.send(ownerData[0].cats);
        }
    })*/
}

module.exports = getBooks;