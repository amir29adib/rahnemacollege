// import sqlite3 from 'sqlite3';
// const db = new sqlite3.Database('referendum.db');

// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS users (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             role TEXT NOT NULL,
//             username TEXT NOT NULL,
//             password TEXT NOT NULL
//           );`);

//   db.run(`CREATE TABLE IF NOT EXISTS plans (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             title TEXT
//           );`);

//   db.run(`CREATE TABLE IF NOT EXISTS programs (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             plan_id INTEGER,
//             user_id INTEGER,
//             title TEXT
//           );`);

//   db.run(`CREATE TABLE IF NOT EXISTS votes (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             plan_id INTEGER,
//             user_id INTEGER
//           );`);

//   db.run('INSERT OR IGNORE INTO users (id, role, username, password) VALUES (1, "Manager", "admin", "admin1234")');
// });

// db.close();
