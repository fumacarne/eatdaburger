const express = require("express");
const htmlRoutes = require('../eatdaburger/routing/htmlRoutes');
const apiRoutes = require("./routing/apiRoutes.js");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const PORT =8001;

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`)
})


