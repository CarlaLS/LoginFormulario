const mongoose = require('mongoose')



// const TIEMPO_EXPIRACION= 20000;

mongoose.connect(process.env.MONGODB_ATLAS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
})

    .then (db => console.log ('Base de datos esta conectada'))
    .catch(err=> console.log (err));





//  const TIEMPO_EXPIRACION = 20000;
// const {FORM_APP_MONGODB_HOST, FORM_APP_MONGODB_DATABASE} = process.env;

// const MONGODB_URI= `mongodb://${FORM_APP_MONGODB_HOST}/${FORM_APP_MONGODB_DATABASE}`;

// mongoose.connect(MONGODB_URI, TIEMPO_EXPIRACION, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     // useCreateIndex: true
// })

//     .then (db => console.log ('Base de datos esta conectada'))
//     .catch(err=> console.log (err));
