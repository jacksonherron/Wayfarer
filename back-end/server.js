const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes');
// const routes = require('./routes')
const app = express();

const PORT = process.env.PORT || 4000;




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleString();
    console.table({ url, method, requestedAt });
    next();
});


app.use(session({
    secret: 'Shhhh, this is a secret...!',
    resave: false,
    saveUninitialized: false 
}));


const corsOptions = {
    origin: ['http://localhost:3000'], // string or array
    credentials: true, // This allows the session cookie to be sent back and forth
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('<h1>Wayfarer</h1>')
});



app.use('/api/v1/auth', routes.auth);

app.use('/api/v1/users', routes.users);

app.use('/api/v1/cities', routes.cities);

app.use('/api/v1/posts', routes.posts);







app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`)
});
