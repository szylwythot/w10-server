const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.use(express.json());
    
// app.post('/', function (req, res) {
//     console.log(req.body.name)
//     res.end();
// })
  
// app.listen(port, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", port);
// });