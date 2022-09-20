const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const pokemonRouter = require("./routes/pokemon");
// const userRouter = require("./routes/user");
// const authRouter = require("./routes/auth");
// const movesRouter = require("./routes/moves");
// const typosRouter = require("./routes/tipos");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors("https://localhost:3000"));

//invocar las distintas rutas

app.use("/pokemon", pokemonRouter);
// app.use("/auth", authRouter);
// app.use("/user", userRouter);
// app.use("/create", createRouter);
// app.use("/moves", movesRouter);

app.listen(4000, () => {
  console.log("Server on");
});
