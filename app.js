const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const app = express();


app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

const PORT = 8080;




app.get('/', (req, res) => {
  const message = "hello world";
  res.send(message);
})

app.listen(PORT, () => {
  console.log('started');
});
