const mongoose = require('mongoose')



const {FORM_APP_MONGODB_HOST, FORM_APP_MONGODB_DATABASE} = process.env;

const MONGODB_URI= `mongodb://${FORM_APP_MONGODB_HOST}/${FORM_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true
})

    .then (db => console.log ('Base de datos esta conectada'))
    .catch(err=> console.log (err));
