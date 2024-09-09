import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';


const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, 'users.json');


if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify([]));
}


const readUsers = () => {
  const usersData = fs.readFileSync(dataPath);
  return JSON.parse(usersData);
};


const writeUsers = (users) => {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
};


app.post('/register', (req, res) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const users = readUsers();

  
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ success: false, message: 'Username already exists.' });
  }

  
  users.push({ username, password });
  writeUsers(users);

  res.json({ success: true, message: 'Registration successful.' });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();

  
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful.' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid username or password.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
