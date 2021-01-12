const express = require("express");
const connectDB = require("./src/db");
const moviesRoutes = require("./src/routes/movies");
const directorRoutes = require("./src/routes/director");
const tvShowRoutes = require("./src/routes/tvShow");
const actorsRouter = require("./src/routes/actors");
const authRouter = require("./src/routes/auth");

//create  server
const app = express();

//connect BD
connectDB();

app.use(express.json());

//Routes
app.use("/movies", moviesRoutes);
app.use("/director", directorRoutes);
app.use("/tvshow", tvShowRoutes);
app.use("/actors", actorsRouter);
app.use("/auth", authRouter);

//port
const port = 4000;

//start the app from the server
app.listen(port, () => {
  console.log(`The server is running on the port: ${port}`);
});
