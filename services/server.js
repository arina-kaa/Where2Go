const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

require('dotenv-flow').config();

const app = express();
const env = process.env.NODE_ENV;
const port = process.env.PORT;

app.use(express.json());
app.use(express.static('public'));
app.use(fileUpload({
  createParentPath: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const mongoURI = process.env.ATLAS_URI;
mongoose
  .connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  .then(() => console.log('[MongoDB Access] MongoDB database connection established successfully!'))
  .catch((err) => console.log('[MongoDB Error] ', err));

const eventRouter = require('./routes/event');
const userRouter = require('./routes/user');

app.use('/event', eventRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Server is running on ${env} port: ${port}!`));