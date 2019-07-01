const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const firebase = require('firebase');
const path = require('path')
const app = express();

mongoose.Promise = global.Promise;
//connect to mongoose

// DB Config
const db = require("./config/Keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


//mongoose query use
mongoose.set('useFindAndModify', false);

//passport initializing
app.use(passport.initialize());


//firebase
    
firebase.initializeApp(  {
    apiKey: "AIzaSyDO_7h91LYjh5kyC2GuHVpH2GpzHrgIFi8",
    authDomain: "ghar-gruh.firebaseapp.com",
    databaseURL: "https://ghar-gruh.firebaseio.com",
    projectId: "ghar-gruh",
    storageBucket: "ghar-gruh.appspot.com",
    messagingSenderId: "584368355111",
    appId: "1:584368355111:web:71cbf79435e3cb01"
  })
  console.log('firebase connected');

app.get('/', (req,res) => {
    res.send('hello world')
  })
//config passport
require("./config/passport")(passport);

//middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());

const Landing = require('./routes/Auth')
const Property = require('./routes/Property')
app.use('/',Landing,Property)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*' ,(req,res) => {
    res.sendFile(path.resolve(__dirname,'client', 'build' , 'index.html'))
  })
}


const port = process.env.port || 5555;

app.listen(port, () => {
    console.log(`server is up and runing on ${port} `);
  });
  