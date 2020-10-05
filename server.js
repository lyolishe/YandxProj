const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/testArray.js', function (req, res) {
  res.send(`${_dirname}/testArray.js`)
})
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 
