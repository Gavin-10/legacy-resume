const express = require("express");
const corsMiddleware = require('./cors');
const app = express();

app.use(express.json());
app.options('*', corsMiddleware);
app.use(corsMiddleware);

app.get("/", (req, res) => {
  res.send("Server Started");
});

const fakeData = require('./fakeDatabase/fakeData');
app.use('/fakeData', fakeData);

const messages = require('./messages/messages');
app.use('/messages', messages);

app.listen(3000);