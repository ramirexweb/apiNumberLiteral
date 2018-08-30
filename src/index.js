//requires
const cors = require('cors');
const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//Routes
app.use(require('./routes/number'));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});