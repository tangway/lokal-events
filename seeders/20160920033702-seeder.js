// 'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('events', [{


      "title": "Darker Than Wax at Art After Dark",
      "date": "23/9/2016",
      "venue": "Red Baron - Gillman Barracks, Blk 45 Malan Road, Singapore 109455",
      "time": "8pm - 12am",
      "type": "open air club boombap",
      "description": "In conjunction with Gillman Barracks' 4th Anniversary, Darker Than Wax will be partnering with Red Baron for Art After Dark - the official after party for nightcrawlers who are looking to immerse in an imaginative space of music and culture.",
      "imageurl": "extract image url",
      "createdAt": "2016-09-19 10:19:21.334",
      "updatedAt": "2016-09-19 10:19:21.334"
    },

    {

      "title": "ArchiFest: Books x Beer",
      "date": "24/9/2016",
      "venue": "Archifest Pavilion@Raffles Place Park",
      "time": "3 - 6pm",
      "type": "book swap",
      "description": "How about some literary intoxication? Books & Beer is Singapore’s first travelling book swap, conjured out of friendship and fun, a love for books and drinks, and to raise awareness about sharing and recycling. For this edition in collaboration with Archifest, we welcome all genre of books, but encourage participants to bring titles related to architecture, or the festival theme ‘exhale’. The rules of the book swap are simple: you are invited to bring up to 10 pre-loved books, and ideally bring home the same number of books they came with. Or, just come, browse, and find some gems, and beer of course!",
      "imageurl": "wherewhere",
      "createdAt": "2016-09-19 10:19:21.334",
      "updatedAt": "2016-09-19 10:19:21.334"

    },

    {
      "title": "BLOW Canvas' 2nd Anniversary: Detroit Techno Militia",
      "date": "24/9/2016",
      "venue": "Canvas Club, Singapore 058416",
      "time": "10pm to 4am",
      "type": "Club Night",
      "description": "It’s a battle for the soul of the music, and it’s our birthday weekend! Join us as we celebrate two years of euphoric madness. Lose your minds to Detroit Techno Militia’s T.Linder & DJ Seoul, 2 DJs, 4 turntables and a whole lot of wax. Detroit Techno Militia is a DJ/Producer collective dedicated to preserving the legacy of Detroit electronic music and its proliferation around the world. Don’t miss, a lot of records all adds up to one hellacious set. ",
      "imageurl": "www",
      "createdAt": "2016-09-19 10:19:21.334",
      "updatedAt": "2016-09-19 10:19:21.334"
    },

    {
      "title": "DJ Craze Live At Cherry Discotheque",
      "date": "24/9/2016",
      "venue": "Cherry Discotheque, 21 Mount Elizabeth, Singapore 228516",
      "time": "10pm to 4am",
      "type": "Club Night",
      "description": "3x consecutive DMC World Champion. Hip hop, trap, Miami bass. yaaaas. 〰SUPPORTED BY:DREM (SG, MATTEBLACC) FVDER (SG) 〰DOOR $28 + 1 DRINK TABLE RESERVATIONS +65 9760 3031 xxx@cherryclub.sg IG: @cherrydiscotheque",
      "imageurl": "www",
      "createdAt": "2016-09-19 10:19:21.334",
      "updatedAt": "2016-09-19 10:19:21.334"
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
  }
