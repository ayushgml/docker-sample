import express from 'express';
import connectToDatabase from './db.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Ayush says Hello!</h1>');
});

await connectToDatabase();

app.listen(3000);
