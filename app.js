const express = require("express");
const morgan = require("morgan");
const views = require("./views");
const app = express();
const { db, Page, User } = require("./models");
const wikiRoute = require("./routes/wiki");
const userRoute = require("./routes/users");
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./static"));
app.use("/wiki", wikiRoute);
app.use("/users", userRoute);
// urlencoded??

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send(views.main());
});

const init = async () => {
  //   await Page.sync();
  //   await User.sync();
  await db.sync({ force: true });

  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(
      `This process is now officially listening for HTTP messages!
    It is listening for those signals on port ${PORT}. :)
    Happy requesting!`
    );
  });
};

init();
