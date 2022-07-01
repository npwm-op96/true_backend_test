const express = require('express')
const app = express()
const cors = require("cors");


const db = require("./model");
var corsOptions = {
    origin: "http://localhost:4200"
  };
app.use(cors(corsOptions));

const port = 5500;

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/member.routes")(app);
require("./routes/address.routes")(app);


// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.send('hello world')
})

app.put('/', (req, res) => {
    res.send('hello world')
})

app.delete('/', (req, res) => {
    res.send('hello world')
})


// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

