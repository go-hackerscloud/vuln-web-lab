# creates initial DB and sample data

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'db', 'database.sqlite');
const fs = require('fs');

if (!fs.existsSync(path.dirname(dbPath))) fs.mkdirSync(path.dirname(dbPath), { recursive: true });
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY, author TEXT, comment TEXT)");

  db.run("INSERT OR IGNORE INTO users (username, password) VALUES ('admin','Password123!')");
  db.run("INSERT OR IGNORE INTO users (username, password) VALUES ('guest','guest')");

  const stmt = db.prepare("INSERT INTO posts (title, content) VALUES (?, ?)");
  stmt.run("Welcome", "This is a welcome post.");
  stmt.run("Test Post", "Search me!");
  stmt.finalize();

  console.log("Seed complete.");
  db.close();
});
