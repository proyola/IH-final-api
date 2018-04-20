
const mongoose = require('mongoose');
require('../configs/db.config');
const Artist = require('../models/artist.model');

const artists = [
  {
    "name": "Foo Fighters",
    "style": "alternative Rock",
    "city": "Seattle",
    "album": [
      "One by one",
      "The colour and the shape",
      "There is nothing left to loose",
      "In your honor",
      "Echoes, Patience, Silence and Grace",
      "Wasting light"
    ]
  },
  {
    "name": "Guns 'n Roses'",
    "style": "Hard Rock",
    "city": "Los Angeles",
    "album": [
      "Appetite for destruction",
      "G'N R Lies",
      "Use your illusions",
      "The spaguetti incident?"
    ]
  },
  {
    "name": "Queens of the stone age",
    "style": "alternative Rock",
    "city": "Palm Dessert",
    "album": [
      "Queens of the stone age",
      "Rated R",
      "Songs for the deaf",
      "Era vulgaris"
    ]
  },
  {
    "name": "Red Hot Chilli Peppers",
    "style": "Funk Rock",
    "city": "Los Angeles",
    "album": [
      "Freaky Styley",
      "Blood sugar sex magic",
      "Californication",
      "By the way"
    ]
  },
  {
    "name": "Iron Maiden",
    "style": "Heavy Metal",
    "city": "Londres",
    "album": [
      "Iron Maiden",
      "The number of the beast",
      "Killers",
      "The book of souls"
    ]
  },
  {
    "name": "Metallica",
    "style": "Heavy Metal",
    "city": "Los Angeles",
    "album": [
      "Kill 'em all'",
      "Ride the Lightning",
      "Master of puppets",
      "And Justice for all"
    ]
  },
  {
    "name": "Arctic Monkeys",
    "style": "Indie Rock",
    "city": "Sheffield",
    "album": [
      "Whatever people say I am, I'm not",
      "Favourite worst nightmare",
      "Suck it and see",
      "AM"
    ]
  },{
    "name": "Queen",
    "style": "Hard Rock",
    "city": "Londres",
    "album": [
      "Queen",
      "A Night at the Opera",
      "A Day at the Races",
      "A King of Magic"
    ]
  },
  {
    "name": "Placebo",
    "style": "Alternative rock",
    "city": "Londres",
    "album": [
      "Placebo",
      "Without you I'm nothing",
      "Black Market Music",
      "Sleeping with ghosts"
    ]
  },{
    "name": "Pearl Jam",
    "style": "Grunge",
    "city": "Seattke",
    "album": [
      "Ten",
      "Vitalogy",
      "No Code",
      "Yield"
    ]
  },
  {
    "name": "Franz Ferdinand",
    "style": "Indie Rock",
    "city": "Glasgow",
    "album": [
      "Franz Ferdinand",
      "You could have it so much better",
      "Tonight: Franz Ferdinand",
      "Right thoughts, right words, right actions"
    ]
  }

];

Artist.create(artists)
  .then(() => {
    console.info("Seeds success:", artists);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("Seeds error:", artists);
    mongoose.connection.close();
  });
