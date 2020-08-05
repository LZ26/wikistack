const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const app = express();


app.use(morgan("dev"));



app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', require('./routes/routes'));


const PORT = 8080;

app.listen(PORT, () => {
  console.log('started');
});
