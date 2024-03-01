// Index.js or your main server file
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to register a new user
app.post('/register', async (req: { body: { name: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: unknown): void; new(): any; }; }; }) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
