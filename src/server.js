
const express = require ('express');
const path = require('path');
const {engine} =require ('express-handlebars');
const methodOverride= require('method-override');
const morgan = require('morgan');
const flash = require('connect-flash');
const session= require ('express-session');
const passport= require('passport')



//Inicializations
const app = express();
require('./config/passport')

//Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join (app.get('views'), 'layouts'),
  partialsDir: path.join (app.get('views'), 'partials'),
  extname: '.hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }

}))
app.set('view engine', '.hbs');




//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.use (session ({
     secret: 'secret',
     resave: true,
     saveUninitialized:true
 })),

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


//Global Variables
app.use((req, res, next)=> {
  res.locals.mensaje_satisfactorio= req.flash('mensaje_satisfactorio');
  res.locals.mensaje_error= req.flash('mensaje_error');
  res.locals.error= req.flash('error');
  res.locals.user=req.user || null;
  next();
})

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/productos.routes'));
app.use(require('./routes/usuarios.routes'))

//Static Files
app.use(express.static(path.join(__dirname,'public')));



// app.get('/test', function (_req, res) {
//   Kitten.find({}).then(kittens => {
//       res.render('test.hbs', {
//           kittens: kittens.map(kitten => kitten.toJSON())
//       })
//   })
// });








module.exports = app