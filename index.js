const express = require("express");  
let { track } = require("./models/track.model");  // Model for the track, which likely represents the database schema for movie data
let { sequelize } = require("./lib/index");  // Sequelize instance used to connect to the database
const app = express();  

// Middleware setup
app.use(express().json();  

// Movie data array to seed the database
[
      {
        name: 'Raabta',
        genre: 'Romantic',
        release_year: 2012,
        artist: 'Arijit Singh',
        album: 'Agent Vinod',
        duration: 4,
      },
      {
        name: 'Naina Da Kya Kasoor',
        genre: 'Pop',
        release_year: 2018,
        artist: 'Amit Trivedi',
        album: 'Andhadhun',
        duration: 3,
      },
      {
        name: 'Ghoomar',
        genre: 'Traditional',
        release_year: 2018,
        artist: 'Shreya Ghoshal',
        album: 'Padmaavat',
        duration: 3,
      },
      {
        name: 'Bekhayali',
        genre: 'Rock',
        release_year: 2019,
        artist: 'Sachet Tandon',
        album: 'Kabir Singh',
        duration: 6,
      },
      {
        name: 'Hawa Banke',
        genre: 'Romantic',
        release_year: 2019,
        artist: 'Darshan Raval',
        album: 'Hawa Banke (Single)',
        duration: 3,
      },
      {
        name: 'Ghungroo',
        genre: 'Dance',
        release_year: 2019,
        artist: 'Arijit Singh',
        album: 'War',
        duration: 5,
      },
      {
        name: 'Makhna',
        genre: 'Hip-Hop',
        release_year: 2019,
        artist: 'Tanishk Bagchi',
        album: 'Drive',
        duration: 3,
      },
      {
        name: 'Tera Ban Jaunga',
        genre: 'Romantic',
        release_year: 2019,
        artist: 'Tulsi Kumar',
        album: 'Kabir Singh',
        duration: 3,
      },
      {
        name: 'First Class',
        genre: 'Dance',
        release_year: 2019,
        artist: 'Arijit Singh',
        album: 'Kalank',
        duration: 4,
      },
      {
        name: 'Kalank Title Track',
        genre: 'Romantic',
        release_year: 2019,
        artist: 'Arijit Singh',
        album: 'Kalank',
        duration: 5,
      },
    ];

// Defining a route to seed the database
app.get("/seed_db", async (req, res) => {
  try {
    // Syncs the database, recreating all tables as per models
    await sequelize.sync({ force: true });  // `force: true` drops existing tables and recreates them
    
    // Bulk inserts all data from the movieData array into the track table
    await track.bulkCreate(movieData);
    
    res.status(200).json({ message: "Database seeding successful." });
  } catch (error) {
    res.status(500).json({ message: "Error seeding the data", error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on Port : 3000");
});
