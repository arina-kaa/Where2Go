const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv-flow').config();

const app = express();
const env = process.env.NODE_ENV;
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.ATLAS_URI;
mongoose
  .connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  .then(() => {
    console.log('[MongoDB Access] MongoDB database connection established successfully!');
  })
  .catch((err) => {
    console.log('[MongoDB Error] ', err);
  });

const eventRouter = require('./routes/event');
const userRouter = require('./routes/user');

app.use('/event', eventRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Server is running on ${env} port: ${port}!`));