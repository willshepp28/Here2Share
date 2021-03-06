
const crypto = require('crypto');



var encrypt = function(password){
  return crypto.pbkdf2Sync(password, 'salt', 10, 512, 'sha512')
  .toString('base64');
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'willshepp44', firstname: 'Will', lastname: 'Sheppard', profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'willsheppard2@gmail.com', city: 'Charleston', state: 'SC', street: '201 main street', password: encrypt('123')},
        {id: 2, username: 'tomFord', firstname: 'Tom', lastname: 'Ford', profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'tomford@outlook.com', city: 'Charleston', state: 'SC', street: '5 virgina ave', password: encrypt('tomford66')},
        {id: 3, username: 'tammy_ballin1', firstname: 'Tammy', lastname: 'Smith', profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'tammyballin@gmail.com', city: 'Charleston', state: 'SC', street: '55 bayside blvd', password: encrypt('555')},
        {id: 4, username: 'sarahlovin5', firstname: 'Sarah', lastname: 'McCormick', profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'sarahzzzworld@yahoo.com', city: 'Charleston', state: 'SC', street: '2 davidson blvd', password: encrypt('666')},
        {id: 5, username: 'tommy_rules', firstname: 'Tom', lastname: 'Brown', profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'tombrown@gmail.com', city: 'Charleston', state: 'SC', street: '23 name street', password: encrypt('1234')},
        {id: 6, username: 'maryjohnson1', firstname: 'Mary', lastname: 'Johnson', profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'maryjohnson@gmail.com', city: 'Charleston', state: 'SC', street: '666 running street', password: encrypt('1236')},
        {id: 7, username: 'bobby1', firstname: 'Bobby', lastname: 'Johnson',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'bobby@gmail.com', city: 'Charleston', state: 'SC', street: '3 endo drive', password: encrypt('1267')},
        {id: 8, username: 'waldoisgr8', firstname: 'Waldo', lastname: 'Emerson',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'waldo@gmail.com', city: 'Charleston', state: 'SC', street: '123 makemoney street', password: encrypt('7768')},
        {id: 9, username: 'princess_jasmine', firstname: 'Jasmine', lastname: 'Greene',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'jazzy6@outlook.com', city: 'Charleston', state: 'SC', street: '9 roadrunner blvd', password: encrypt('0098')},
        {id: 10, username: 'cali_girlsrule', firstname: 'Sunny', lastname: 'Harrison',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'sunnyharrison@gmail.com', city: 'Charleston', state: 'SC', street: '723 highway street', password: encrypt('3453')},
        {id: 11, username: 'bigMoney4', firstname: 'David', lastname: 'Guess',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'bigmoney@yahoo.com', city: 'Charleston', state: 'SC', street: '543 letsgetit street', password: encrypt('76')},
        {id: 12, username: 'gotcha8', firstname: 'Ron', lastname: 'Isley',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'ronny@yahoo.com', city: 'Charleston', state: 'SC', street: '5442 president street', password: encrypt('understand2')},
        {id: 13, username: 'blackgirlmagic', firstname: 'Tameka', lastname: 'Thompson',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'tamekarules@gmail.com', city: 'Charleston', state: 'SC', street: '321 hack ave', password: encrypt('great77$')},
        {id: 14, username: 'tendalovincare', firstname: 'Becky', lastname: 'Howard',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'becky@gmail.com', city: 'Charleston', state: 'SC', street: '48 people street', password: encrypt('begreat5')},
        {id: 15, username: 'yolo3', firstname: 'Donte', lastname: 'Smalls',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'lild@gmail.com', city: 'Charleston', state: 'SC', street: '22 bass street', password: encrypt('eatingyou6')},
        {id: 16, username: 'johndoe', firstname: 'John', lastname: 'Doe',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'yaboyjohn@gmail.com', city: 'Charleston', state: 'SC', street: '1 life street', password: encrypt('peoplematter_3')},
        {id: 17, username: 'janedoe', firstname: 'Jane', lastname: 'Doe',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'yagirljane@gmail.com', city: 'Charleston', state: 'SC', street: '6 word ave', password: encrypt('getMoney3')},
        {id: 18, username: 'luckisonyourside', firstname: 'Lucky', lastname: 'Jackson',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'luckisonyourside@gmail.com', city: 'Charleston', state: 'SC', street: '686 king street', password: encrypt('getMoney4')},
        {id: 19, username: 'hustler5', firstname: 'Tony', lastname: 'Berry',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'thustle@aol.com', city: 'Charleston', state: 'SC', street: '80 mary street', password: encrypt('getMoneyzzzz')},
        {id: 20, username: 'smoothoperator', firstname: 'Smooth', lastname: 'Mitchell',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'sosmooth@gmail.com', city: 'Charleston', state: 'SC', street: '98 endo drive', password: encrypt('lifeisgreat$')},
        {id: 21, username: 'easybreezy', firstname: 'John', lastname: 'Breeze',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'iamwinning@gmail.com', city: 'Charleston', state: 'SC', street: '1100 locksley drive', password: encrypt('begreat_beawesome')},
        {id: 22, username: 'winnin5', firstname: 'Twan', lastname: 'Lock',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: '@gmail.com', city: 'Charleston', state: 'SC', street: '2 mary street', password: encrypt('mindyobizness99')},
        {id: 23, username: 'takeyoman5', firstname: 'Shirly', lastname: 'Payton',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'illtakeyoman@gmail.com', city: 'Charleston', state: 'SC', street: '8 sheppard street', password: encrypt('thegreatone')},
        {id: 24, username: 'iamaboss', firstname: 'Earl', lastname: 'Greene',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'earlgreene@gmail.com', city: 'Charleston', state: 'SC', street: '30 love street', password: encrypt('lovematters4u')},
        {id: 25, username: 'johnny99', firstname: 'Johnathon', lastname: 'Hunter',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'johnathonhunter@gmail.com', city: 'Charleston', state: 'SC', street: '5 god street', password: encrypt('undeniabletalent')},
        {id: 26, username: 'breakingbread3', firstname: 'Cornelius', lastname: 'Mcneil',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'neile@gmail.com', city: 'Charleston', state: 'SC', street: '6 genuine road', password: encrypt('genuis65#')},
        {id: 27, username: 'teamarmstrong', firstname: 'Kevin', lastname: 'Armstrong',  profilePic: 'https://image.flaticon.com/icons/png/128/149/149452.png', email: 'kevisgreat@gmail.com', city: 'Charleston', state: 'SC', street: '922 talent drive', password: encrypt('love_conquers')},
        
        
      ]);
    });
};





