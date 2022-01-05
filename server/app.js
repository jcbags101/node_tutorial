var bodyParser = require('body-parser')
const express = require('express');
const path = require('path')
const app = express();
var router  = express.Router();

const names = ['jude', 'clarence'];

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.send('Home Page');
})

router.get('/names', (req, res) => {
    res.send(names);
})

router.get('/name/:id', (req, res) => {
    console.log(req.params, req.query);
    res.send({params: req.params, query: req.query});
})

router.post('/create_name', urlencodedParser, (req, res) => {
    const { name } = req.body

    if (name) {
        names.push(name);
        res.send({names});
    }

    res.status(401).send("Yow Error!");

})

router.get('/books/:bookId', (req, res) => {
  res.send(req.params.bookId)
})

router.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
})

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.use("/api", router);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.all('*', (req, res) => {
    res.status(404).send("resource not found!");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})