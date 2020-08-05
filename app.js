const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const app = express();
// const { db } = require('./models');


app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', require('./routes/routes'));

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })


const PORT = 5432;

app.listen(PORT, () => {
  console.log('started');
});
