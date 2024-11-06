# Express Sequelize Seed Example

This repository demonstrates a basic setup for seeding a SQLite database using Node.js, Express, and Sequelize. The project includes example data and routes to populate and interact with the database, making it ideal for learning or testing purposes.

## Features

- **Node.js and Express**: Provides a simple REST API setup to trigger database seeding.
- **Sequelize ORM**: Manages models and migrations, with support for SQLite as a lightweight, file-based database.
- **SQLite Integration**: No server setup required—uses a local file-based database (`database.sqlite`).
- **Bulk Seeding**: A `/seed_db` route that triggers the database to seed with sample movie data.

## Project Structure

- **models/track.model.js**: Defines the `track` model for storing movie data.
- **controllers/dataController.js**: Manages database interactions, including seeding and retrieving data.
- **lib/index.js**: Sets up Sequelize with SQLite.
- **databaseSeeder.js**: Handles the logic to seed the database with predefined data.

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-sequelize-seed-example.git
   cd express-sequelize-seed-example
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node index.js
   ```
   The server will start on `http://localhost:3000`.

### Usage

To seed the database:
1. Run the server if it’s not already running.
2. Open a browser or API client (like Postman) and navigate to:
   ```
   http://localhost:3000/seed_db
   ```
3. Check the response to confirm successful database seeding.

### Example Data

The seeding script includes an array of movie data with fields:
- **name**: Name of the song/movie track
- **genre**: Genre type (e.g., Romantic, Pop)
- **release_year**: Year of release
- **artist**: Name of the artist
- **album**: Name of the album
- **duration**: Duration of the track in minutes
