const express = require('express');
const app = express();
const port = 8000;

require('./server/config/mongoose.config')

const cors = require('cors')
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/question.route')(app);


app.listen(port, () => {console.log(`You are now listening on port ${8000}`)})
