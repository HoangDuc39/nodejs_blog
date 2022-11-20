const { engine } = require("express-handlebars");
const path = require("path");
const express = require("express");
const methodOverride = require('method-override');
const morgan = require("morgan");

const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//Connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

route(app);

app.use(methodOverride('_method'))

app.use(morgan("combined"));
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers:{
      sum:(a, b) => a + b,
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
