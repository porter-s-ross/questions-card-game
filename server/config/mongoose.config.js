const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/questiondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://ross:ross@cluster0.fn2xv.mongodb.net/question?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));

