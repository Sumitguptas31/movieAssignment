//import result from './controller/movieController.js';

//let result=require('./controller/movieController')

const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://rahat6713:1819rahat@cluster0.iee0y.mongodb.net/sumit?retryWrites=true&w=majority", {useNewUrlParser: true ,  useUnifiedTopology: true })
    .then(() => console.log('mongodb is Conected'))
    .catch(err => console.log(err) )




    
    

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
