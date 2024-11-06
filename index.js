const express = require("express");  
let { track } = require("./models/track.model");  // Model for the track, which likely represents the database schema for movie data
let { sequelize } = require("./lib/index");  // Sequelize instance used to connect to the database
const app = express();  

// Middleware setup
app.use(express());  

// Movie data array to seed the database
let movieData = [
  {
    name: 'Raabta',
    genre: 'Romantic',
    release_year: 2012,
    artist: 'Arijit Singh',
    album: 'Agent Vinod',
    duration: 4,
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
